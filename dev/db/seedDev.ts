import db from "../../src/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocsFromServer,
} from "firebase/firestore";

import type { Collection } from "../../src/types/db/Collection";
import type { Entry } from "../../src/types/entries";

async function dropCollection(collectionName: Collection): Promise<boolean> {
  try {
    const collectionRef = collection(db, collectionName);
    const snapshot = await getDocsFromServer(collectionRef);
    snapshot.docs.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });
    console.log("All docs deleted from collection: ", collectionName);

    return true;
  } catch (error) {
    console.error(
      "Error deleting docs from collection:",
      collectionName,
      " ",
      error
    );
    throw error;
  }

  return true;
}

async function seedCollection(
  collectionName: Collection,
  seedData: Entry[]
): Promise<boolean> {
  try {
    const collectionRef = collection(db, collectionName);
    seedData.forEach(async (doc) => {
      await addDoc(collectionRef, doc);
    });
    console.log("Added docs to collection: ", collectionName);
    return true;
  } catch (error) {
    console.error("Error seeding collection: ", collectionName, " ", error);
    throw error;
  }
}
