import { useTranslation } from "react-i18next";
import prof from "../../assets/images/profile.jpg"

const About = () => {

    const [t, i18n] = useTranslation("global");

    return (
        <section id="about" className="mt-12 mb-12 sm:mt-0 sm:mb-0">

            <div>
                <div className="mb-12 flex items-center justify-center">
                    <p className="secTitle w-fit font-bold underline text-4xl">{t('about.title')}</p>
                </div>
                <div className="flex text-2xl items-center flex-col sm:flex-row leading-loose text-center sm:text-start">
                    <div>
                        <p className="text-balance w-[90vw] sm:w-[60vw]">
                            {t("about.first")}
                        </p>
                        <div className="sm:hidden sm:mt-0 mt-10 flex items-center justify-center">
                            <img src={prof} className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer" width={250} alt="" />
                        </div>
                        
                        <p className="text-balance w-[90vw] sm:w-[60vw] sm:mt-3 mt-10">
                            {t("about.second")}
                        </p>
                    </div>
                    <div className="hidden sm:block">
                        <img src={prof} className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer" loading="lazy" width={250} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;