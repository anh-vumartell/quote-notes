// import { deleteDoc, doc, collection } from "firebase/firestore";

//Helper variable
const FIREBASE_DOMAIN =
  "https://quote-notes-default-rtdb.europe-west1.firebasedatabase.app";

//Function to get quotes from Firebase database
export const fetchQuotesHandler = async () => {
  try {
    const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
    const quotesData = await response.json();
    console.log(quotesData);
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
      console.log(transformedData);
    }
    return transformedData;
  } catch (error) {
    console.log(error.message);
  }
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

//Function to remove a quote from the database
