// Firebase SDK Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFzV1hJiY7PnXVf1dzCHCudSBdwaPaKNI",
  authDomain: "medicare-pro-hms-7c398.firebaseapp.com",
  projectId: "medicare-pro-hms-7c398",
  storageBucket: "medicare-pro-hms-7c398.firebasestorage.app",
  messagingSenderId: "567637459536",
  appId: "1:567637459536:web:d8c761b15832fc53888755"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Firebase Services
const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);


// Export Services
export { auth, db, storage };
