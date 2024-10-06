// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASGiW_CJXgMPrWlmVEsZNk3LG58z8K-EQ",
  authDomain: "fir-testapp-a7a17.firebaseapp.com",
  databaseURL: "https://fir-testapp-a7a17.firebaseio.com",
  projectId: "fir-testapp-a7a17",
  storageBucket: "fir-testapp-a7a17.appspot.com",
  messagingSenderId: "1040880689502",
  appId: "1:1040880689502:web:ba06d477fbfbc91b2d6fcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;