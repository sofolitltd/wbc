import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "../constants";
import Button from "./Button";

const Navbar = () => (
  <div className="">
    <div className=" relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-700">
      <Image
        className="ite"
        src={"/logo.svg"}
        alt="logo"
        height={0}
        width={190}
      ></Image>

      <div className="flex items-center">
        {/*  */}
        <div className="-my-1 ml-2 -mr-1 md:hidden">
          <button
            type="button"
            className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
          >
            <Image src={"/menu.svg"} alt="menu" height={24} width={24}></Image>
          </button>
          <div className="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"></div>
        </div>

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
  </div>
);

export default Navbar;
