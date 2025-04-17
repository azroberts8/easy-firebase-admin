# Easy Firebase Admin
A firebase admin wrapper to simplify setup and initialization. Why not just use enviornment variables?  

## About
Typically, connecting firebase admin to your RTDB requires storing a `service-account.json` file in your project directory with the credentials to your firebase. This has several issues.

- Must add to `.gitignore` to prevent exposing credentials
- Annoying to import when using ESM
- Difficult to implement in automated deployments (environment variables are easier)

This package removes the overhead of firebase initialization from your project and allows you to store your service account JSON as a string environment variable instead. This prevents accidentally committing it to your repository and simplifies your deployments by removing the need to write a file to your project in deployment. (bad practice)

## Installation
```bash
npm i @azroberts/easy-firebase-admin
```

## Usage
Store your Firebase service account as a string environment variable. (Also compatible with .env files)
```
FIREBASE_SERVICE_ACCOUNT='{
  "type": "service_account",
  "project_id": "",
  "private_key_id": "",
  "private_key": "",
  "client_email": "",
  "client_id": "",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "",
  "universe_domain": "googleapis.com"
}'
```

Initialize a connection to your Firebase Realtime Database and use as normal
```js
import { getFirebaseRTDB } from '@azroberts/easy-firebase-admin';

const database = getFirebaseRTDB("https://super-apply-default-rtdb.firebaseio.com");

const ref = database.ref("/test");
ref.on("value", (snapshot) => {
  console.log(snapshot.val());
});
````

## Building
```bash
npm run build
```
