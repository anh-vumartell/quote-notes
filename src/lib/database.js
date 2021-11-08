// Import functions from Firebases SDK
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

//My app's Firebase configuration detail
const firebaseConfig = {
  projectName: "quote-notes",
  projectId: "quote-notes",
  projectNumber: "586707582442",
  databaseURL:
    "https://quote-notes-default-rtdb.europe-west1.firebasedatabase.app/",
};

//Initialize Firebase database
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
console.log(database);
export default database;
