import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcjY7jGZEFVVHSHYNVlP7mG1OhblBvoRQ",
  authDomain: "bidchemz-5f99a.firebaseapp.com",
  databaseURL: "https://bidchemz-5f99a-default-rtdb.firebaseio.com",
  projectId: "bidchemz-5f99a",
  storageBucket: "bidchemz-5f99a.appspot.com",
  messagingSenderId: "855032720650",
  appId: "1:855032720650:web:2b062b95fa815f853edef3"
};




const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const db = getFirestore(app);

export default database;
