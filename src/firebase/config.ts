import { initializeApp } from "firebase-admin/app";
import admin from 'firebase-admin';
import serviceAccount from './serviceAccount.json';
import {ServiceAccount} from 'firebase-admin';
import * as dotenv from 'dotenv';
dotenv.config();
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};
const app = initializeApp(firebaseConfig);

admin.initializeApp({
    credential:admin.credential.cert(serviceAccount as ServiceAccount)
})
export default {app,admin};

