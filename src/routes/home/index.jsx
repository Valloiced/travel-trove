import Contact from "../../components/global/Contact";
import Choose from "../../components/home/Choose";
import Discover from "../../components/home/Discover";
import Explore from "../../components/home/Explore";
import Front from "../../components/home/Front";

import "./home.css";

export default function Home() {
    return (
        <div className="flex flex-col w-screen">
            <Front />
            <Discover />
            <Explore />
            <Choose />
            <Contact />
        </div>
    )
}