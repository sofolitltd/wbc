import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
  
  const firebaseConfig = {
    apiKey: "AIzaSyC0IRBYcExljdEg2Eh_5qc7dNsOZcxQUww",
    authDomain: "wellbeingclinicbd.firebaseapp.com",
    projectId: "wellbeingclinicbd",
    storageBucket: "wellbeingclinicbd.appspot.com",
    messagingSenderId: "243651729948",
    appId: "1:243651729948:web:83f21f3219a97a1be71dd9",
    measurementId: "G-J53GJK939V"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export default db;