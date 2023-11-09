import Head from "next/head";
import Services from "./components/Service";
import Hero from "./components/Hero";
import Blogs from "./components/Blogs";

export default function Home() {
  return (
    <>
    {/* <div>
      <Head>
        <title>"Wellbeing Clinic"</title>
        <meta
          name="description"
          content="Wellbeing Clinic is a mental health service provider offering a comprehensive range of services for optimal mental health. We provide personalized, compassionate care that addresses your unique needs and goals."
        />
      </Head>
      </div> */}
      <main className="px-4 sm:px-6 md:px-24">
        {/* hero */}
        <Hero />
        {/* Services */}
        <Services />
        {/* guide*/}
        <Blogs />
      </main>
    </>
  );
}
