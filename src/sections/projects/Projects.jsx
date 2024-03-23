import Project from "./components/Project";
import ygoPal from "../../assets/images/projects/ygoPalette/ygoPalette1.png"

const Projects = () => {
    return (
        <section id="projects" className="">
            <div>
                <div className="mb-12 flex items-center justify-center">
                    <p className="secTitle w-fit font-bold underline text-4xl">Projects</p>
                </div>
                <div className="w-[99vw] flex flex-col">
                    {
                        [1, 2, 3].map((proj, index) =>
                            <>
                                <Project img={ygoPal} index={index} />
                            </>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects;