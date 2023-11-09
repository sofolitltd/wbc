import Link from "next/link";
import Image from "next/image";

const Navbar = () => (
  <div className="">
    <div className="px-4 sm:px-6 md:px-24 relative pt-6 lg:pt-8 flex items-center justify-center md:justify-between  text-slate-700 font-semibold text-sm leading-6 dark:text-slate-700">
      <Image
        className=""
        src={"/logo.svg"}
        alt="logo"
        height={0}
        width={190}
        
      ></Image>

      <div className="flex items-center">
       
        {/*  */}
        <div className="hidden md:flex items-center gap-10">
          {/* nav l */}
          <nav>
            <ul className="flex items-center gap-x-8">
              <li>
                <Link
                  className="hover:text-green-500 dark:hover:text-green-400"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-green-500 dark:hover:text-green-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-green-500 dark:hover:text-green-400"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-green-500 dark:hover:text-green-400"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    {/* mobile nav */}
    <div className="md:hidden w-full p-4">
      {/* nav l */}
      <nav>
        <ul className=" flex justify-center items-center gap-x-8">
          <li>
            <Link
              className="hover:text-green-500 dark:hover:text-green-400"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="hover:text-green-500 dark:hover:text-green-400"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-green-500 dark:hover:text-green-400"
              href="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-green-500 dark:hover:text-green-400"
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Navbar;
