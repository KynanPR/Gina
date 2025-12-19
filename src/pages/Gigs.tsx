import PostCard from "../components/PostCard";
import type { BasicPostInfo } from "../types/BasicPostInfo";

const testPosts: BasicPostInfo[] = [
  {
    title: "Test Gig 1",
    category: "Gig",
    link: "/Gigs",
    imgUrl: null,
    text: "Hey look a gig!",
  },
  {
    title: "Test Gig 2",
    category: "Gig",
    imgUrl: null,
    link: null,
    text: "Hey look another gig!",
  },
];

function Gigs() {
  return (
    <>
      <div>Gigs</div>
      <ul className="list bg-base-100 rounded-box shadow-md w-95/100 m-auto">
        {testPosts.map((postInfo) => {
          return (
            <li className="list-row">
              <div className=""></div>
              <PostCard postInfo={postInfo} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Gigs;
