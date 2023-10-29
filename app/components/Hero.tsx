import Link from "next/link";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 flex flex-col py-10 pb-32 gap-20 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map"></div>

      {/* left */}
      {/* ld-1 */}
      <div className=" relative z-20">
        <h1 className="bold-40 lg:bold-64">Wellbeing Clinic</h1>
        <p className="regular-16 mt-6 text-gray-50">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>

        {/* ld-2 */}
        <div className=" mt-10 flex flex-col w-full gap-3 sm:flex-row">
          
          <Link href="https://play.google.com/store/apps/details?id=com.sofolit.wellbeingclinic" >
            <Button
              type={"button"}
              label={"Download App"}
              variant={"btn_green"}
            />
          </Link>
          <Button
            type={"button"}
            label={"How we work"}
            icon="/play.svg"
            variant={"btn_white_text"}
          />
        </div>
      </div>

      {/* right */}
      <div className=" xl:w-1/2"></div>
    </section>
  );
};

export default Hero;
