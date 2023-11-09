
import Camp from "./components/Camp";
import Hero from "./components/Hero";
import { metadata } from '../layout';

export default function Home() {
  return (
   <>
     <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
     <main>
     
     
   {/* hero */}
   <Hero />
   {/* camp */}
   <Camp />
   {/* guide*/}
   {/* feature*/}
   {/* get app*/}
   </main>
   </>
  )
}
