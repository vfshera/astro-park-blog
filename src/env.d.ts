/// <reference types="astro/client" />

declare module "firebase/app";

interface Post {
  title: string;
  content: string;
  author: string;
}

interface FireTimestamp {
  seconds: number;
  nanoseconds: number;
}
interface FirePost {
  title: string;
  content: string;
  created_at: FireTimestamp;
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

  readonly GHOST_CMS_DOMAIN: string;
  readonly GHOST_CMS_CONTENT_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Author {
  id: string;
  name: string;
  slug: string;
  profile_image: string | null;
  cover_image: string | null;
  bio: string | null;
  website: string | null;
  location: string | null;
  facebook: string | null;
  twitter: string | null;
  meta_title: string | null;
  meta_description: string | null;
  url: string;
}

interface GhostPost {
  id: string;
  uuid: string;
  title: string;
  slug: string;
  html: string;
  comment_id: string;
  feature_image: string;
  featured: boolean;
  visibility: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  custom_excerpt: any;
  codeinjection_head: any;
  codeinjection_foot: any;
  custom_template: any;
  canonical_url: string | null;
  authors: Author[];
  tags: string[];
  primary_author: Author;
  primary_tag: string;
  url: string;
  excerpt: string;
  reading_time: number;
  access: boolean;
  comments: boolean;
  og_image: string | null;
  og_title: string | null;
  og_description: string | null;
  twitter_image: string | null;
  twitter_title: string | null;
  twitter_description: string | null;
  meta_title: string | null;
  meta_description: string | null;
  email_subject: string | null;
  frontmatter: any;
  feature_image_alt: string | null;
  feature_image_caption: string;
}
