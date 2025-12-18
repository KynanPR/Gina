import ScrollLink from "./ScrollLink";
import type { PostCategory } from "../types/PostCategory";
import getCategoryColour from "../utils/getCategoryColour";

function PostCard({
  title,
  link,
  text,
  category,
}: {
  title: string;
  link: string;
  text: string;
  category: PostCategory;
}) {
  const colourClass = getCategoryColour(category);
  //
  // console.log(colourClass);

  return (
    <>
      <div className="card card-border border- lg:card-side bg-base-200 shadow-sm m-5">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title self-center">
            {title}
            <div className={`badge bg-[var(${colourClass})]`}>{category}</div>
          </h2>
          <p>{text}</p>
          <div className="card-actions justify-end mt-2">
            <ScrollLink to={link}>
              <button className="btn btn-primary">Read More</button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostCard;
