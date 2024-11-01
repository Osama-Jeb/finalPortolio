import html from "../../assets/images/skills/html.svg"
import css from "../../assets/images/skills/css.svg"
import scss from "../../assets/images/skills/scss.svg"
import javascript from "../../assets/images/skills/javascript.svg"
import php from "../../assets/images/skills/php.svg"
import typescript from "../../assets/images/skills/typescript.svg"

import react from "../../assets/images/skills/react.svg"
import laravel from "../../assets/images/skills/laravel.svg"
import alpine from "../../assets/images/skills/Alpine.js.svg"
import livewire from "../../assets/images/skills/Livewire.svg"
import tailwind from "../../assets/images/skills/tailwind.svg"
import bootstrap from "../../assets/images/skills/bootstrap.svg"

import git from "../../assets/images/skills/Git.svg"
import github from "../../assets/images/skills/GitHub.svg"
import firebase from "../../assets/images/skills/firebase.svg"

import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

const Skills = () => {

    const languages = [
        {
            name: 'HTML5',
            image: html,
            bg: 'border-[#e44d26] shadow-[#e44d26]'
        },
        {
            name: 'CSS',
            image: css,
            bg: 'border-[#1172b8] shadow-[#1172b8]'
        },
        // {
        //     name: 'SCSS',
        //     image: scss,
        //     bg: 'border-[#cc6699] shadow-[#cc6699]'
        // },
        {
            name: 'JavaScript',
            image: javascript,
            bg: 'border-[#f7e025] shadow-[#f7e025]'
        },
        {
            name: 'TypeScript',
            image: typescript,
            bg: 'border-[#3178c6] shadow-[#3178c6]'
        },
        {
            name: 'php',
            image: php,
            bg: 'border-[#7b7fb5] shadow-[#7b7fb5]'
        },
    ];

    const frameworks = [
        {
            name: 'ReactJS',
            image: react,
            bg: 'border-[#00d8ff] shadow-[#00d8ff]'
        },
        {
            name: 'Laravel',
            image: laravel,
            bg: 'border-[#ff2d20] shadow-[#ff2d20]'
        },
        {
            name: 'React Native',
            image: react,
            bg: 'border-[#00d8ff] shadow-[#00d8ff]'
        },
        // {
        //     name: 'Bootstrap',
        //     image: bootstrap,
        //     bg: 'border-[#563d7c] shadow-[#563d7c]'
        // },
        
        {
            name: 'Alpine',
            image: alpine,
            bg: 'border-[#77c1d2] shadow-[#77c1d2]'
        },
        {
            name: 'Livewire',
            image: livewire,
            bg: 'border-[#fb70a9] shadow-[#fb70a9]'
        },
    ];

    const others = [
        {
            name: 'Git',
            image: git,
            bg: 'border-[#f05033] shadow-[#f05033]'
        },
        {
            name: 'GitHub',
            image: github,
            bg: 'border-[#282828] shadow-[#a8a8a8]'
        },
        {
            name: 'Firebase',
            image: firebase,
            bg: 'border-[#ffa54f] shadow-[#ffa54f]'
        },
        {
            name: 'Tailwind',
            image: tailwind,
            bg: 'border-[#307880] shadow-[#307880]'
        },

    ]

    const categories = [
        { title: 'Languages', skills: languages },
        { title: 'Frameworks', skills: frameworks },
        // { title: 'Backend', skills: backend },
        { title: 'Others', skills: others },
    ];


    const item = {
        hidden: { x: -120, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
        }
    };

    const [t, i18n] = useTranslation("global");

    return (
        <section id="skills" className="mt-12 mb-12 sm:mt-0 sm:mb-0 p-5" >
            <div>
                <div className="mb-12 flex items-center justify-center">
                    <p className="secTitle w-fit font-bold underline text-4xl">{t("skills.title")}</p>
                </div>
                <div className="flex flex-col gap-6">
                    {categories.map((category, index) => (
                        <div key={index} className="mt-7">
                            <p className="text-3xl tracking-wider font-bold mb-2">{category.title}:</p>
                            <motion.ul
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }}
                                variants={{
                                    hidden: { opacity: 1 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            delayChildren: 0.3,
                                            staggerChildren: 0.2
                                        }
                                    }
                                }}
                                className="flex items-center gap-3 flex-wrap">
                                {category.skills.map((skill, i) => (
                                    <motion.li
                                        variants={item}
                                        key={i}
                                        className={`btn btn-lg tracking-wider ${skill.bg} mt-2 shadow-md rounded-2xl`}
                                    >
                                        <img src={skill.image} width={25} alt="" />
                                        {skill.name}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;