import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../lib/firebase/FirebaseConfig";

export const createUserDoc = async (user) => {
  const docRef = doc(db, "Users", user.uid);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    try {
      await setDoc(docRef, {
        displayName: user.displayName,
        email: user.email,
        lastModified: serverTimestamp(),
      });
      console.log(`Document created with ID: ${user.uid}`);
    } catch (e) {
      console.error(`Error creating document: ${e}`);
    }
  } else {
    console.log(`Document already exists with ID: ${user.uid}`);
  }
};
