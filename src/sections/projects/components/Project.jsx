import { useTranslation } from "react-i18next"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom";

const Project = ({ proj, index }) => {

    const [t, i18n] = useTranslation("global");

    const reverse = index % 2 === 0
    return (
        <div className={`mb-12 flex text-center text-balance sm:text-start items-center flex-col sm:flex-row gap-5 p-12 ${reverse ? 'sm:flex-row-reverse' : ''}`}>
            <motion.div className="shadow-2xl rounded-2xl relative right-0 group"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <img className="rounded-2xl" src={proj.preview} alt={proj.name} loading="lazy" />
            </motion.div>


            <motion.div
                className={`flex w-fit flex-col gap-3 relative top-0 ${reverse ? '' : 'sm:items-end sm:text-end'}`}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}>
                <p className="text-3xl font-bold">{proj.name}</p>

                <p className="">{proj.desc}</p>
                <div className="flex flex-wrap gap-3 items-center">{t("projects.made")}:
                    {
                        proj.techs.map((tech, index) =>
                            <span key={index} className={`btn btn-sm text-gray-800 font-bold ${tech.color} rounded-2xl`}>
                                {tech.name}
                            </span>
                        )
                    }
                </div>


                <div className="flex items-center gap-4 mt-5 sm:justify-normal justify-around">
                    <div>
                        <a
                            href={proj.client ? proj.clientWebsite : proj.website}
                            target="_blank"
                            rel="nonreferrer"
                            className="btn btn-sm btn-outline bg-white text-black rounded-2xl">
                            <FaExternalLinkAlt /> {proj.client ? 'Client ' + proj.client : 'Demo'}
                        </a>
                        <a
                            href={proj.client ? proj.website : proj.github}
                            target="_blank"
                            rel="nonreferrer"
                            className="ms-2 mt-2 btn btn-sm btn-neutral  btn-outline rounded-2xl">
                            <FaExternalLinkAlt /> {proj.client ? 'The Website' : 'Github Repository'}
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Project;