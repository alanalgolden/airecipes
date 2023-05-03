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
} from "firebase/firestore";
import { usePantryBuilder } from "../../context/PantryBuilderProvider";
import { db } from "../../lib/firebase/FirebaseConfig";

//Adds ingredient to user's pantry array
export const serverAddUserPantryIngredients = async (uid, ingredient) => {
  const docRef = doc(db, "userPantryIngredients", uid);

  try {
    await updateDoc(docRef, {
      pantryIngredients: arrayUnion(ingredient),
      lastModified: serverTimestamp(),
    });
  } catch (e) {
    console.error(`Error adding ${ingredient} to doc: `, e);
  }
};

//Removes ingredient from user's pantry array
export const serverDeleteUserPantryIngredients = async (uid, ingredient) => {
  const docRef = doc(db, "userPantryIngredients", uid);

  try {
    await updateDoc(docRef, {
      pantryIngredients: arrayRemove(ingredient),
      lastModified: serverTimestamp(),
    });
  } catch (e) {
    console.error(`Error deleting ${ingredient} from doc: `, e);
  }
};

//Checks the server for a user's pantry doc
export const serverCheckForUserPantryIngredients = async (uid) => {
  const docRef = doc(db, "userPantryIngredients", uid);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    try {
      console.log("No doc for userPantryIngredients!");
      return false;
    } catch (e) {
      console.error("Error checking for user doc: ", e);
    }
  }
};

//Creates a user's pantry doc on the server
export const serverCreateUserPantryIngredients = async (uid, e) => {
  const docRef = doc(db, "userPantryIngredients", uid);

  try {
    await setDoc(docRef, {
      pantryIngredients: [e],
      lastModified: serverTimestamp(),
    });
  } catch (e) {
    console.error("Error creating user doc: ", e);
  }
};

//Gets a user's pantry doc from the server
export const serverGetUserPantryIngredients = async (uid) => {
  const docRef = doc(db, "userPantryIngredients", uid);

  try {
    const doc = await getDocFromServer(docRef);
    console.log(`Got doc ${doc.data} from server!`);
    return doc.data();
  } catch (e) {
    console.log("Error getting pantry user doc from server: ", e);
    return;
  }
};

//Gets a user's pantry doc from the cache
export const cacheGetUserPantryIngredients = async (uid) => {
  const docRef = doc(db, "userPantryIngredients", uid);

  try {
    const doc = await getDocFromCache(docRef);
    console.log(`Got doc ${doc.data} from cache!`);
    return doc.data();
  } catch (e) {
    console.log("Error getting pantry user doc from cache: ", e);
    return;
  }
};

export const funcListUserPantryIngredients = async (uid) => {
  const docRef = doc(db, "userPantryIngredients", uid);

  try {
    console.log("TODO IS THIS");
  } catch (e) {
    return;
  }
};
