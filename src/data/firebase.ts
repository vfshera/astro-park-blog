import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  DocumentData,
} from "firebase/firestore/lite";

const firebaseConfig: IFirebaseConfig = {
  apiKey: import.meta.env.FIREBASE_KEY,
  authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.FIREBASE_MESAGING_SENDER_ID,
  appId: import.meta.env.FIREBASE_APP_ID,
  measurementId: import.meta.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const postsColRef = collection(db, "posts");

export const getPosts: DocumentData = async () => {
  let posts: DocumentData = [];
  try {
    const snapshot = await getDocs(postsColRef);
    posts = snapshot.docs.map((doc) => doc.data());
  } catch (err) {
    console.log(err);
  }

  return posts;
};
