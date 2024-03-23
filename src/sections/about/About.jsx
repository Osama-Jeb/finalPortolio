import prof from "../../assets/images/profile.jpg"

const About = () => {
    return (
        <section id="about" className="p-12">

            <div>
                <div className="mb-12 flex items-center justify-center">
                    <p className="secTitle w-fit font-bold underline text-4xl">About Me</p>
                </div>
                <div className="flex text-2xl items-center ">
                    <div>
                        <p className="tracking-wide indent-8 text-balance w-[70vw]">
                            My name is Oussama. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving.
                        </p>
                        <br /><br />
                        <p className="tracking-wide indent-8 text-balance w-[70vw]">
                            My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.
                        </p>
                    </div>
                    <div>
                        <img src={prof} className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer" width={250} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;