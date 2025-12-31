import db from "../firebase";
import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  collectionGroup,
} from "firebase/firestore";
import type { EntryCategory } from "../types/entries/EntryCategory";
import type { Entry, Gig, Instrument, Music } from "../types/entries";
import getCollectionRef from "../utils/getCollection";

// Type Guard Functions
function isTypeEntry(possiblyEntry: any, entryTypeToCheck: EntryCategory): possiblyEntry is (Music|Instrument|Gig) {
  // Not airtight, but as good as I can come up with right now
  // TODO - Find/make a more solid set of checks to ensure it matches the type
  return possiblyEntry && possiblyEntry.category == entryTypeToCheck;
}

// Create a new post
export async function addEntry (
  entry: Omit<Entry, "id">
): Promise<string> {
  try {
    const collectionRef = getCollectionRef(entry.category)
    const docRef = await addDoc(collectionRef, entry);
    return docRef.id;
  } catch (error) {
    console.error("Error adding entry:", error);
    throw error;
  }
};

// Read a single post
export async function getEntry<Type extends Entry> (
  entryId: string,
  entryCategory: EntryCategory
): Promise<Type | null> {
  try {
    const collectionRef = getCollectionRef(entryCategory);
    const entryDoc = await getDoc(doc(collectionRef, entryId));
    if (entryDoc.exists()) {
      const foundEntry = { id: entryDoc.id, ...entryDoc.data() };

      if (isTypeEntry(foundEntry, entryCategory)) {
        // Have to type assert as firebase doesn't give tools for proper typesafety
        return foundEntry as Type;
      }
      return null;
    }
  } catch (error) {
    console.error("Error getting post:", error);
    throw error;
  }
};

// Get all P
export const getAllPosts = async (): Promise<BasicPostInfo[]> => {
  try {
    const snapshot = await getDocs(collection(db, "Posts"));
    const posts = snapshot.docs.map(
      (postDoc) => ({ postId: postDoc.id, ...postDoc.data() } as BasicPostInfo)
    );

    return posts;
  } catch (error) {
    console.error("Error getting all posts", error);
    throw error;
  }
};

// Read all posts of a category
export const getCategoryPosts = async (
  postCategory: PostCategory
): Promise<BasicPostInfo[]> => {
  try {
    const q = query(
      collection(db, "Posts"),
      where("Category", "==", postCategory)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(
      (doc) => ({ postId: doc.id, ...doc.data() } as BasicPostInfo)
    );
  } catch (error) {
    console.error("Error getting user posts:", error);
    throw error;
  }
};

// Update a post
export const updatePost = async (
  postId: string,
  updates: Partial<BasicPostInfo>
): Promise<void> => {
  try {
    await updateDoc(doc(db, "Posts", postId), updates);
  } catch (error) {
    console.error("Error updating post:", error);
    throw error;
  }
};

// Delete a post
export const deletePost = async (postId: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, "posts", postId));
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
};
