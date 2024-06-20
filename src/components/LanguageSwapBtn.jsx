import { useTranslation } from "react-i18next";

const LanguageSwapBtn = () => {

    const [t, i18n] = useTranslation("global");
    const changeLang = (e) => {
        if (e.target.checked) {
            i18n.changeLanguage("fr");
        } else {
            i18n.changeLanguage("en");
        }
    }
    return (
        <label className="btn btn-sm btn-outline border-0 swap swap-rotate">

            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onClick={(e) => changeLang(e)} />

            {/* hamburger icon */}
            <svg className="swap-off fill-current" height="" width="" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve">
                <path style={{ fill: '#41479B' }} d="M473.655,88.276H38.345C17.167,88.276,0,105.443,0,126.621V385.38
c0,21.177,17.167,38.345,38.345,38.345h435.31c21.177,0,38.345-17.167,38.345-38.345V126.621
C512,105.443,494.833,88.276,473.655,88.276z" />
                <path style={{ fill: '#F5F5F5' }} d="M511.469,120.282c-3.022-18.159-18.797-32.007-37.814-32.007h-9.977l-163.54,107.147V88.276h-88.276
v107.147L48.322,88.276h-9.977c-19.017,0-34.792,13.847-37.814,32.007l139.778,91.58H0v88.276h140.309L0.531,391.717
c3.022,18.159,18.797,32.007,37.814,32.007h9.977l163.54-107.147v107.147h88.276V316.577l163.54,107.147h9.977
c19.017,0,34.792-13.847,37.814-32.007l-139.778-91.58H512v-88.276H371.691L511.469,120.282z" />
                <g>
                    <polygon style={{ fill: '#FF4B55' }} points="282.483,88.276 229.517,88.276 229.517,229.517 0,229.517 0,282.483 229.517,282.483 
229.517,423.724 282.483,423.724 282.483,282.483 512,282.483 512,229.517 282.483,229.517 	" />
                    <path style={{ fill: '#FF4B55' }} d="M24.793,421.252l186.583-121.114h-32.428L9.224,410.31
C13.377,415.157,18.714,418.955,24.793,421.252z" />
                    <path style={{ fill: '#FF4B55' }} d="M346.388,300.138H313.96l180.716,117.305c5.057-3.321,9.277-7.807,12.287-13.075L346.388,300.138z" />
                    <path style={{ fill: '#FF4B55' }} d="M4.049,109.475l157.73,102.387h32.428L15.475,95.842C10.676,99.414,6.749,104.084,4.049,109.475z" />
                    <path style={{ fill: '#FF4B55' }} d="M332.566,211.862l170.035-110.375c-4.199-4.831-9.578-8.607-15.699-10.86L300.138,211.862H332.566z" />
                </g>
            </svg>

            {/* close icon */}
            <svg className="swap-on fill-current" width="" height="" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g id="france-flag-love-ico">
                    <circle cx={33} cy={32} r={23} style={{ fill: '#e5efef' }} />
                    <line x1={7} y1={5} x2={7} y2={7} style={{ fill: 'none', stroke: '#4c241d', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2px' }} />
                    <line x1={7} y1={11} x2={7} y2={13} style={{ fill: 'none', stroke: '#4c241d', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2px' }} />
                    <line x1={3} y1={9} x2={5} y2={9} style={{ fill: 'none', stroke: '#4c241d', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2px' }} />
                    <line x1={9} y1={9} x2={11} y2={9} style={{ fill: 'none', stroke: '#4c241d', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2px' }} />
                    <circle cx="42.5" cy="58.5" r="2.5" style={{ fill: 'none', stroke: '#4c241d', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2px' }} />
                    <path d="M22.651,9.1a1.069,1.069,0,1,1-1.069-1.069A1.069,1.069,0,0,1,22.651,9.1Z" style={{ fill: '#4c241d' }} />
                    <path d="M61.651,53.1a1.069,1.069,0,1,1-1.069-1.069A1.069,1.069,0,0,1,61.651,53.1Z" style={{ fill: '#4c241d' }} />
                    <rect x={8} y={16} width={50} height={33} rx="6.212" ry="6.212" style={{ fill: '#ffffff', stroke: '#4c241d', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2px' }} />
                    <path d="M14.212,16H24a0,0,0,0,1,0,0V49a0,0,0,0,1,0,0H14.212A6.212,6.212,0,0,1,8,42.788V22.212A6.212,6.212,0,0,1,14.212,16Z" style={{ fill: '#9dc1e4', stroke: '#4c241d', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2px' }} />
                    <path d="M42,16h9.788A6.212,6.212,0,0,1,58,22.212V42.788A6.212,6.212,0,0,1,51.788,49H42a0,0,0,0,1,0,0V16A0,0,0,0,1,42,16Z" style={{ fill: '#f53e28', stroke: '#4c241d', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2px' }} />
                </g>
            </svg>

        </label>
    )
}

export default LanguageSwapBtn;