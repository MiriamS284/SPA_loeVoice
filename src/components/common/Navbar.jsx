import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Navbar = ({ isOpen, toggle }) => {
  return (
    <div
      className={`absolute z-10 transform left-0 bg-slate-950 transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } w-1/2 h-screen pt-14 pb-24 overflow-auto`}
    >
      <nav className="flex flex-col items-center justify-center p-4 text-xl font-light text-gray-50">
        <Link
          to="/about"
          className="py-6 hover:text-slate-300"
          onClick={toggle}
        >
          Über
        </Link>
        <Link
          to="/demos"
          className="py-6 hover:text-slate-300"
          onClick={toggle}
        >
          Demos
        </Link>
        <Link
          to="/services"
          className="hover:text-slate-300 py-6 "
          onClick={toggle}
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="py-6 hover:text-slate-300 "
          onClick={toggle}
        >
          Kontakt
        </Link>
      </nav>
      {/* Social/Contact links */}
      <div className="px-4 py-6 mt-4">
        <ul className="flex items-center justify-center space-x-4">
          {" "}
          <li>
            <a
              href="https://www.linkedin.com/in/thomas-loebel-50aa6b281/?originalSubdomain=de"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="logos:linkedin-icon" width="30" height="30" />
            </a>
          </li>
          <li>
            <a
              href="https://www.fiverr.com/loevoice/produce-a-male-german-voice-over-in-a-calming-voice"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="arcticons:fiverr"
                width="30"
                height="30"
                className="hover:text-slate-300"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.upwork.com/freelancers/~01e406c8bf77b5d300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="arcticons:freelancer-upwork"
                width="30"
                height="30"
                className="hover:text-slate-300"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
