import { motion, useScroll } from "framer-motion";
import Logo from "../../components/Logo";
import LanguageSwapBtn from "../../components/LanguageSwapBtn";
import ThemeSwap from "../../components/ThemeSwap";

import cv from "../../assets/images/CV.pdf"



const Navbar = (props) => {
    const { scrollYProgress } = useScroll();

    return (
        <>
            <nav className="navbar rounded-t-3xl w-[90vw] mx-auto bg-[#61616180] backdrop-blur-md sticky top-[15px] right-0 z-20 px-4 h-[1vh] flex items-center justify-between">

                <Logo />

                <div>
                    <div>
                        <a href={cv} className="btn-sm btn btn-outline rounded-bl-2xl rounded-tr-2xl mr-3 tracking-widest text-lg" target="_blank" rel="nonreferrer">
                            CV
                        </a>
                        
                    </div>

                    <LanguageSwapBtn />

                    <ThemeSwap setTheme={props.setTheme} />

                </div>


                <motion.div
                    style={{ scaleX: scrollYProgress }}
                    className="bg-alpha z-50 fixed bottom-0 left-0 h-[0.5vh] w-full">
                </motion.div>

            </nav>

        </>
    )
}

export default Navbar;