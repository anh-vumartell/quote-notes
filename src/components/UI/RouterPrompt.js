import React, { useCallback, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Modal } from "antd";
function RouterPrompt(props) {
  //router prompt's props
  const { when, onOk, onCancel, title, okText, cancelText } = props;

  //state slices
  const [showPrompt, setShowPrompt] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  const history = useHistory();

  useEffect(() => {
    if (when) {
      history.block((prompt) => {
        setCurrentPath(prompt.pathname);
        setShowPrompt(true);
        return true;
      });
    } else {
      history.block(() => {}); /*block navigation away from current page */
    }

    //clean up function
    return () => {
      history.block(() => {});
    };
  }, [when, history]);

  //function to handler user confirm OK
  const handleOK = useCallback(async () => {
    if (onOk) {
      const canRoute = await Promise.resolve(onOk());
      if (canRoute) {
        history.block(() => {});
        history.push(currentPath);
      }
    }
  }, [currentPath, onOk, history]);

  //function to handle user cancellation
  const handleCancel = useCallback(async () => {
    if (onCancel) {
      const canRoute = await Promise.resolve(onCancel());
      if (canRoute) {
        history.block(() => {});
        history.push(currentPath);
      }
    }
    setShowPrompt(false);
  }, [currentPath, history, onCancel]);
  return (
    <div>
      {showPrompt && (
        <Modal
          title={title}
          visible={showPrompt}
          onOk={handleOK}
          okText={okText}
          onCancel={handleCancel}
          cancelText={cancelText}
          closable={true}
        >
          These are unsaved changes. Are your sure to leave this page?
        </Modal>
      )}
    </div>
  );
}

export default RouterPrompt;
