import type { PostCategory } from "../types/PostCategory";

function getCategoryColour(category: PostCategory) {
  /*
  Awful disgusting hack to make tailwind create the right classes. There must be a better way of doing this TODO
  bg-[var(--color-category-music)]
  bg-[var(--color-category-instrument)]
  bg-[var(--color-category-gig)]
  */
  return `--color-category-${category.toLowerCase()}`;
}

export default getCategoryColour;
