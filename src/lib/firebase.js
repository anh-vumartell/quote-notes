// Import functions from Firebases SDK
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
//My app's Firebase configuration detail
const firebaseConfig = {
  apiKey: "AIzaSyAVz31nXxptJDQCXFhrYkZ-HTEC-tZb5FY",
  authDomain: "quote-notes.firebaseapp.com",
  databaseURL:
    "https://quote-notes-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "quote-notes",
  storageBucket: "quote-notes.appspot.com",
  messagingSenderId: "586707582442",
  appId: "1:586707582442:web:43d93b65117e71758a8693",
};

//Initialize Firebase database
export const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
