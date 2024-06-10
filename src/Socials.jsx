import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Socials = () => {
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
            link: 'mailto:jebrane.dev@gmail.com',
            icon: <HiOutlineMail />,
        },
        {
            link: 'https://wa.me/212696916944',
            icon: <FaWhatsapp />,
        },
    ]
    return (
        <>
            {
                socials.map((social, index) =>
                    <div key={index}>
                        <a href={social.link} className="hover:scale-125 hover:text-[#FFA54F]" target="_blank" rel="noreferrer">
                            {social.icon}
                        </a>
                    </div>
                )
            }
        </>
    )
}

export default Socials;