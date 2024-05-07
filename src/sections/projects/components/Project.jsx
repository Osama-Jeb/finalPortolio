import { useTranslation } from "react-i18next"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

const Project = (props) => {

    const [t, i18n] = useTranslation("global");

    const proj = props.proj
    const reverse = props.index % 2 === 0
    return (
        <div className={`mb-12 flex text-center text-balance sm:text-start items-center flex-col sm:flex-row gap-5 p-12 ${reverse ? 'sm:flex-row-reverse' : ''}`}>
            <div className="shadow-2xl rounded-2xl">
                <img className="rounded-2xl" src={proj.preview} alt="" />
            </div>
            <div className={`flex flex-col gap-3 ${reverse ? '' : 'sm:items-end sm:text-end'}`}>
                <p className="text-3xl font-bold">{proj.name}</p>

                <p>{proj.desc}</p>
                <p className="flex flex-wrap gap-3 items-center">{t("projects.made")}:
                    {
                        proj.techs.map((tech, index) =>
                            <>
                                <span className={`btn btn-sm text-gray-800 font-bold ${tech.color} rounded-2xl`}>
                                    {tech.name}
                                </span>
                            </>
                        )
                    }
                </p>
                <div className="flex items-center gap-4 mt-5 sm:justify-normal justify-around">

                    {
                        proj.name.includes('LionsGeek') ? (
                            <div>
                                <p className="mb-2">{t("projects.lionsNote")}</p>
                                <a
                                    href={"https://lionsgeek.ma/"}
                                    target="_blank"
                                    rel="nonreferrer"
                                    className="btn btn-sm bg-yellow-400 text-black btn-outline rounded-2xl">
                                    <FaExternalLinkAlt /> Association
                                </a>
                                <a
                                    href={proj.website}
                                    target="_blank"
                                    rel="nonreferrer"
                                    className="ms-2 mt-2 btn btn-neutral btn-outline rounded-2xl">
                                    <FaExternalLinkAlt /> LionsGeek Manager
                                </a>
                            </div>
                        ) : (
                            <>
                                <a 
                                href={proj.website} 
                                target="_blank" 
                                rel="nonreferrer" 
                                className="btn btn-neutral btn-outline rounded-2xl">
                                    <FaExternalLinkAlt /> Demo
                                </a>
                                <a 
                                href={proj.github} 
                                target="_blank" 
                                rel="nonreferrer" 
                                className="btn btn-neutral btn-outline rounded-2xl">
                                    <FaGithub /> Github
                                </a>
                            </>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Project;