import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="px-4 md:px-24 py-8 md:pt-12 md:pb-16 border-t flex-none lg:flex lg:justify-between">
      {/* logo */}
      <div className="">
        <Link href={"/"}>
          <Image src={"/logo.svg"} alt="logo" height={24} width={180}></Image>
        </Link>

        <p className=" mt-2 font-light text-slate-500"> Leading mental health service provide</p>
        {/* socila media */}
        <div className="flex gap-x-4 mt-8">
          {/* facebook */}
          <div className="p-2 bg-slate-100 rounded-full hover:bg-slate-300">
            <Link
              target="_blank"
              href={"https://facebook.com/wellbeingclinicbd"}
            >
              <Image src="/facebook.svg" alt="" height={24} width={24}></Image>
            </Link>
          </div>

          {/* instagram */}
          <div className="p-2 bg-slate-100 rounded-full hover:bg-slate-300">
            <Link
              target="_blank"
              href={"https://instagram.com/wellbeingclinicbd"}
            >
              <Image src="/instagram.svg" alt="" height={24} width={24}></Image>
            </Link>
          </div>

          {/* youtube.svg */}
          <div className="p-2 bg-slate-100 rounded-full hover:bg-slate-300">
            <Link
              target="_blank"
              href={"https://youtube.com/@wellbeingclinicbd"}
            >
              <Image src="/youtube.svg" alt="" height={24} width={24}></Image>
            </Link>
          </div>
        </div>
      </div>

      {/* explore */}
      <div className="mt-6 lg:mt-3">
        <h2 className="font-semibold text-slate-900 dark:text-slate-100">
          Explore
        </h2>
        <ul className=" mt-2 space-y-1">
          <li>
            <Link
              className=" text-slate-500 hover:text-black dark:hover:text-slate-300"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-slate-500 hover:text-black dark:hover:text-slate-300"
              href="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="text-slate-500 hover:text-black dark:hover:text-slate-300"
              href="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="text-slate-500 hover:text-black dark:hover:text-slate-300"
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* utility */}
      <div className="mt-6 lg:mt-3">
        <h2 className="font-semibold text-slate-900 dark:text-slate-100">
          Utility
        </h2>
        <ul className=" mt-2 space-y-1">
          <li>
            <Link
              className="text-slate-500 hover:text-black dark:hover:text-slate-300"
              href="#"
            >
              Privacy policy
            </Link>
          </li>
          <li>
            <Link
              className="text-slate-500 hover:text-black dark:hover:text-slate-300"
              href="#"
            >
              Tearms & Conditions
            </Link>
          </li>
        </ul>
      </div>

      
    </div>
  );
};

export default Footer;
