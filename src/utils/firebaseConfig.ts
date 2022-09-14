import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 
// Initialize Firebase
const app = initializeApp ({
    apiKey: "AIzaSyAGAQVYwidq2rr1gPll3TjDiOuOoXzTquA",
    authDomain: "whitehatdao.firebaseapp.com",
    projectId: "whitehatdao",
    storageBucket: "whitehatdao.appspot.com",
    messagingSenderId: "901260769865",
    appId: "1:901260769865:web:6130686f7b1f25f6005d98",
    measurementId: "G-QEV2SCSP0M",
});
 
// Firebase storage reference
const storage = getStorage(app);
export default storage;