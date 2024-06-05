import TravelTroveLogo from "./assets/logo-dark.png";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div 
      id="error-page"
      className="flex flex-col justify-center items-center h-[75vh] gap-8"
    >
      <img 
        src={TravelTroveLogo} 
        alt="TravelTrove Logo"
        className="w-96"
      />
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-gothicA1 font-bold text-2xl text-black">Page Not Found</h1>
        <p className="font-gothicA1 font-light text-sm text-black">Got Lost? You can go back where you started.</p>
      </div>
      <Link 
        className="transition-all flex flex-row justify-center items-center bg-green text-black font-gothicA1 font-bold py-2 px-10 rounded-full cursor-pointer max-sm:px-6 hover:bg-green/75"
      >
        Go to Home 
      </Link>
    </div>
  );
}