import db from "../../src/firebase.ts";
import { getApp, deleteApp } from "firebase/app";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocsFromServer,
  setDoc,
} from "firebase/firestore";

import type { Collection } from "../../src/types/db/Collection";
import type { Entry } from "../../src/types/entries";
import musicSeedData from "./musicSeedData.ts";
import gigSeedData from "./gigSeedData.ts";
import instrumentSeedData from "./instrumentSeedData.ts";

async function dropCollection(collectionName: Collection): Promise<boolean> {
  try {
    const collectionRef = collection(db, collectionName);
    const snapshot = await getDocsFromServer(collectionRef);
    const promises = Promise.all(
      snapshot.docs.map((doc) => {
        return deleteDoc(doc.ref);
      })
    );
    await promises;
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
}

async function seedCollection<Type extends Entry>(
  collectionName: Collection,
  seedData: Type[]
): Promise<boolean> {
  try {
    const collectionRef = collection(db, collectionName);
    const promises = Promise.all(
      seedData.map((entry) => {
        const docRef = doc(collectionRef, entry.id);
        return setDoc(docRef, entry); // Need to use setDoc rather than addDoc to use specific ids
      })
    );
    await promises;
    console.log("Added docs to collection: ", collectionName);
    return true;
  } catch (error) {
    console.error("Error seeding collection: ", collectionName, " ", error);
    throw error;
  }
}

// Seed Music
const musicDropResult = await dropCollection("Music");
const musicSeedResult = await seedCollection("Music", musicSeedData);

// Seed Instruments
const instrumentDropResult = await dropCollection("Instruments");
const instrumentSeedResult = await seedCollection("Instruments", instrumentSeedData);

// Seed Gigs
const gigDropResult = await dropCollection("Gigs");
const gigSeedResult = await seedCollection("Gigs", gigSeedData);


console.log("Finished Seeding");

// Delete Firebase app so Node can exit without waiting
try {
  await deleteApp(getApp());
  console.log("Firebase app deleted, exiting.");
} catch (err) {
  console.error("Error deleting Firebase app:", err);
}
