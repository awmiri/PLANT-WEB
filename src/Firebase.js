// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPH1059eh1wrvW8gpqw3bpPtUDM2J5_Os",
    authDomain: "plant-user-b02ad.firebaseapp.com",
    databaseURL: "https://plant-user-b02ad-default-rtdb.firebaseio.com",
    projectId: "plant-user-b02ad",
    storageBucket: "plant-user-b02ad.firebasestorage.app",
    messagingSenderId: "388324219736",
    appId: "1:388324219736:web:2f6218f8190f479362632d",
    measurementId: "G-QTFZWT4Y8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database