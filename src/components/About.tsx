import Image from "next/image";

export default function About() {
    return (
        <div id="about" className="flex flex-col justify-center items-center w-full h-full">
            <div className='max-w-[1000px] w-full sm:text-center pb-8 pl-4'>
                <h2 className='text-4xl font-bold inline border-b-4 border-blue-600'>About Me</h2>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <p>
                    As a developer, I have always been passionate about creating elegant and effective solutions to
                    complex problems. I have a strong foundation in software development, with a focus on web
                    technologies such as HTML, CSS, and JavaScript. I enjoy working on both the front-end and
                    back-end of applications, and I am always looking for ways to optimize performance, improve user
                    experience, and ensure the highest level of code quality.
                </p>
                <p>Throughout my career, I have worked on a wide range of projects, from simple static websites to
                    complex enterprise-level applications. I am experienced in working with a variety of development
                    tools and frameworks, including React, Node.js, Laravel and Python. I am always eager
                    to learn and explore new technologies, and I am constantly seeking out opportunities to improve
                    my skills and knowledge.</p>
            </div>
        </div>
    )
}