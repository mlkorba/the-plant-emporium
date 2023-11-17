import admin from 'firebase-admin'
import { initializeApp, getApps } from 'firebase-admin/app'

const serviceAccountKey = env.process.FIREBASE_SERVICE_ACCOUNT_KEY;

// Connection Script
if (!getApps().length) {
  initializeApp({
    credential: admin.credential.cert(JSON.parse(serviceAccountKey)),
    databaseURL: 'https://the-plant-emporium-default-rtdb.firebaseio.com/',
    databaseAuthVariableOverride: {
      uid: 'botanicalGarden'
    }
  })
}

// app/api/firetest/route.js
const db = admin.database()

export { db }
