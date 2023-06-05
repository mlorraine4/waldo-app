import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ_1KR5QE0M0hc9-QEKMr5gNYhEI90QKY",
  authDomain: "waldo-app-be22e.firebaseapp.com",
  projectId: "waldo-app-be22e",
  storageBucket: "waldo-app-be22e.appspot.com",
  messagingSenderId: "386463113335",
  appId: "1:386463113335:web:972ed155865cee99fd6672",
  measurementId: "G-FL6B7YESVL",
};

const config = {
  apiKey: "AIzaSyAJ_1KR5QE0M0hc9-QEKMr5gNYhEI90QKY",
  authDomain: "waldo-app-be22e.firebaseapp.com",
  projectId: "waldo-app-be22e",
  storageBucket: "waldo-app-be22e.appspot.com",
  messagingSenderId: "386463113335",
  appId: "1:386463113335:web:972ed155865cee99fd6672",
  measurementId: "G-FL6B7YESVL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}

export {db}
