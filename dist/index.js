import 'dotenv/config';
import { initializeApp, cert } from "firebase-admin/app";
import { getDatabase } from "firebase-admin/database";
const initalizeFirebase = (databaseURL) => {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    const app = initializeApp({
        credential: cert(serviceAccount),
        databaseURL
    });
    return app;
};
const getFirebaseRTDB = (databaseURL) => {
    const app = initalizeFirebase(databaseURL);
    const database = getDatabase(app);
    return database;
};
export { initalizeFirebase, getFirebaseRTDB };
