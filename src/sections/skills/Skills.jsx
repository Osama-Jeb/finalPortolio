import python from "../../assets/images/skills/python-svgrepo-com.svg"
import javascript from "../../assets/images/skills/javascript-svgrepo-com.svg"
import php from "../../assets/images/skills/php-svgrepo-com.svg"
import typescript from "../../assets/images/skills/typescript-svgrepo-com.svg"

import react from "../../assets/images/skills/react-svgrepo-com.svg"
import laravel from "../../assets/images/skills/laravel-svgrepo-com.svg"
import alpine from "../../assets/images/skills/Alpine.js.svg"
import livewire from "../../assets/images/skills/Livewire.svg"
import tailwind from "../../assets/images/skills/tailwind-svgrepo-com.svg"

import git from "../../assets/images/skills/Git.svg"
import github from "../../assets/images/skills/GitHub.svg"

import { motion } from "framer-motion"

const Skills = () => {

    const languages = [
        {
            name: 'javascript',
            image: javascript,
            bg: 'border-[#f7e025] shadow-[#f7e025]'
        },
        {
            name: 'typescript',
            image: typescript,
            bg: 'border-[#3178c6] shadow-[#3178c6]'
        },
        {
            name: 'python',
            image: python,
            bg: 'border-[#386d99] python-shadow'
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
            name: 'Tailwind',
            image: tailwind,
            bg: 'border-[#77c1d2] shadow-[#77c1d2]'
        },
        {
            name: 'Alpine',
            image: alpine,
            bg: 'border-[#38bdf8] shadow-[#77c1d2]'
        },
        {
            name: 'Laravel',
            image: laravel,
            bg: 'border-[#ff2d20] shadow-[#ff2d20]'
        },
        {
            name: 'Livewire',
            image: livewire,
            bg: 'border-[#fb70a9] shadow-[#fb70a9]'
        },
    ];

    const worfkflows = [
        {
            name: 'Git',
            image: git,
            bg: 'border-[#f05033] shadow-[#f05033]'
        },
        {
            name: 'Github',
            image: github,
            bg: 'border-[#282828] shadow-[#a8a8a8]'
        },
    ]

    const categories = [
        { title: 'Languages', skills: languages },
        { title: 'Frameworks', skills: frameworks },
        { title: 'Workflow', skills: worfkflows },
    ];


    const item = {
        hidden: { x: -120, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,

        }
    };

    return (
        <section id="skills" className="mt-12 mb-12 sm:mt-0 sm:mb-0 p-5" >
            <div>
                <div className="mb-12 flex items-center justify-center">
                    <p className="secTitle w-fit font-bold underline text-4xl">Skills</p>
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