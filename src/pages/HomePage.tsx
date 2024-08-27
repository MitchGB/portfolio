import ConsoleDisplay from "../components/ConsoleDisplay";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import markerIcon from "../assets/marker-FFFFFF.svg";
import graduationIcon from "../assets/graduation-cap-FFFFFF.svg";
import chartIcon from "../assets/chat-arrow-grow-FFFFFF.svg";
import { calculateAge } from "../util/DateUtil";
import LargeScaleComputing from "../components/HomePage/LargeScaleComputing";
import WebDevelopment from "../components/HomePage/WebDevelopment";


const HomePage = () => {
    const age = calculateAge(new Date(2002, 10, 22));

    return (
        <>
            <Navbar />

            <section className="w-full flex justify-center dark:bg-zinc-900">
                <div className="w-full xl:w-5/6 max-w-screen-2xl flex justify-center md:justify-between items-center p-5 gap-10">
                    <div className="py-32">
                        <p className="text-black dark:text-white text-5xl font-semibold">Hey, I'm Mitch.</p>
                        <p className="text-indigo-500 text-3xl font-medium mt-10">I like to code stuff</p>

                        <div className="mt-10 flex gap-4 items-center">
                            <a href="/projects" className="font-medium px-4 py-1.5 rounded-md bg-indigo-500 text-white hover:bg-indigo-400">
                                My Projects
                            </a>

                            <a href="/about-me" className="font-medium px-4 py-1.5 rounded-md border border-gray-400 hover:bg-gray-100 dark:text-white dark:hover:bg-zinc-800">
                                About Me
                            </a>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <ConsoleDisplay />
                    </div>
                </div>
            </section>

            <section className="w-full flex justify-center bg-gray-100 dark:bg-zinc-800">
                <div className="w-full xl:w-5/6 max-w-screen-2xl px-5 py-16">
                    <p className="text-black dark:text-white font-semibold text-2xl">A bit about <span class="text-indigo-500">me.</span></p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5 text-black dark:text-white ">
                        <div className="grid-span-1 px-8 py-8 rounded-md hover:bg-gray-200 hover:shadow-md dark:hover:bg-zinc-900">
                            <div className="flex items-center gap-5">
                                <div className="bg-gray-900 p-2 w-12 h-12 flex justify-center items-center rounded-md mb-4">
                                    <img className="" src={markerIcon} />
                                </div>
                                <p className="font-medium text-lg -mt-3.5">My Background</p>
                            </div>

                            <p>I'm a {age} year old programmer from Melbourne, Australia. I mainly use Java but I also know C#, Typescript, C++, Python and a few other languages.</p>
                        </div>
                        <div className="grid-span-1 px-8 py-8 rounded-md hover:bg-gray-200 hover:shadow-md dark:hover:bg-zinc-900">
                            <div className="flex items-center gap-5">
                                <div className="bg-gray-900 p-2 w-12 h-12 flex justify-center items-center rounded-md mb-4">
                                    <img className="" src={graduationIcon} />
                                </div>
                                <p className="font-medium text-lg -mt-3.5">Education</p>
                            </div>

                            <p>I have an Associates Degree in IT and I am currently in my last year of a Bachelors Degree in Computer Science at Royal Melbourne Institute of Technology.</p>
                        </div>
                        <div className="grid-span-1 px-8 py-8 rounded-md hover:bg-gray-200 hover:shadow-md dark:hover:bg-zinc-900">
                            <div className="flex items-center gap-5">
                                <div className="bg-gray-900 p-2 w-12 h-12 flex justify-center items-center rounded-md mb-4">
                                    <img className="" src={chartIcon} />
                                </div>
                                <p className="font-medium text-lg -mt-3.5">Ambition</p>
                            </div>

                            <p>I consider myself a self taught programmer, I started learning LUA at the age of 12 and quickly moved to Java when I was 13. Later on, I branched off into other languages.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full flex justify-center dark:bg-zinc-900 dark:text-white">
                <div className="w-full xl:w-5/6 max-w-screen-2xl px-5 py-16">
                    <div>
                        <p className="font-semibold text-2xl">Endeavours</p>
                        <p className="">Throughout my programming journey, I've taken on a few endeavours.</p>
                    </div>

                    <LargeScaleComputing />

                    <WebDevelopment />
                </div>

            </section>
            <Footer />
        </>
    )
}

export default HomePage;