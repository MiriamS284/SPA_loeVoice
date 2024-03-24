import { useState } from "react";
import { Link } from "react-router-dom";
import { MicrophoneIcon } from "../../utils/icons";
import Navbar from "./Navbar";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);

  return (
    <header className="bg-slate-800 text-slate-50">
      <div className="md:flex justify-between items-center hidden space-x-4">
        <Link to="/" className="flex items-center p-4 text-xl font-bold">
          <MicrophoneIcon className="mr-2 w-8 h-8" />
          <span>LoeVoice</span>
        </Link>
        <nav>
          <Link
            to="/about"
            className="p-4  hover:text-slate-300 text-xl font-light"
          >
            Über
          </Link>
          <Link
            to="/demos"
            className="p-4  hover:text-slate-300 text-xl font-light"
          >
            Demos
          </Link>
          <Link
            to="/services"
            className="p-4 text-xl hover:text-slate-300 font-light"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="p-4 hover:text-slate-300 text-xl font-light"
          >
            Kontakt
          </Link>
        </nav>
      </div>
      <div className="md:hidden flex justify-between items-center bg-slate-800 text-slate-50 p-4">
        <Link to="/" className="flex items-center p-4 text-lg font-bold">
          <MicrophoneIcon className="mr-2 w-6 h-6" /> <span>LoeVoice</span>
        </Link>
        <button
          onClick={toggleNavbar}
          className="flex flex-col justify-center items-center w-10 h-10 relative"
        >
          <div
            className={`absolute w-6 h-0.5 bg-white transform transition-all ease-in-out duration-300 ${
              isNavbarOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          ></div>
          <div
            className={`absolute w-6 h-0.5 bg-white transform transition-opacity duration-300 ${
              isNavbarOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`absolute w-6 h-0.5 bg-white transform transition-all ease-in-out duration-300 ${
              isNavbarOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          ></div>
        </button>
      </div>
      <Navbar isOpen={isNavbarOpen} toggle={toggleNavbar} />
    </header>
  );
};

export default Header;
