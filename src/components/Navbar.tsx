import { useState } from "react";

import { EnvelopeSimple, GithubLogo, LinkedinLogo, List, ReadCvLogo, X } from "@phosphor-icons/react";

import Link from "next/link";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const toggleNavbar = () => setNavbarOpen(!navbarOpen)

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // first prevent the default behavior
        e.preventDefault();
        // get the href and remove everything before the hash (#)
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        // get the element by id and use scrollIntoView
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <div className="fixed w-full h-20 flex justify-between items-center px-4">
            <div className="w-52">
                <Link href="/">
                    My Portfolio
                </Link>
            </div>

            {/* menu */}
            <ul className="hidden md:flex gap-3">
                <li>
                    <Link onClick={handleScroll} href="#home">Home</Link>
                </li>
                <li>
                    <Link onClick={handleScroll} href="#about">About</Link>
                </li>
                <li>
                    <Link onClick={handleScroll} href="#skills">Skills</Link>
                </li>
                <li>
                    <Link onClick={handleScroll} href="#projects">Projects</Link>
                </li>
                <li>
                    <Link onClick={handleScroll} href="#contact">Contact</Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={toggleNavbar} className="md:hidden z-10">
                {navbarOpen ? <X size={30}/> : <List size={30}/>}
            </div>

            {/* Mobile menu */}
            <ul className={!navbarOpen ? "hidden" : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center"}>
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">About</li>
                <li className="py-6 text-4xl">Skills</li>
                <li className="py-6 text-4xl">Works</li>
                <li className="py-6 text-4xl">Contact</li>
            </ul>

            {/* Social icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-40 h-16 flex justify-between items-center -ml-24 hover:-ml-3 px-3 bg-blue-600 duration-300">
                        <a
                            className="flex justify-between items-center w-full"
                            href="https://www.linkedin.com/in/ptersnow/"
                            aria-label="Linkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn<LinkedinLogo size={40}/>
                        </a>
                    </li>
                    <li className="w-40 h-16 flex justify-between items-center -ml-24 hover:-ml-3 px-3 bg-slate-700 duration-300">
                        <a
                            className="flex justify-between items-center w-full"
                            href="https://github.com/ptersnow/"
                            aria-label="Github"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github <GithubLogo size={40}/>
                        </a>
                    </li>
                    <li className="w-40 h-16 flex justify-between items-center -ml-24 hover:-ml-3 px-3 bg-emerald-600 duration-300">
                        <a
                            className="flex justify-between items-center w-full"
                            href="mailto:ptersnow@gmail.com"
                            aria-label="E-mail"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            E-mail <EnvelopeSimple size={40}/>
                        </a>
                    </li>
                    <li className="w-40 h-16 flex justify-between items-center -ml-24 hover:-ml-3 px-3 bg-stone-600 duration-300">
                        <a
                            className="flex justify-between items-center w-full"
                            href="https://docs.google.com/document/d/1NcYkRphv94R40qoPTwlXRr5YAm0ywnLQ2YJFFyUu65k/edit?usp=sharing"
                            aria-label="Resume"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume <ReadCvLogo size={40}/>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}