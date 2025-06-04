import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

import Socials from "../../components/Socials";
import { useTranslation } from "react-i18next";

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const [t, i18n] = useTranslation("global");


    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        for (let value of formData.values()) {
            if (!value) return;
        }

        setLoading(true);

        emailjs
            .sendForm('service_0njnq58', 'template_0ykh9bs', form.current, {
                publicKey: 'duCUAns3ZsUYdgAzN',
            })
            .then(
                () => {
                    form.current.reset();
                    setLoading(false);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section id="contact">
            <div className="min-h-[70vh] w-full flex items-center flex-col justify-evenly">
                <div className=" flex items-center justify-center">
                    <p className="secTitle w-fit font-bold underline text-4xl">Contact</p>
                </div>

                <p className="my-10 tracking-widest text-center sm:text-xl text-lg px-5">{t('contact.free')}</p>

                <div className="flex gap-10 flex-col items-center w-full sm:p-0 p-5">
                    <div className="text-4xl flex items-center justify-center sm:w-[50%]">
                        <Socials />
                    </div>

                    <br />

                    <form ref={form} onSubmit={sendEmail} className="flex items-center flex-col gap-4 sm:w-[50%] w-full">

                        <input type="text" name="from_name" required className="w-full p-2 rounded bg-transparent border-2 border-neutral" placeholder="Name..." />

                        <input type="email" name="from_email" required className="w-full p-2 rounded bg-transparent border-2 border-neutral" placeholder="Email..." />

                        <textarea name="message" required className="w-full p-2 rounded bg-transparent border-2 border-neutral" placeholder="Message..." />
                        <button type="submit" disabled={loading} className="btn  w-full  btn-base-content  font-bold rounded tracking-widest text-lg">
                            {
                                loading ? <><span class="loading loading-ring loading-md"></span>
                                </> : t('contact.send')
                            }
                        </button>
                    </form>


                </div>
            </div>
        </section>
    )
}

export default Contact;