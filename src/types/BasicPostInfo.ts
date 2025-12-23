import type { PostCategory } from "./EntryCategory";

export type BasicPostInfo = {
  postId?: string;
  title: string;
  link: string | null;
  imgUrl: string | null;
  text: string;
  category: PostCategory;
};
