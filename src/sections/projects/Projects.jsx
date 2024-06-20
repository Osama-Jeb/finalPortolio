import Project from "./components/Project";
import ygoGif from "../../assets/images/projects/ygoPalette/ygoPalette.gif"
import lionsGif from "../../assets/images/projects/lionsgeek/lionsgeek.gif"
import restoGif from "../../assets/images/projects/lionresto/lionresto.gif"
import blogGif from "../../assets/images/projects/blog/blog.gif"

import { useTranslation } from "react-i18next";

const Projects = () => {

    const [t, i18n] = useTranslation("global");

    const projs = [
        {
            name: 'LionsGeek Management System',
            github: '',
            website: 'https://mylionsgeek.ma/',
            desc: t("projects.lionsDesc"),
            techs: [
                {
                    name: 'Livewire',
                    color: 'bg-[#ff2d20] text-white',
                },
                {
                    name: 'Breeze Auth',
                    color: 'bg-[#8a94a6] text-gray-500',
                },
                {
                    name: 'FullCalendar',
                    color: "bg-[#2b5ea4] text-white",
                },
                {
                    name: 'Tailwind',
                    color: 'bg-[#38bdf8]'
                },
            ],
            preview: lionsGif

        },
        {
            name: 'Blog & Chat',
            github: 'https://github.com/Osama-Jeb/Blog',
            website: 'https://myblogproject.vercel.app/',
            desc: t("projects.blog"),
            techs: [
                {
                    name: 'ReactJS',
                    color: 'bg-[#00d8ff]',
                },
                {
                    name: 'Tailwind',
                    color: 'bg-[#38bdf8]'
                },
                {
                    name: 'Firebase',
                    color: "bg-[#dd2c00] text-white",
                },
            ],
            preview: blogGif

        },
        {
            name: 'YGO-Palette Generator',
            github: 'https://github.com/Osama-Jeb/ygo-palette',
            website: 'https://ygo-palette-client.vercel.app/',
            desc: t("projects.paletteDesc"),
            techs: [
                {
                    name: 'ReactJS',
                    color: 'bg-[#00d8ff]',
                },
                {
                    name: 'Express',
                    color: "bg-[#f7e025]",
                },
                {
                    name: 'Tailwind',
                    color: 'bg-[#38bdf8]'
                },
                {
                    name: 'DaisyUI',
                    color: 'bg-[#1ad1a5]'
                },
            ],
            preview: ygoGif
        },
        {
            name: 'LionsResto',
            github: 'https://github.com/Osama-Jeb/oussama_jebrane_lionsresto_final',
            website: 'https://osama-jeb.github.io/oussama_jebrane_lionsresto_final/',
            desc: t("projects.restoDesc"),
            techs: [
                {
                    name: 'HTML',
                    color: 'bg-[#e44d26] text-white',
                },
                {
                    name: 'CSS',
                    color: 'bg-[#1172b8] text-white'
                },
                {
                    name: 'JavaScript',
                    color: "bg-[#f7e025]",
                },
                {
                    name: 'SCSS',
                    color: 'bg-[#cc6699] text-white'
                },
                {
                    name: 'Bootstrap',
                    color: 'bg-[#563d7c] text-white'
                },
            ],
            preview: restoGif
        },
    ]
    return (
        <section id="projects" className="mt-12">
            <div>
                <div className="mb-12 flex items-center justify-center">
                    <p className="secTitle w-fit font-bold underline text-4xl">{t("projects.title")}</p>
                </div>
                <div className="w-[99vw] flex flex-col">
                    {
                        projs.map((proj, index) =>
                            <div key={index}>
                                <Project proj={proj} index={index} />
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects;