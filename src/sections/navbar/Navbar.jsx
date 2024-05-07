import { motion, useScroll } from "framer-motion";
import Logo from "../../Logo";
import { FaAngleDown } from "react-icons/fa";
import LanguageSwapBtn from "../../LanguageSwapBtn";



const Navbar = (props) => {
    const { scrollYProgress } = useScroll();
    
    const themes = ['black', 'forest', 'synthwave', 'halloween', 'aqua', 'dracula', 'business', 'coffee', 'night', 'sunset'];


    return (
        <>
            <nav className="navbar bg-[#61616180] backdrop-blur-md sticky top-0 right-0 z-20 px-4 flex items-center justify-between">

                <Logo />

                <div>

                    <LanguageSwapBtn />

                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn">
                            Themes
                            <FaAngleDown />

                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] shadow-2xl bg-base-300 rounded-box">
                            {
                                themes.map((theme, index) => (
                                    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label={theme} value={theme}
                                        onClick={() => { props.setTheme(theme) }}
                                    /></li>

                                ))
                            }
                        </ul>
                    </div>

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