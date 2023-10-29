import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "../constants";
import Button from "./Button";

const Navbar = () => (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        {/* logo */}
        <Link href="/">
            <Image 
            src="/logo.svg" 
            alt="logo" 
            width={200} 
            height={36} />
        </Link>

        {/* menu */}
        <ul className="hidden h-full gap-6 lg:flex">
            {NAV_LINKS.map((link) => (
                <Link
                    href={link.href}
                    key={link.key}
                    className="regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold"
                >
                    {link.label}
                </Link>
            ))}
        </ul>

        {/* button */}
        <div className="lg:flexCenter hidden">
            <Button 
            type={"button"} 
            label={"Login"} 
            icon="/user.svg" 
            variant={"btn_dark_green"} />
        </div>

        {/* hamberger */}
        <Image 
            src="/menu.svg" 
            alt="menu" 
            width={32} 
            height={32} 
            className="inline-block cursor-pointer lg:hidden"
            />
    </nav>
);

export default Navbar;
