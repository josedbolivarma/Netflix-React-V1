// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB25P8T_-RMMhd32U3um3W7EJFVeVo9fEs",
  authDomain: "new-netflix-5b059.firebaseapp.com",
  projectId: "new-netflix-5b059",
  storageBucket: "new-netflix-5b059.appspot.com",
  messagingSenderId: "762027902317",
  appId: "1:762027902317:web:b0f5fcee8b500205370664"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
