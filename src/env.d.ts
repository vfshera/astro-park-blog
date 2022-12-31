/// <reference types="astro/client" />

declare module "firebase/app";

interface FirePost {
  title: string;
  content: string;
  created_at: any;
}
interface INews {
  date: string;
  title: string;
}
interface NavLink {
  title: string;
  href: string;
}

interface IFirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

interface ImportMetaEnv {
  readonly FIREBASE_KEY: string;
  readonly FIREBASE_AUTH_DOMAIN: string;
  readonly FIREBASE_PROJECT_ID: string;
  readonly FIREBASE_STORAGE_BUCKET: string;
  readonly FIREBASE_MESAGING_SENDER_ID: string;
  readonly FIREBASE_APP_ID: string;
  readonly FIREBASE_MEASUREMENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
