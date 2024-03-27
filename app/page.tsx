import Head from "next/head";
import Services from "./components/Service";
import Hero from "./components/Hero";
import Blogs from "./components/Blogs";

export default function Home() {
  return (
    <section  className="px-4 sm:px-6 md:px-24">
        {/* hero */}
        <Hero />
        {/* Services */}
        <Services />
        {/* guide*/}
        {/* <Blogs /> */}
    </section>
  );
}
