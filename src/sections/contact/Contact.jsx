const Contact = () => {
    return (
        <section id="contact">
            <div>
                <div className="mb-12 flex items-center justify-center">
                    <p className="secTitle w-fit font-bold underline text-4xl">Contact</p>
                </div>
                <div className="flex items-center gap-5 justify-around flex-col-reverse sm:flex-row">
                    <div className="sm:w-[45%] sm:p-0 p-5 text-center">
                        <p className="text-balance leading-relaxed tracking-wide text-2xl">Feel free to contact me anytime. Wether it's about an opportunity or a project or just for a chat to get to know me. </p>
                    </div>
                    <div className="sm:w-[35%] w-[69%] mt-4">
                        <form>

                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#FFA54F] focus:outline-none focus:ring-0 focus:border-[#FFA54F] peer" placeholder=" " required />
                                    <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#FFA54F] peer-focus:dark:text-[#FFA54F] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#FFA54F] focus:outline-none focus:ring-0 focus:border-[#FFA54F] peer" placeholder=" " required />
                                    <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#FFA54F] peer-focus:dark:text-[#FFA54F] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                                </div>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#FFA54F] focus:outline-none focus:ring-0 focus:border-[#FFA54F] peer" placeholder=" " required />
                                <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#FFA54F] peer-focus:dark:text-[#FFA54F] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group border-b-2 border-gray-500">
                                <textarea className="textarea w-full mt-3" placeholder="Message"></textarea>
                            </div>


                            <button type="submit" className="btn btn-block btn-neutral rounded-xl">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;