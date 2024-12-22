import {NAVLINKS} from "@/app/config/config";
import Link from "next/link";
import Image from "next/image";
import MobileNavbar from "@/app/_components/nav/MobileNavbar";

export default function Navbar() {
    return <>
        <nav className="z-20 fixed w-full bg-text bg-opacity-70 text-white h-24 flex items-center">
            <div className="w-[95%] max-w-[80rem] grid grid-cols-[auto_1fr] items-center mx-auto">
                <div className="relative w-[5rem] aspect-square">
                    <Image src="/logo.svg" alt="Мебели ВаМ" fill/>
                </div>
                <ul className="hidden md:flex items-center gap-4 justify-self-center">
                    {NAVLINKS.map((link, index) => {
                        return <li key={index}><Link scroll href={link.href}
                                                     className="hover:text-accent transition-all duration-200">{link.label}</Link>
                        </li>
                    })}
                </ul>
                <MobileNavbar />
            </div>
        </nav>
    </>
}