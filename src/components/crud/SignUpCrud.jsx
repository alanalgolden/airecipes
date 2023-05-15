import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
  updateDoc,
  arrayUnion,
  getDocFromCache,
  getDocFromServer,
  collection,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../../lib/firebase/FirebaseConfig";

//Checks to see if email address has already signed up
export const serverCheckForSignUp = async (email) => {
  const docRef = doc(db, "signUpLog", email);

  try {
    const doc = await getDocFromServer(docRef);
    console.log(`Got doc ${doc.data} from server!`);
    return doc.data();
  } catch (e) {
    console.log(`No entry found for ${email} doc from server: `, e);
    return;
  }
};

//Creates a signUp Log for the user
export const serverCreateUserSignUpEntry = async (name, email) => {
  const docRef = doc(db, "signUpLog", email.toLowerCase());

  try {
    await setDoc(docRef, {
      email: email,
      name: name,
      lastModified: serverTimestamp(),
    });
  } catch (e) {
    console.error("Error creating user doc: ", e);
  }
};
