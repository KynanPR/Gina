import ScrollLink from "./ScrollLink";
import getCategoryColour from "../utils/getCategoryColour";
import type { BasicPostInfo } from "../types/BasicPostInfo";

function PostCard({ postInfo }: { postInfo: BasicPostInfo }) {
  const colourClass = getCategoryColour(postInfo.category);

  return (
    <>
      <div className="card card-border lg:card-side bg-base-200 shadow-sm m-5">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title self-center">
            {postInfo.title}
            <div className={`badge bg-[var(${colourClass})]`}>
              {postInfo.category}
            </div>
          </h2>
          <p>{postInfo.text}</p>
          {postInfo.link ? (
            <div className="card-actions justify-end mt-2">
              <ScrollLink to={postInfo.link}>
                <button className="btn btn-primary">Read More</button>
              </ScrollLink>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default PostCard;
