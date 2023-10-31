import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div
      className=" mt-20 md:mt-24 py-8 md:py-16 border-t flex-none lg:flex lg:justify-between items-center
       "
    >
      {/* logo */}
      <div className="">
        <Link href={"/"}>
          <Image src={"/logo.svg"} alt="logo" height={24} width={180}></Image>
        </Link>
       {/* socila media */}
      <div className="flex gap-2 mt-1">
        {/* facebook */}
        <div className="p-2 hover:rounded-full hover:bg-slate-100">
          <a target="_blank" href={"https://facebook.com/wellbeingclinicbd"}>
            <Image src="/facebook.svg" alt="" height={24} width={24}></Image>
          </a>
        </div>

        {/* instagram */}
        <div className="p-2 hover:rounded-full hover:bg-slate-100">
          <a target="_blank" href={"https://instagram.com/wellbeingclinicbd"}>
            <Image src="/instagram.svg" alt="" height={24} width={24}></Image>
          </a>
        </div>

        {/* youtube.svg */}
        <div className="p-2 hover:rounded-full hover:bg-slate-100">
          <a target="_blank" href={"https://youtube.com/@wellbeingclinicbd"}>
            <Image src="/youtube.svg" alt="" height={24} width={24}></Image>
          </a>
        </div>
      </div>
      </div>

      {/* explore */}
      <div className="mt-6 lg:mt-1">
        <h2 className="font-semibold text-slate-900 dark:text-slate-100">
          Explore
        </h2>
        <ul className="flex gap-4 mt-1">
          <li>
            <a
              className=" text-slate-500 hover:text-black dark:hover:text-slate-300"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className= "text-slate-500 hover:text-black dark:hover:text-slate-300"
              href="/services"
            >
              Services
            </a>
          </li>
          <li>
            <a
className= "text-slate-500 hover:text-black dark:hover:text-slate-300"              href="/blog"
            >
              Blog
            </a>
          </li>
          <li>
            <a
className= "text-slate-500 hover:text-black dark:hover:text-slate-300"              href="/contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* utility */}
      <div className="mt-6 lg:mt-1">
        <h2 className="font-semibold text-slate-900 dark:text-slate-100">
          Utility
        </h2>
        <ul className="flex gap-4 mt-1">
          <li>
            <a
className= "text-slate-500 hover:text-black dark:hover:text-slate-300"              href="#"
            >
              Privacy policy
            </a>
          </li>
          <li>
            <a
className= "text-slate-500 hover:text-black dark:hover:text-slate-300"              href="#"
            >
              Tearms & Conditions
            </a>
          </li>
        </ul>
      </div>

      
    </div>
  );
};

export default Footer;
