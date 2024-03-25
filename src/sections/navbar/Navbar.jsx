
const Navbar = () => {

    const links = ["About", "Projects", "Contact"];

    return (
        <>
            <nav className="navbar bg-[#61616180] backdrop-blur-md sticky top-0 right-0 z-10 px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm bg-[#616161] backdrop-blur-md mt-2 dropdown-content z-[1] gap-2 rounded-2xl w-52">
                            {
                                links.map((link, index) =>
                                    <li>
                                        <a href={`#${link.toLowerCase()}`}>
                                            <button className="btn btn-outline rounded-xl text-white">{link}
                                            </button>
                                        </a>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <a href="#hero" className="flex items-center gap-3">

                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            className="w-8vw sm:w-5vw" viewBox="0 0 256.000000 227.000000"
                            preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,227.000000) scale(0.100000,-0.100000)"
                                fill="#000000" stroke="none">
                                <path d="M767 1998 c-14 -13 -119 -185 -233 -383 -177 -306 -208 -366 -208
-400 0 -32 17 -69 85 -185 47 -80 143 -245 213 -368 71 -122 138 -229 149
-237 18 -13 88 -15 459 -15 287 0 445 4 460 11 29 12 27 10 269 429 135 235
193 344 193 366 0 28 -55 129 -357 649 -38 66 -78 128 -89 138 -19 16 -56 17
-469 17 l-448 0 -24 -22z m1130 -388 c120 -208 212 -376 212 -391 1 -16 -53
-119 -140 -270 -78 -134 -173 -299 -211 -367 -48 -83 -77 -124 -92 -127 -11
-3 -212 -4 -446 -3 l-425 3 -63 105 c-34 58 -133 228 -219 378 l-156 273 16
34 c26 55 398 698 415 718 14 16 46 17 456 15 l440 -3 213 -365z"/>
                                <path d="M777 1828 c-188 -322 -349 -604 -349 -613 0 -5 90 -165 200 -355
l201 -345 408 -3 409 -2 194 336 c107 185 199 344 203 354 7 13 -39 101 -193
369 l-203 351 -408 0 -408 0 -54 -92z m568 -182 c153 -40 264 -144 314 -293
23 -67 20 -93 -11 -93 -19 0 -24 9 -62 113 -11 29 -39 69 -70 101 -121 125
-291 158 -442 87 -108 -51 -169 -119 -209 -236 l-21 -60 -142 -3 c-121 -2
-143 0 -148 13 -14 36 14 45 131 45 l113 0 17 49 c30 93 122 193 222 245 85
43 215 57 308 32z m-17 -212 c86 -36 141 -120 142 -217 0 -98 -46 -172 -135
-213 -168 -79 -353 55 -331 240 9 81 73 165 148 196 37 14 135 11 176 -6z
m586 -270 c9 -8 16 -17 16 -19 0 -2 -7 -11 -16 -19 -12 -13 -39 -16 -124 -16
l-108 0 -36 -75 c-67 -143 -188 -232 -347 -256 -187 -29 -373 70 -459 243 -18
38 -33 85 -34 105 -1 34 2 38 23 38 20 0 27 -8 40 -51 50 -151 163 -249 318
-274 185 -30 374 90 424 270 7 25 19 51 28 58 24 19 255 17 275 -4z"/>
                                <path d="M1240 1400 c0 -5 9 -10 20 -10 34 0 97 -37 121 -72 16 -21 24 -50 27
-89 4 -49 0 -65 -22 -103 -29 -49 -90 -86 -144 -86 -38 0 -98 23 -125 48 -25
22 -57 86 -57 112 0 12 -4 19 -9 16 -10 -7 0 -60 17 -92 6 -12 27 -35 46 -52
124 -109 317 -15 316 152 0 40 -30 105 -61 133 -42 38 -129 67 -129 43z"/>
                                <path d="M1240 1370 c0 -5 8 -10 18 -10 9 0 32 -9 50 -20 157 -96 33 -330
-133 -250 -52 25 -70 22 -28 -6 16 -10 53 -20 83 -22 60 -4 104 17 142 69 63
85 6 217 -104 243 -17 4 -28 2 -28 -4z"/>
                                <path d="M1277 1321 c46 -21 73 -62 73 -110 0 -39 -49 -96 -92 -106 -29 -7
-30 -9 -10 -12 29 -6 85 29 100 62 16 36 15 90 -3 125 -16 31 -61 60 -92 60
-10 0 1 -9 24 -19z"/>
                                <path d="M1185 1275 c-32 -31 -34 -86 -5 -115 31 -31 93 -27 119 6 29 37 26
70 -8 105 -36 36 -73 37 -106 4z"/>
                            </g>
                        </svg>

                        <span>
                            OUSSAMA JEBRANE
                        </span>

                    </a>
                </div>

                <div className="navbar-end hidden sm:flex gap-3">
                    {
                        links.map((link, index) =>
                            <>
                                <a href={`#${link.toLowerCase()}`}>
                                    <button className="btn btn-outline rounded-xl text-white btn-xs sm:btn-sm md:btn-md">{link}
                                    </button>
                                </a>
                            </>
                        )
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar;