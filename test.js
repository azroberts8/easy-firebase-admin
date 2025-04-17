import { initalizeFirebase, getFirebaseRTDB } from './dist/index.js';

const database = getFirebaseRTDB("https://super-apply-default-rtdb.firebaseio.com");

const ref = database.ref("/test");
ref.on("value", (snapshot) => {
  console.log(snapshot.val());
});
