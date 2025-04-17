import 'dotenv/config';
import { App } from "firebase-admin/app";
import { Database } from "firebase-admin/database";
declare const initalizeFirebase: (databaseURL: string) => App;
declare const getFirebaseRTDB: (databaseURL: string) => Database;
export { initalizeFirebase, getFirebaseRTDB };
