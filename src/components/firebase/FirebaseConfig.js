import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0-SMyQgyjIdGjqiYRU8C2Bq7XM9mIMzE",
    authDomain: "dboard-a3921.firebaseapp.com",
    projectId: "dboard-a3921",
    storageBucket: "dboard-a3921.appspot.com",
    messagingSenderId: "629971236169",
    appId: "1:629971236169:web:7e0d81a4a4f2238d599698",
    measurementId: "G-8R5M4QTNW0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);