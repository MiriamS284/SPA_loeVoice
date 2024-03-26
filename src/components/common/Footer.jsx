import { Link } from "react-router-dom";
import { MicrophoneIcon } from "../../utils/icons";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-50 p-4">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
        <div className="hidden sm:block flex-1"></div>

        <div className="mb-4 sm:mb-0 sm:flex-grow text-center text-slate-50 text-lg">
          <Link to="/" className="flex items-center p-4 ">
            <span className="font-extralight tracking-normal text-xs">
              © 2024
            </span>
            <MicrophoneIcon className="mr-2 w-8 h-8 text-xl font-bold" />
            <span className="text-xl font-bold">LoeVoice</span>
          </Link>
        </div>

        <div className="flex flex-1 justify-end space-x-4 md:text-base">
          <Link
            to="/privacypolicy"
            className="text-slate-100 hover:text-slate-300"
          >
            Privacy Policy
          </Link>
          <Link
            to="/imprint"
            className="text-slate-100 hover:text-slate-300 md:text-base"
          >
            Imprint
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
