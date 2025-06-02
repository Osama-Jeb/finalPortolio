import Project from "./components/Project";
import lionsGif from "../../assets/images/projects/lionsgeek/lionsgeek.gif"
import blogGif from "../../assets/images/projects/blog/blog.gif"

import anime1 from "../../assets/images/projects/animelist/anime2.png"
import casa1 from "../../assets/images/projects/casatourat/casa1.png"
import africa1 from "../../assets/images/projects/yesafrica/africa3.png"

import { useTranslation } from "react-i18next";

const Projects = () => {

    const [t, i18n] = useTranslation("global");

    const allProjects = [
        {
            name: 'LionsGeek Management System',
            github: '',
            website: 'https://mylionsgeek.ma/',
            desc: t("projects.lionsDesc"),
            techs: [
                {
                    name: 'Laravel',
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
                    color: 'bg-[#30b8c7]'
                },
            ],
            preview: lionsGif

        },
        {
            name: 'Casa Memoire',
            github: '',
            website: 'http://casatourat.ma/',
            desc: t("projects.casa"),
            techs: [
                {
                    name: 'React Native',
                    color: 'bg-[#00d8ff]',
                },
                {
                    name: 'Expo',
                    color: 'bg-white'
                },
                {
                    name: 'Laravel',
                    color: 'bg-[#ff2d20] text-white',
                },
            ],
            preview: casa1

        },
        {
            name: 'YES Africa',
            github: '',
            website: 'https://youthempowermentsummit.africa/',
            desc: t("projects.africa"),
            techs: [
                {
                    name: 'ReactJS',
                    color: 'bg-[#00d8ff]',
                },
                {
                    name: 'Tailwind',
                    color: 'bg-[#30b8c7]'
                },
                {
                    name: 'Laravel',
                    color: 'bg-[#ff2d20] text-white',
                },
            ],
            preview: africa1
        },
        {
            name: 'Anime Repo',
            github: 'https://github.com/Osama-Jeb/animelist',
            website: 'https://animelist-blue.vercel.app/',
            desc: t("projects.animeRepo"),
            techs: [
                {
                    name: 'React Typescript',
                    color: 'bg-[#00d8ff]',
                },
                {
                    name: 'Firebase',
                    color: "bg-alpha text-white",
                },
                {
                    name: 'Tailwind',
                    color: 'bg-[#30b8c7]'
                },
                {
                    name: 'Jikan API',
                    color: 'bg-[#1ad1a5]'
                },
            ],
            preview: anime1
        },
        // {
        //     name: 'Blog & Chat',
        //     github: 'https://github.com/Osama-Jeb/Blog',
        //     website: 'https://myblogproject.vercel.app/',
        //     desc: t("projects.blog"),
        //     techs: [
        //         {
        //             name: 'ReactJS',
        //             color: 'bg-[#00d8ff]',
        //         },
        //         {
        //             name: 'Tailwind',
        //             color: 'bg-[#30b8c7]'
        //         },
        //         {
        //             name: 'Firebase',
        //             color: "bg-alpha text-white",
        //         },
        //     ],
        //     preview: blogGif

        // },
        // {
        //     name: 'YGO-Palette Generator',
        //     github: 'https://github.com/Osama-Jeb/ygo-palette',
        //     website: 'https://ygo-palette-client.vercel.app/',
        //     desc: t("projects.paletteDesc"),
        //     techs: [
        //         {
        //             name: 'ReactJS',
        //             color: 'bg-[#00d8ff]',
        //         },
        //         {
        //             name: 'Express',
        //             color: "bg-[#f7e025]",
        //         },
        //         {
        //             name: 'Tailwind',
        //             color: 'bg-[#30b8c7]'
        //         },
        //         {
        //             name: 'DaisyUI',
        //             color: 'bg-[#1ad1a5]'
        //         },
        //     ],
        //     preview: ygoGif
        // },
        // {
        //     name: 'LionsResto',
        //     github: 'https://github.com/Osama-Jeb/oussama_jebrane_lionsresto_final',
        //     website: 'https://osama-jeb.github.io/oussama_jebrane_lionsresto_final/',
        //     desc: t("projects.restoDesc"),
        //     techs: [
        //         {
        //             name: 'HTML',
        //             color: 'bg-[#e44d26] text-white',
        //         },
        //         {
        //             name: 'CSS',
        //             color: 'bg-[#1172b8] text-white'
        //         },
        //         {
        //             name: 'JavaScript',
        //             color: "bg-[#f7e025]",
        //         },
        //         {
        //             name: 'SCSS',
        //             color: 'bg-[#cc6699] text-white'
        //         },
        //         {
        //             name: 'Bootstrap',
        //             color: 'bg-[#563d7c] text-white'
        //         },
        //     ],
        //     preview: restoGif
        // }
    ]

    return (
        <section id="projects" className="mt-12">
            <div>
                <div className="mb-12 flex items-center justify-center">
                    <p className="secTitle w-fit font-bold underline text-4xl">{t("projects.title")}</p>
                </div>
                <div className="w-[99vw] flex flex-col">
                    {
                        allProjects.map((proj, index) =>
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