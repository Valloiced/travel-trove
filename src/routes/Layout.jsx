import { Outlet, useLocation } from "react-router-dom";

import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

export default function Layout() {
    const location = useLocation();

    return (
        <main className="overflow-hidden">
            <Navbar />
            <div className={`flex flex-col w-screen ${location.pathname !== '/home' && 'mt-24'}`}>
                <Outlet />
            </div>
            <Footer />
        </main>
    )
}