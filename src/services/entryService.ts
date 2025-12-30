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
} from "firebase/firestore";
import type { BasicPostInfo } from "../types/BasicPostInfo";
import type { EntryCategory } from "../types/entries/EntryCategory";

// Create a new post
export const addPost = async (
  post: Omit<BasicPostInfo, "id">
): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, "posts"), post);
    return docRef.id;
  } catch (error) {
    console.error("Error adding post:", error);
    throw error;
  }
};

// Read a single post
export const getPost = async (
  postId: string
): Promise<BasicPostInfo | null> => {
  try {
    const postDoc = await getDoc(doc(db, "Posts", postId));
    if (postDoc.exists()) {
      return { postId: postDoc.id, ...postDoc.data() } as BasicPostInfo;
    } else {
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
