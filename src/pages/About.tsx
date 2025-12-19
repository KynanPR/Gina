import AboutSummaryCard from "../components/AboutSummaryCard";

function About() {
  return (
    <>
      <div>About</div>
      <ul className="list bg-base-100 rounded-box shadow-md w-95/100 m-auto">
        {/* <li className="p-4 pb-2 text-xs opacity-60 tracking-wide"></li> */}

        <li className="list-row">
          <div className=""></div>
          <AboutSummaryCard
            title="About Gina"
            link="/AboutGina"
            text="This is some about text that is quite short atm. But no longer is it
            short, now it will be very very long.But no longer is it short, now
            it will be very very long. But no longer is it short, now it will be
            very very long.But no longer is it short, now it will be very very
            long. But no longer is it short, now it will be very very long."
          />
        </li>
        <li className="list-row">
          <div className=""></div>
          <AboutSummaryCard
            title="About Music"
            link="/Contact"
            text="
            This is some about text that is quite short atm. But no longer is it
            short, now it will be very very long.But no longer is it short, now
            it will be very very long. But no longer is it short, now it will be
            very very long.But no longer is it short, now it will be very very
            long. But no longer is it short, now it will be very very long."
          />
        </li>
      </ul>
    </>
  );
}

export default About;
