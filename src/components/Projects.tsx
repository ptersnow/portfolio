import { projectData } from "@/pages/api/data"

export default function Projects() {
    return (
        <div id="projects" className="flex flex-col justify-center items-center w-full h-full">
            <div className='max-w-[1000px] w-full sm:text-center pb-8 pl-4'>
                <h2 className="text-4xl font-bold inline border-b-4 border-blue-600">Projects</h2>
            </div>

            {/* container for projects */}
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Grid Item */}
                {projectData && projectData.map((project, index) => (
                    <div
                        key={index}
                        style={{ backgroundImage: `url(${project.cover})` }}
                        className="bg-cover shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div h-52"
                    >
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font bold text-gray-700 tracking-wider ">
                                {project.title}
                            </span>
                            <div className="pt-8 text-center ">

                                <a href={project.gitHubLink} target="_blank">
                                    <button
                                        className="text-center rounded-lg px-4 py-3 m-2
                                                bg-white text-gray-700 font-bold text-lg"
                                    >
                                        Code
                                    </button>
                                </a>
                                
                                <a href={project.liveLink} target="_blank">
                                    <button
                                        className="text-center rounded-lg px-4 py-3 m-2
                                                bg-white text-gray-700 font-bold text-lg"
                                    >
                                        Live
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}