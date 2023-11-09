import { db } from "@/lib/firebase/firebaseConfig";

async function GET(req, { params }) {
  const dbRef = db.ref("/products");
  const dataSnapshot = await dbRef.once("value");
  const rtdData = dataSnapshot.val();
  return Response.json(rtdData);
}

export { GET };