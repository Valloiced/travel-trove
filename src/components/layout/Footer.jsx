import { 
    FaFacebook,
    FaLinkedin,
    FaYoutube,
    FaInstagram
} from "react-icons/fa";

import LogoDark from "../../assets/logo-dark.png";
import { Link } from "react-router-dom";

export default function Footer() {
    const currYear = new Date().getFullYear();
    return (
        <footer className="flex flex-row w-screen px-24 py-24 justify-around bg-lightwhite max-lg:flex-col-reverse max-lg:items-center max-lg:gap-4">
            <div className="flex flex-col items-center gap-8">
                <div className="flex flex-col items-center">
                    <div className="w-52 max-sm:w-64">
                        <img
                            src={LogoDark}
                            alt="TravelTrove logo"
                        />
                    </div>
                    <p className="font-gothicA1 font-light text-sm text-black text-opacity-75">© {currYear} TravelTrove. All rights reserved.</p>
                </div>
                <div className="flex flex-row justify-between w-3/4 text-xl text-black text-opacity-75">
                    <FaFacebook />
                    <FaLinkedin />
                    <FaYoutube />
                    <FaInstagram />
                </div>
            </div>
            {/* Links */}
            <div className="flex flex-row gap-16 text-sm max-lg:border-b-[1px] max-lg:border-b-darkblack-25 max-lg:pb-16">
                <ul className="list-none flex flex-col gap-4">
                    <li className="font-gothicA1 font-semibold text-black">Policies</li>
                    <FooterList title="Terms and Conditions" />
                    <FooterList title="Privacy and Cookies" />
                    <FooterList title="Content Guidelines" />
                </ul>
                <ul className="list-none flex flex-col gap-4">
                    <li className="font-gothicA1 font-semibold text-black">About</li>
                    <FooterList title="About TravelTrove" link="/about" />
                    <FooterList title="How We Work" />
                    <FooterList title="Careers" />
                    <FooterList title="Corporate Contact" />
                </ul>
                <ul className="list-none flex flex-col gap-4">
                    <li className="font-gothicA1 font-semibold text-black">Help</li>
                    <FooterList title="Support" />
                </ul>
            </div>
        </footer>
    )
}

function FooterList({ title, link }) {
    return (
        <li className="font-gothicA1 font-medium text-black text-opacity-75 text-sm hover:underline">
            <Link to={link ? link : "/"}>
                {title}
            </Link>
        </li>
    )
}