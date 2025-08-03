import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Firebase Config
// export const firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: "",
//   measurementId: "",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDKAcFogTOcyfgW1j38LC-6pc9Bwov9aXY",
  authDomain: "omniplex-2bd69.firebaseapp.com",
  projectId: "omniplex-2bd69",
  storageBucket: "omniplex-2bd69.firebasestorage.app",
  messagingSenderId: "546818157778",
  appId: "1:546818157778:web:3174c9cfbba292a073510b",
  measurementId: "G-J2WR7HW9E4",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

export const initializeFirebase = () => {
  return app;
};
