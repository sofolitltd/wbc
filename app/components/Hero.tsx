import Image from "next/image";

const Hero = () => {
  return (
    <section className="">
      <div className="max-w-5xl mx-auto pt-20 sm:pt-24 md:pt-32">
        {/* title */}
        <h1 className=" text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl text-center tracking-tight dark:text-white">
          Wellbeing Clinic: Leading mental health service provider
        </h1>

        {/* subtitle*/}
        <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
          Explore our range of services designed to provide personalized care,
          guidance, and holistic solutions for your mental health needs.
        </p>

        {/* btn */}
        <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
          <a
            className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
            href="https://play.google.com/store/apps/details?id=com.sofolit.wellbeingclinic"
          >
            Download Our Android App
          </a>
        </div>
      </div>

    </section>
    
  );
};

export default Hero;
