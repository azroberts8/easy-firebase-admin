import 'dotenv/config';
import { initializeApp, cert, App } from "firebase-admin/app";
import { getDatabase, Database } from "firebase-admin/database";


const initalizeFirebase = (databaseURL: string): App => {
  const serviceAccount = JSON.parse(
    process.env.FIREBASE_SERVICE_ACCOUNT as string
  );

  const app = initializeApp({
    credential: cert(serviceAccount),
    databaseURL
  });

  return app;
}


const getFirebaseRTDB = (databaseURL: string): Database => {
  const app = initalizeFirebase(databaseURL);
  const database = getDatabase(app);

  return database;
}

export { initalizeFirebase, getFirebaseRTDB }
