import { useState, useEffect } from 'react'; 
import { Link, useLocation } from 'react-router-dom';

import LogoDark from '../../assets/logo-dark.png';
import LogoLight from '../../assets/logo-light.png';

export default function Navbar() {
    const location = useLocation();

    const [isScrolled, setIsScrolled] = useState(false);
    
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

    const isHome = location.pathname === '/home';
    
    return (
        <nav className={`transition-all fixed top-0 left-0 flex flex-row justify-between items-center px-24 py-4 w-screen ${(!isHome || isScrolled) && 'bg-lightwhite  shadow-md'} z-50`}>
            <div className='w-48'>
                <img src={isHome && !isScrolled ? LogoLight : LogoDark} alt="TravelTrove logo" />
            </div>
            <div className={`flex flex-row gap-10 font-gothicA1 font-bold text-sm ${!isHome || isScrolled ? 'text-black' : 'text-white'} items-center`}>
                <Link to="/home">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/booking">BOOKING</Link>
                <button className={`transition-all flex flex-row justify-center items-center text-black py-2 px-6 rounded-full cursor-pointer ${(!isHome || isScrolled) ? 'bg-green' : 'bg-white'}`}>Sign In</button>
            </div>
        </nav>
    )
}
