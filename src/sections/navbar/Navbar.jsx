import { motion, useScroll } from "framer-motion";
import Logo from "../../Logo";
import LanguageSwapBtn from "../../LanguageSwapBtn";
import ThemeSwap from "../../ThemeSwap";



const Navbar = (props) => {
    const { scrollYProgress } = useScroll();

    return (
        <>
            <nav className="navbar bg-[#61616180] backdrop-blur-md sticky top-0 right-0 z-20 px-4 flex items-center justify-between">

                <Logo />

                <div>

                    <LanguageSwapBtn />

                    <ThemeSwap setTheme={props.setTheme} />

                </div>
                <motion.div
                    style={{ scaleX: scrollYProgress }}
                    className="bg-[#FFA54F] z-50 fixed bottom-0 left-0 h-[0.5vh] w-full">
                </motion.div>

            </nav>

        </>
    )
}

export default Navbar;