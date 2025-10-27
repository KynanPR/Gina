import ScrollLink from "./ScrollLink";

function AboutSummaryCard({
  title,
  link,
  text,
}: {
  title: string;
  link: string;
  text: string;
}) {
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
          <h2 className="card-title self-center">{title}</h2>
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

export default AboutSummaryCard;
