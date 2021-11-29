import {
  getDatabase,
  ref,
  set,
  update,
  push,
  child,
  onValue,
} from "@firebase/database";
import { getAuth } from "firebase/auth";

//Global variables
const db = getDatabase();
const auth = getAuth();
//Add users node to database
export async function writeUserData(displayName, userId, email) {
  const newUserRef = await set(ref(db, "users/" + userId), {
    username: displayName,
    email: email,
    id: userId,
  });
  return newUserRef;
}

//Update user's quotes
export function addNewQuote(quoteData) {
  //Get a key for a new quote
  const newQuoteKey = push(child(ref(db), "quotes")).key;
  console.log(newQuoteKey);
  //Write the new quote's data simultaneously in the quotes-node and the user-quotes-node
  const updates = {};
  updates["quotes/" + newQuoteKey] = quoteData;
  updates["user-quotes/" + auth.currentUser.uid + "/" + newQuoteKey] =
    quoteData;

  return update(ref(db), updates);
}

//Read all quotes data
export function fetchAllQuotes() {
  let quotes = [];
  try {
    const userQuotesRef = ref(db, "quotes/");

    onValue(userQuotesRef, (snapshot) => {
      if (snapshot.exists()) {
        quotes = Object.values(snapshot.val());
        console.log(quotes);
      } else {
        throw new Error("No data available");
      }
    });
  } catch (error) {
    console.error(error);
  }
  return quotes;
}
//Remove quote

export function removeQuote(id) {
  //use database reference to update
  let locationRef = ref(db, "quotes/" + id);

  set(locationRef, null);
}
