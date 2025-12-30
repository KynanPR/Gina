import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import type { BasicPostInfo } from "../types/BasicPostInfo";
import { getAllPosts } from "../services/entryService";

function Gigs() {
  const [posts, setPosts] = useState<BasicPostInfo[]>();

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const allPosts: BasicPostInfo[] = await getAllPosts();
    // console.log("All Posts", allPosts);

    setPosts(allPosts);
  };

  return (
    <>
      <div>Gigs</div>
      <ul className="list bg-base-100 rounded-box shadow-md w-95/100 m-auto">
        {posts ? posts.map((post) => PostLi(post)) : <></>}
      </ul>
    </>
  );
}

const PostLi = (post: BasicPostInfo) => {
  return (
    <li className="list-row" key={post.postId}>
      <div className=""></div>
      <PostCard postInfo={post} />
    </li>
  );
};

export default Gigs;
