import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import novaOverlay from "../assets/content/flight-school.jpg";

import cppLogo from "../assets/logo/c++.svg";
import monkeyCLogo from "../assets/logo/moneyc.png";



const RMITFlightProjectPage = () => {
    return (
        <>
            <Navbar />

            <section className="w-full flex justify-center dark:bg-zinc-900">
                <div className="w-full xl:w-5/6 max-w-screen-2xl flex justify-center md:justify-between items-center p-5 pb-0 gap-10">
                    <div className="py-32">
                        <p className="text-black dark:text-white text-5xl font-semibold">RMIT Flight School Training Software.</p>
                        <p className="text-indigo-500 text-xl font-medium mt-5">Project Lead, Software Engineer</p>
                    </div>
                </div>
            </section>

            <section className="w-full flex justify-center dark:bg-zinc-900">
                <div className="w-full xl:w-5/6 max-w-screen-2xl p-5 flex flex-col xl:flex-row justify-between">
                    <div className="w-full xl:w-1/2">
                        <p className="text-black dark:text-white font-medium text-xl">About the project</p>
                        <p className="text-black dark:text-white mt-2">
                            For my last year of my Computer Science degree at RMIT University, we were tasking with a semester (half year)
                            project.
                            Our task was to create a flight training software for RMIT's flight school which interfaces with Eight360's NOVA.
                            NOVA is an immersive motion emulation device which can spin in all 3 directions, simulating g-force on the user.
                        </p>
                        <p className="mt-2 text-black dark:text-white">
                            The training software not only interfaces with Eigh360 and the VR headset device, but also track's users' biometric data such
                            as heart rate, oxygen levels, reaction time and more
                            during flight situations which can later be analysed by instructors.
                        </p>
                    </div>
                    <div className="w-full xl:w-1/2 xl:flex justify-end">
                        <img className="w-full mt-5 xl:mt-0 xl:w-96 rounded-lg" src={novaOverlay} />
                    </div>
                </div>
            </section>

            <section className="w-full flex justify-center bg-gray-100 dark:bg-zinc-900">
                <div className="w-full xl:w-5/6 max-w-screen-2xl p-5 flex flex-col-reverse xl:flex-row justify-between">
                    <div className="w-full xl:px-10 xl:w-1/2 xl:flex justify-start">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/0bg4RfuT9gQ?si=TzfmUdl_MqW2mElz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className="w-full xl:w-1/2">
                        <p className="text-black dark:text-white font-medium text-xl">My role in the project</p>
                        <p className="text-black dark:text-white">
                            I took both the Project lead and Developer role throughout this project.
                            My primary focus as the lead developer was to orchestrate sprints, scrums and ensure my team were on task.
                        </p>
                        <p className="text-black dark:text-white">
                            Additionally, I created the plugin's core which included DLL library loading to allow for a modular plug'n'play
                            system.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full flex justify-center dark:bg-zinc-900">
                <div className="w-full xl:w-5/6 max-w-screen-2xl p-5 flex flex-col-reverse xl:flex-row justify-between">
                    <div className="w-full xl:w-1/2">
                        <p className="w-ful text-black dark:text-white font-medium text-xl">Technologies used</p>
                        <div>
                            <p className="text-indigo-900 dark:text-white font-medium text-lg">Languages</p>

                            <div className="w-full flex flex-col xl:flex-row justify-start mt-5 gap-2">
                                <div className="flex gap-3 rounded-lg bg-gray-100 dark:bg-zinc-800 p-2 justify-center align-middle">
                                    <img className="h-5 xl:h-5" src={cppLogo} />
                                    <p className="text-black dark:text-white font-medium">C++</p>
                                </div>
                                <div className="flex gap-3 rounded-lg bg-gray-100 dark:bg-zinc-800 p-2 justify-center align-middle">
                                    <img className="h-5 xl:h-5" src={monkeyCLogo} />
                                    <p className="text-black dark:text-white font-medium">MonkeyC</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default RMITFlightProjectPage;