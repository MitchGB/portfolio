import { Link } from "react-router-dom";
import githubLogo from "../assets/logo/github.svg";

const Navbar = () => {
    return (
        <nav className="w-full flex justify-center dark:bg-zinc-900">
            <div className="w-full xl:w-5/6 max-w-screen-2xl flex justify-between items-center p-5 ">
                <div className="flex gap-4 items-center">
                    <Link to="/" className="group font-bold text-xl text-black hover:text-indigo-500 dark:text-white">
                        mitchg
                        <span className="text-indigo-500 group-hover:text-black dark:group-hover:text-white">.</span>
                        dev
                    </Link>

                    <Link to="/projects" className="font-medium text-black dark:text-white hover:text-indigo-500">Projects</Link>

                    <Link to="/about-me" className="font-medium text-black dark:text-white hover:text-indigo-500">About Me</Link>
                </div>

                <div className="">
                    <div className="rounded-full hover:bg-gray-200 cursor-pointer p-2 ">
                        <a href="https://github.com/MitchGB" target="_">
                            <img className="w-6 h-6" src={githubLogo} />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;