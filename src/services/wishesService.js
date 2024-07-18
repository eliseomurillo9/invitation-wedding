import { db } from "@/firebase";
import { ref, push, set, child, get, onValue, off } from "firebase/database";
const database = db;

export const createWishNote = async ({ uid, noteContent, name, timeStamp }) => {
  const wishesNoteListRef = ref(database, "wishes");

  const newWishRef = push(wishesNoteListRef);
  const userCanPost = await validateNote(uid);
  if (!userCanPost) {
    try {
      set(newWishRef, {
        content: noteContent,
        uid: uid,
        name: name,
        timestamp: timeStamp,
      });
    } catch (error) {
      throw new Error(error);
    }
  } else {
    throw new Error("Common.errorLimitExceeded");
  }
};

const validateNote = async (uid) => {
  const wishes = ref(database);

  const snapshot = await get(child(wishes, "wishes"));
  const wishedNotes = snapshot.val() || {};

  const hasUserReachedWishLimit =
    Object.keys(wishedNotes).filter(
      (wishNote) => wishedNotes[wishNote].uid === uid
    ).length > 3;

  return hasUserReachedWishLimit;
};

export const getWishes = (callback) => {
  const wishNotesRef = ref(database, "wishes");

  const listener = onValue(
    wishNotesRef,
    (snapshot) => {
      const data = snapshot.val();
      callback(data);
    },
    (error) => {
      throw new Error(error);
    }
  );

  return () => off(wishNotesRef, listener);
};
