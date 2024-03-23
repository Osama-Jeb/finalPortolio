import logo from "../../assets/images/skills/javascript-svgrepo-com.svg"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Hero = () => {
    const langs = ['javascript', 'php', 'python']

    const skills = ['react', 'tailwind', 'alpinejs', 'laravel', 'livewire'];

    const traite = ['hardWorker', 'quickLearner', 'problemSolver'];

    const prm = ['this.hardWorker', 'quickLearner'];

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

    return (
        <section id="hero">
            <div className="flex items-center justify-between w-[90vw]">
                <div>
                    <p className="text-4xl font-bold tracking-wide">Hello, <br />
                        I'm <span className="text-[#FFA54F]">OUSSAMA,</span>
                        <br />
                        I'm a Web Developer

                    </p>
                    <div className="flex items-center gap-5 mt-5 text-4xl">
                        {
                            socials.map(social => 
                            <>
                                <a href={social.link} className="hover:scale-125" target="_blank" rel="noreferrer">
                                    {social.icon}
                                </a>
                            </>
                            )
                        }

                    </div>
                </div>
                <div>
                    <div className="px-4 border-t-2 border-l border-r border-gray-600 lg:px-8 py-5"
                        style={{ borderTopColor: "#FFA54F" }}>
                        <div className="flex space-x-2">
                            <img src={logo} width={20} alt="" />
                            <p>Me.js</p>
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