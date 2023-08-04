import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";

export default function Hero() {
    const handleScroll = () => {
        document.getElementById("projects")?.scrollIntoView({
            behavior: "smooth",
        });
    }

    return (
        <div id="home" className="max-w-5xl mx-auto px-8 flex flex-col justify-center items-center h-full">
            <Image src='/images/profile.jpg' className="rounded-full" width={300} height={300} alt="Pedro's personal headshot" />
            <h1 className="font-bold text-3xl text-gray-50">
                Hello, I'm Pedro Henrique 👋
            </h1>
            <p className="max-w-2xl py-4">
                I'm a full-stack developer based in Campo Grande, Brazil. My specialty is building (and occasionally
                designing) exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications.
            </p>
            <div>
                <button onClick={handleScroll} className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600'>
                    View Work
                    <span className='group-hover:rotate-90 duration-300'>
                        <ArrowRight size={24} className='ml-3' />
                    </span>
                </button>
            </div>
        </div>
    )
}