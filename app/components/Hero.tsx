
import Button from "./Button";

const Hero = () => {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 flex flex-col py-10 pb-32 gap-20 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map h-1/3"></div>

      {/* left */}
      {/* ld-1 */}
      <div className=" relative z-20">
        <h3 className="bold-20 uppercase">Welcome to</h3>
        <h1 className="bold-52 lg:bold-64">Wellbeing Clinic</h1>
        <p className="regular-16 mt-10 text-gray-50">
          Your Haven for Mental Health Care. Our dedicated team offers expert
          counseling, comprehensive assessments, and tailored psychological
          support to foster your well-being. Explore our range of services
          designed to provide personalized care, guidance, and holistic
          solutions for your mental health needs.
        </p>

        {/* ld-2 */}
        <div className=" mt-10 flex gap-4">
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.sofolit.wellbeingclinic"
          >
            <Button
              type={"button"}
              label={"Download App"}
              variant={"btn_green"}
            />
          </a>
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
