import admin from 'firebase-admin'
import { initializeApp, getApps } from 'firebase-admin/app'

// Connection Script
if (!getApps().length) {
  initializeApp({
    credential: admin.credential.cert({
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: process.env.FIREBASE_PRIVATE_KEY.replace('/\\n/g', '\n'),
      project_id: process.env.FIREBASE_PROJECT_ID
    }),
    databaseURL: 'https://the-plant-emporium-default-rtdb.firebaseio.com/',
    databaseAuthVariableOverride: {
      uid: 'botanicalGarden'
    }
  })
}

// app/api/firetest/route.js
const db = admin.database()

export { db }
