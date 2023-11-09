import { db } from './firebaseConfig'
export async function getProducts () {
  const dbRef = db.ref('/products')
  const dataSnapshot = await dbRef.once('value')
  return dataSnapshot.val()
}
