import Project from "./components/Project";
import ygoGif from "../../assets/images/projects/ygoPalette/ygoPalette.gif"
import lionsGif from "../../assets/images/projects/lionsgeek/lionsgeek.gif"
import { useTranslation } from "react-i18next";

const Projects = () => {

    const [t, i18n] = useTranslation("global");

    const projs = [
        {
            name: 'LionsGeek Management System',
            github: '',
            website: 'https://lionsgeek.ma/',
            desc: t("projects.lionsDesc"),
            techs: [
                {
                    name: 'Livewire',
                    color: 'bg-[#ff2d20]',
                },
                {
                    name: 'Breeze Auth',
                    color: 'bg-[#8a94a6]',
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
            name: 'YGO-Palette Generator',
            github: 'https://github.com/Osama-Jeb/ygo-palette',
            website: 'https://ygo-palette-client.vercel.app/',
            desc: t("projects.paletteDesc"),
            techs: [
                {
                    name: 'React',
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
        // {
        //     name: 'ygo-Palette Generator',
        //     github: 'https://github.com/Osama-Jeb/ygo-palette',
        //     website: 'https://ygo-palette-client.vercel.app/',
        //     desc: 'This Website Generates a random color palette based on Yu-Gi-Oh Cards. In this project I learned about API and the importance of Cross-Origin Resource Sharing.',
        //     techs: [
        //         {
        //             name: 'React',
        //             color: 'bg-[#00d8ff]',
        //         },
        //         {
        //             name: 'Express',
        //             color: "bg-[#f7e025]",
        //         },
        //         {
        //             name: 'Tailwind',
        //             color: 'bg-[#38bdf8]'
        //         },
        //     ],
        //     preview: ygoGif
        // },
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
                            <>
                                <Project proj={proj} index={index} />
                            </>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects;