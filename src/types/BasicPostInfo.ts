import type { PostCategory } from "./PostCategory";

export type BasicPostInfo = {
  title: string;
  link: string | null;
  imgUrl: string | null;
  text: string;
  category: PostCategory;
};
