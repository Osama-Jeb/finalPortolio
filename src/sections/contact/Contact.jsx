import Socials from "../../Socials";

const Contact = () => {

    return (
        <section id="contact">
            <div className="min-h-[60vh] w-full flex items-center flex-col justify-evenly">
                <div className="mb-12 flex items-center justify-center">
                    <p className="secTitle w-fit font-bold underline text-4xl">Contact</p>
                </div>

                <div className="flex items-center justify-evenly w-[70%] gap-5 mt-12 sm:text-5xl text-4xl">
                    
                    <Socials />

                </div>
            </div>
        </section>
    )
}

export default Contact;