import { MdOutlineClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from 'react'; 
import { Link, useLocation } from 'react-router-dom';

import LogoDark from '../../assets/logo-dark.png';
import LogoLight from '../../assets/logo-light.png';

export default function Navbar() {
    const location = useLocation();

    const [isScrolled, setIsScrolled] = useState(false);
    const [isToggled, setIsToggled] = useState(false);
    
    const handleScroll = () => {
        if (window.scrollY > window.screen.height - 150) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
    }, []);

    useEffect(() => {
        setIsToggled(false);
    }, [location])

    const isHome = location.pathname === '/home';
    
    return (
        <nav className={`transition-all fixed top-0 left-0 flex flex-row justify-between items-center px-24 py-4 w-screen ${(!isHome || isScrolled) && 'bg-lightwhite  shadow-md'} z-[99999] max-lg:px-2`}>
            <div className='flex max-lg:hidden w-48'>
                <Link to="/home"><img src={isHome && !isScrolled ? LogoLight : LogoDark} alt="TravelTrove logo" /></Link>
            </div>
            <div className="hidden max-lg:flex px-4">
                <h1 className={`font-cinzeldeco text-xl font-bold ${isHome && !isScrolled ? "text-white" : "text-black"}`}>
                    TraveL Trove
                </h1>
            </div>
            <button 
                className={`hidden text-2xl ${(!isHome || isScrolled) ? 'text-black' : 'text-white'} max-sm:flex px-4`}
                onClick={() => setIsToggled(true)}
            >
                <GiHamburgerMenu />
            </button>
            <div className={`flex flex-row gap-10 font-gothicA1 font-bold text-sm ${!isHome || isScrolled ? 'text-black' : 'text-white'} items-center max-sm:hidden`}>
                <Link to="/home">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/booking">BOOKING</Link>
                <button className={`transition-all flex flex-row justify-center items-center text-black py-2 px-6 rounded-full cursor-pointer ${(!isHome || isScrolled) ? 'bg-green hover:bg-green/75' : 'bg-white'}`}>Sign In</button>
            </div>
            <Sidebar 
                isToggled={isToggled}
                setIsToggled={setIsToggled}
            />
        </nav>
    )
}

function Sidebar({ isToggled, setIsToggled }) {
    return (
        <div className={`flex flex-row justify-end w-full fixed right-0 top-0 transition ${isToggled ? 'translate-x-0' : 'translate-x-full' } bg-darkblack-25n`}>
            <div className={`flex flex-col bg-white py-2 w-3/5 font-gothicA1 font-bold text-sm shadow-xl h-screen`}>
                <button 
                    className="self-start flex flex-row justify-center items-center bg-white text-black text-2xl rounded-full px-2 py-2 mx-2 mb-8"
                    onClick={() => setIsToggled(false)}
                >
                    <MdOutlineClose />
                </button>
                <Link to="/home" className="bg-white px-4 py-4 border-b-[1px] border-b-darkblack/10">
                    <p>HOME</p>
                </Link>
                <Link to="/about" className="bg-white px-4 py-4 border-b-[1px] border-b-darkblack/10">
                    <p>ABOUT</p>
                </Link>
                <Link to="/booking" className="bg-white px-4 py-4 border-b-[1px] border-b-darkblack/10">
                    <p>BOOKING</p>
                </Link>
                <button className="transition-all flex flex-row justify-center items-center text-black py-3 cursor-pointer bg-green my-8 mx-2 rounded-full">Sign In</button>
            </div>
        </div>
    )
}
