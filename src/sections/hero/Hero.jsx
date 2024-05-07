import { useTranslation } from "react-i18next";
import logo from "../../assets/images/skills/javascript-svgrepo-com.svg"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    const langs = ['JavaScript', 'TypeScript', 'php', 'Python']

    const skills = ['React', 'Tailwind', 'Alpinejs', 'Laravel', 'Livewire'];

    const traite = ['hardWorker', 'quickLearner', 'problemSolver'];

    const prm = ['hardWorker', 'quickLearner'];

    const socials = [
        {
            link: 'https://github.com/Osama-Jeb',
            icon: <FaGithub />
            ,
        },
        {
            link: 'https://www.linkedin.com/in/oussama-jebrane',
            icon: <FaLinkedin />,
        },
        {
            link: 'mailto:oussamajebrane98@gmail.com',
            icon: <HiOutlineMail />,
        },
    ]

    const [t, i18n] = useTranslation("global");

    return (
        <section id="hero">
            <div className="flex items-center gap-5 flex-col text-center sm:flex-row sm:text-start sm:text-5xl text-3xl justify-between w-[90vw]">
                <div className="w-[80%] sm:w-[50%]">
                    <p className="font-bold tracking-wide leading-relaxed">{t("hero.hello")}, <br />
                        {t("hero.I")} <span className="text-[#FFA54F]">OUSSAMA JEBRANE</span>
                        <br />
                        {/* {t("hero.and")} &nbsp;
                        <br className="" />
                        <TypeAnimation
                            sequence={[
                                'Web Developer',
                                1000, 
                                'Problem Solver',
                                1000,
                                'Quick Learner',
                                1000,
                                'Hard Worker',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                            className="text-[#FFA54F] w-[100%]"
                            deletionSpeed={15}
                        /> */}

                    </p>
                    <div className="flex items-center justify-center gap-5 mt-5 sm:text-5xl text-3xl">
                        {
                            socials.map(social =>
                                <>
                                    <a href={social.link} className="hover:scale-125 hover:text-[#FFA54F]" target="_blank" rel="noreferrer">
                                        {social.icon}
                                    </a>
                                </>
                            )
                        }

                    </div>
                </div>
                <div className="text-start">
                    <div className="px-4 border-t-2 border-l border-r border-gray-600 lg:px-8 py-5"
                        style={{ borderTopColor: "#FFA54F" }}>
                        <div className="flex space-x-2">
                            <img src={logo} width={20} alt="" />
                            <p className="text-xl">{t("hero.me")}.js</p>
                        </div>
                    </div>

                    <div
                        className="overflow-hidden bg-[#0d1117] z-10 px-4 lg:px-8 py-4 lg:py-8 border-t-2 border-b border-l border-r border-gray-300"
                        style={{ borderTopColor: "#616161" }}
                    >
                        <code className="font-mono text-xs md:text-sm lg:text-base ">
                            <div className="blink">
                                <span className="mr-2 text-pink-500">const</span>
                                <span className="mr-2 text-white">coder</span>
                                <span className="mr-2 text-pink-500">=</span>
                                <span className="text-gray-400">{'{'}</span></div><div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                                <span className="text-gray-400">'</span>
                                <span className="text-amber-300">Oussama Jebrane</span>
                                <span className="text-gray-400">',</span>
                            </div>
                            <div className="ml-4 lg:ml-8 mr-2">
                                <span className=" text-white">Languages:</span>
                                <span className="text-gray-400">['</span>
                                {
                                    langs.map((lang, index) =>

                                        <>
                                            <span className="text-amber-300">{lang}</span>

                                            {
                                                index != langs.length - 1 ?
                                                    <span className="text-gray-400">', '</span>
                                                    :
                                                    null
                                            }

                                        </>


                                    )
                                }
                                <span className="text-gray-400">'],</span>
                            </div>
                            <div className="ml-4 lg:ml-8 mr-2">
                                <span className=" text-white">skills:</span>
                                <span className="text-gray-400">['</span>
                                {
                                    skills.map((skill, index) =>

                                        <>
                                            <span className="text-amber-300">{skill}</span>

                                            {
                                                index != skills.length - 1 ?
                                                    <span className="text-gray-400">', '</span>
                                                    :
                                                    null
                                            }

                                        </>


                                    )
                                }
                                <span className="text-gray-400">'],</span>
                            </div>

                            {
                                traite.map((trait, index) =>
                                    <>
                                        <div>
                                            <span className="ml-4 lg:ml-8 mr-2 text-white">{trait}:</span>
                                            <span className="text-orange-400">true</span>
                                            <span className="text-gray-400">,</span>
                                        </div>

                                    </>
                                )
                            }

                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                                <span className="text-orange-400">function</span>
                                <span className="text-gray-400">() {'{'}</span>
                            </div>
                            <div>

                                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                                <span className="text-gray-400">(</span>
                            </div>
                            {
                                prm.map((element, index) =>

                                    <>

                                        <div>
                                            <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                                            <span className="mr-2 text-white">{element}</span>
                                            <span className="text-amber-300">&amp;&amp;</span>
                                        </div>
                                    </>
                                )
                            }

                            <div>
                                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                                <span className="mr-2 text-white">skills.length</span>
                                <span className="mr-2 text-amber-300">&gt;=</span>
                                <span className="text-orange-400">5</span>
                            </div>
                            <div>
                                <span className="ml-8 lg:ml-16 mr-2 text-gray-400">);</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 text-gray-400">{'}'};</span>
                            </div>
                            <div>
                                <span className="text-gray-400">{'}'};</span>
                            </div>
                        </code>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;