import admin from 'firebase-admin'
import { initializeApp, getApps } from 'firebase-admin/app'
import serviceAccount from '@/config/serviceAccountKey.json' assert { type: 'json' }

// Connection Script
if (!getApps().length) {
  initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://the-plant-emporium-default-rtdb.firebaseio.com/',
    databaseAuthVariableOverride: {
      uid: 'botanicalGarden'
    }
  })
}

// app/api/firetest/route.js
const db = admin.database()

export { db }
