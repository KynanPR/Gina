import PostCard from "../components/PostCard";
import type { BasicPostInfo } from "../types/BasicPostInfo";

const testPosts: BasicPostInfo[] = [
  {
    title: "Music Post Example",
    link: "/AboutGina",
    category: "Music",
    imgUrl: null,
    text: "This is some about text that is quite short atm. But no longer is it short, now it will be very very long.But no longer is it short, now it will be very very long. But no longer is it short, now it will be very very long. But no longer is it short, now it will be very verylong. But no longer is it short, now it will be very very long.",
  },
  {
    title: "Instrument Post Example",
    link: "/Contact",
    category: "Instrument",
    imgUrl: null,
    text: "This is some about text that is quite short atm. But no longer is it short, now it will be very very long.But no longer is it short, now it will be very very long. But no longer is it short, now it will be very very long. But no longer is it short, now it will be very verylong. But no longer is it short, now it will be very very long.",
  },
  {
    title: "Gig Post Example",
    link: "/Contact",
    category: "Gig",
    imgUrl: null,
    text: "This is some about text that is quite short atm. But no longer is it short, now it will be very very long.But no longer is it short, now it will be very very long. But no longer is it short, now it will be very very long. But no longer is it short, now it will be very verylong. But no longer is it short, now it will be very very long.",
  },
];

function Home() {
  return (
    <>
      <div>Home/Latest</div>
      <ul className="list bg-base-100 rounded-box shadow-md w-95/100 m-auto">
        {/* <li className="p-4 pb-2 text-xs opacity-60 tracking-wide"></li> */}
        {testPosts.map((postInfo) => {
          return (
            <li className="list-row">
              <div className=""></div>
              <PostCard postInfo={postInfo} />
            </li>
          );
        })}
        {/* <li className="list-row">
          <PostCard
            title="Music Post Example"
            link="/AboutGina"
            category="Music"
            text="This is some about text that is quite short atm. But no longer is it
            short, now it will be very very long.But no longer is it short, now
            it will be very very long. But no longer is it short, now it will be
            very very long.But no longer is it short, now it will be very very
            long. But no longer is it short, now it will be very very long."
          />
        </li>
        <li className="list-row">
          <PostCard
            title="Instrument Post Example"
            link="/Contact"
            category="Instrument"
            text="
            This is some about text that is quite short atm. But no longer is it
            short, now it will be very very long.But no longer is it short, now
            it will be very very long. But no longer is it short, now it will be
            very very long.But no longer is it short, now it will be very very
            long. But no longer is it short, now it will be very very long."
          />
        </li>
        <li className="list-row">
          <PostCard
            title="Gig Post Example"
            link="/Contact"
            category="Gig"
            text="
            This is some about text that is quite short atm. But no longer is it
            short, now it will be very very long.But no longer is it short, now
            it will be very very long. But no longer is it short, now it will be
            very very long.But no longer is it short, now it will be very very
            long. But no longer is it short, now it will be very very long."
          />
        </li> */}
      </ul>
    </>
  );
}

export default Home;
