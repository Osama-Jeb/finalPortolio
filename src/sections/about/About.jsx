import prof from "../../assets/images/profile.jpg"

const About = () => {
    return (
        <section id="about" className="mt-12 mb-12 sm:mt-0 sm:mb-0">

            <div>
                <div className="mb-12 flex items-center justify-center">
                    <p className="secTitle w-fit font-bold underline text-4xl">About Me</p>
                </div>
                <div className="flex text-2xl items-center flex-col sm:flex-row leading-loose text-center sm:text-start">
                    <div>
                        <p className="text-balance w-[90vw] sm:w-[60vw]">
                            I am a professional and enthusiastic programmer in my daily life. I love to learn and explore new technologies and am passionate about problem-solving.
                        </p>
                        <div className="sm:hidden sm:mt-0 mt-10 flex items-center justify-center">
                            <img src={prof} className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer" width={250} alt="" />
                        </div>
                        
                        <p className="text-balance w-[90vw] sm:w-[60vw] sm:mt-3 mt-10">
                            My core skill is based on JavaScript. I am available for any kind of job opportunity that suits my skills and interests.
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