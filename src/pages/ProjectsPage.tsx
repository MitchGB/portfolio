import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import cook4caldOverlay from "../assets/content/cook4cald-overlay.png";
import novaOverlay from "../assets/content/flight-school.jpg";

import bastionmc from "../assets/logo/bastionmc.png";


const ProjectsPage = () => {
    return (
        <>
            <Navbar />

            <section className="w-full flex justify-center dark:bg-zinc-900">
                <div className="w-full xl:w-5/6 max-w-screen-2xl flex justify-center md:justify-between items-center p-5 pb-0 gap-10">
                    <div className="py-32">
                        <p className="text-black dark:text-white text-5xl font-semibold">My Projects.</p>
                    </div>
                </div>
            </section>

            <section className="w-full flex justify-center bg-gray-100 dark:bg-zinc-800">
                <div className="w-full xl:w-5/6 max-w-screen-2xl flex justify-center md:justify-between items-center p-5 gap-10">
                    <p className="text-black dark:text-white text-xl xl:text-3xl font-medium">Major Projects</p>
                </div>

            </section>

            <section className="w-full flex justify-center bg-gray-100 dark:bg-zinc-800">
                <div className="w-full xl:w-5/6 max-w-screen-2xl flex justify-center md:justify-between items-center p-5 gap-10">
                    <div className="flex-col xl:flex-row flex w-full p-2 bg-zinc-100 dark:bg-zinc-800">
                        <div className="w-full xl:w-3/12">
                            <img className="w-52 xl:w-96 rounded-lg" src={cook4caldOverlay} />
                        </div>
                        <div className="w-full xl:w-7/12 xl:ml-4">
                            <p className="text-black dark:text-white text-xl xl:text-3xl font-medium mb-2">COOK4CALD</p>
                            <p className="text-black dark:text-white text-sm xl:text-lg">Solely developed the administrative website & underlying infrastructure for COOK4CALD.</p>
                        </div>
                        <div className="w-2/12 flex flex-col justify-end">
                            <a href="/projects/c4c" className="mt-2 xl:mt-0 w-40 font-medium px-4 py-1.5 text-center rounded-md bg-indigo-500 text-white hover:bg-indigo-400">
                                Check it out
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full flex justify-center bg-gray-100 dark:bg-zinc-800">
                <div className="w-full xl:w-5/6 max-w-screen-2xl flex justify-center md:justify-between items-center p-5 gap-10">
                    <div className="flex-col xl:flex-row flex w-full p-2 bg-zinc-100 dark:bg-zinc-800">
                        <div className="w-full xl:w-3/12">
                            <img className="w-52 xl:w-96 rounded-lg" src={novaOverlay} />
                        </div>
                        <div className="w-full xl:w-7/12 xl:ml-4">
                            <p className="text-black dark:text-white text-xl xl:text-3xl font-medium mb-2">RMIT Flight School Training Software</p>
                            <p className="text-black dark:text-white text-sm xl:text-lg">
                                Worked collaboratively with team members to create a VR, full motion flight simulation trainer
                                for RMIT's Flight school. Utilising Eight360's NOVA.
                            </p>
                        </div>
                        <div className="w-2/12 flex flex-col justify-end">
                            <a href="/projects/flight-sim" className="mt-2 xl:mt-0 w-40 font-medium px-4 py-1.5 text-center rounded-md bg-indigo-500 text-white hover:bg-indigo-400">
                                Check it out
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="h-32 dark:bg-zinc-900" />

            <section className="w-full flex justify-center bg-gray-100 dark:bg-zinc-800">
                <div className="w-full xl:w-5/6 max-w-screen-2xl flex justify-center md:justify-between items-center p-5 gap-10">
                    <p className="text-black dark:text-white text-xl xl:text-3xl font-medium mb-2">Minor Projects</p>
                </div>
            </section>
            <section className="w-full flex justify-center bg-gray-100 dark:bg-zinc-800">
                <div className="w-full xl:w-5/6 max-w-screen-2xl grid grid-cols-1 md:grid-cols-2 gap-10 p-5">
                    <div className="p-2 bg-zinc-100 dark:bg-zinc-800">
                        <div className="flex flex-col xl:flex-row">
                            <div className="w-full xl:w-3/12 flex justify-center">
                                <img className="h-20 xl:h-42 rounded-lg" src={bastionmc} />
                            </div>
                            <div className="w-full xl:w-7/12 xl:ml-4">
                                <p className="text-black dark:text-white text-xl xl:text-3xl font-medium mb-2">BastionMC Plugin Developer</p>
                                <p className="text-black dark:text-white text-sm xl:text-lg">
                                    Plugin developer at (defunct) Minecraft server BastionMC. Average concurrent player count of 100-130.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default ProjectsPage;