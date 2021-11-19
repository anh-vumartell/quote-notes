// import { deleteDoc, doc, collection } from "firebase/firestore";

//Helper variable
const FIREBASE_DOMAIN =
  "https://quote-notes-default-rtdb.europe-west1.firebasedatabase.app";

//Function to get quotes from Firebase database
export const fetchQuotesHandler = async () => {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
  const quotesData = await response.json();

  if (!response.ok) {
    throw new Error(quotesData.message || "Something went wrong!");
  }
  const transformedData = [];

  for (const key in quotesData) {
    const quoteObj = {
      id: key,
      ...quotesData[key],
    };

    transformedData.push(quoteObj);
  }
  return transformedData;
};
//Function to fetch a single quote by quoteId
export const fetchSingleQuote = async (quoteId) => {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quote.");
  }

  const loadedQuote = {
    id: quoteId,
    ...data,
  };

  return loadedQuote;
};
//Function to send quote to Firebase database
export const sendQuoteHandler = async (quoteData) => {
  try {
    const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
      method: "POST",
      body: JSON.stringify(quoteData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }
    return null;
  } catch (error) {
    console.log(error.message);
  }
};

//Function to add comments to the database
export const addComment = async (requestData) => {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/comments/${requestData.quoteId}.json`,
    {
      method: "POST",
      body: JSON.stringify(requestData.commentData),
      header: { "Content-Type": "application/json" },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add comment.");
  }
  return { commentId: data.name };
};

//Function to get all comments of a specific quote
export const getAllComments = async (quoteId) => {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);
  const data = await response.json();
  console.log(data);
  if (!response.ok) {
    throw new Error(data.message || "Could not get comments");
  }
  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      text: data[key],
    };
    console.log(commentObj);
    transformedComments.push(commentObj);
  }
  return transformedComments;
};
