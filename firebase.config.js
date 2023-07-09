// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVkq-r58mycT4vy5OErYQnjFDAgiL-Ak4",
  authDomain: "real-car-doctor.firebaseapp.com",
  projectId: "real-car-doctor",
  storageBucket: "real-car-doctor.appspot.com",
  messagingSenderId: "741181224567",
  appId: "1:741181224567:web:3213eaa4fc602e9275f872"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;