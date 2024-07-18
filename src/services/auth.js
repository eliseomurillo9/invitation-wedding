import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";

export const signInAnonym = () => {
  return signInAnonymously(auth).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    // ...
  });
};

export const getCurrentUser = async () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user) || reject("No user found");
    });
  });
};
