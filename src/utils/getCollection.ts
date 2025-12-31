import { collection, CollectionReference } from "firebase/firestore";
import type { EntryCategory } from "../types/entries/EntryCategory";
import db from "../firebase";

/**
 * Takes in an EntryCategory and creates corresponding firestore collectionRef.
 * @param entryCategory String of EntryCategory type
 * @throws If entryCategory doesn't exist
 * @returns firestore CollectionReference
 */
function getCollectionRef(entryCategory: EntryCategory): CollectionReference {
  let collectionName;
  switch (entryCategory) {
    case "Music":
      collectionName = "Music";
      break;
    case "Instrument":
      collectionName = "Instruments";
      break;
    case "Gig":
      collectionName = "Gigs";
      break;
    default:
      throw new Error("Cannot find matching category for entryCategory ", entryCategory);
  }
  return collection(db, collectionName);
}

export default getCollectionRef;
