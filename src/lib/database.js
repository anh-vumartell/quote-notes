import { getDatabase, ref, set, update, push, child } from "@firebase/database";
import { getAuth } from "firebase/auth";
//Add users node to database
export async function writeUserData(displayName, userId, email) {
  const db = getDatabase();
  const newUserRef = await set(ref(db, "users/" + userId), {
    username: displayName,
    email: email,
    id: userId,
    quotes: [],
  });
  return newUserRef;
}

//Update user's quotes
export function addNewQuote(quoteData) {
  const db = getDatabase();
  const auth = getAuth();

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
