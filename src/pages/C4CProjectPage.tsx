import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import cook4caldOverlay from "../assets/content/cook4cald-overlay.png";
import cook4caldDemo1 from "../assets/content/cook4cald-admin-img1.png";

import phpLogo from "../assets/logo/php.svg";
import javaLogo from "../assets/logo/java.svg";
import typescriptLogo from "../assets/logo/typescript.svg";
import reactLogo from "../assets/logo/react.svg";
import springLogo from "../assets/logo/spring.svg";
import preactLogo from "../assets/logo/preact.svg";
import googleGLogo from "../assets/logo/google.svg";
import dockerLogo from "../assets/logo/docker.svg";
import tomtomLogo from "../assets/logo/tomtom.svg";
import messagebirdLogo from "../assets/logo/messagebird.svg";


const C4CProjectPage = () => {
    return (
        <>
            <Navbar />

            <section className="w-full flex justify-center dark:bg-zinc-900">
                <div className="w-full xl:w-5/6 max-w-screen-2xl flex justify-center md:justify-between items-center p-5 pb-0 gap-10">
                    <div className="py-32">
                        <p className="text-black dark:text-white text-5xl font-semibold">COOK4CALD.</p>
                        <p className="text-indigo-500 text-xl font-medium mt-5">Software Engineer</p>
                    </div>
                </div>
            </section>

            <section className="w-full flex justify-center dark:bg-zinc-900">
                <div className="w-full xl:w-5/6 max-w-screen-2xl p-5 flex flex-col xl:flex-row justify-between">
                    <div className="w-full xl:w-1/2">
                        <p className="text-black dark:text-white font-medium text-xl">About the project</p>
                        <p className="text-black dark:text-white mt-2">COOK4CALD is a non-profit Australian organisation which provides free meals to the CALD community (Culturally and language diverse)</p>
                        <p className="text-black dark:text-white mt-2">
                            The project is one of my largest projects being used in a real-world application, with over 20 volunteers and more than 50 end-users.
                        </p>
                    </div>
                    <div className="w-full xl:w-1/2 xl:flex justify-end">
                        <img className="w-full mt-5 xl:mt-0 xl:w-96 rounded-lg" src={cook4caldOverlay} />
                    </div>
                </div>
            </section>

            <section className="w-full flex justify-center bg-gray-100 dark:bg-zinc-900">
                <div className="w-full xl:w-5/6 max-w-screen-2xl p-5 flex flex-col-reverse xl:flex-row justify-between">
                    <div className="w-full xl:w-1/2 xl:flex justify-start">
                        <img className="w-full mt-5 xl:mt-0 xl:w-96 rounded-lg" src={cook4caldDemo1} />
                    </div>
                    <div className="w-full xl:w-1/2">
                        <p className="text-black dark:text-white font-medium text-xl">My role in the project</p>
                        <p className="text-black dark:text-white">
                            I developed the administrative website for COOK4CALD which includes an ordering and delivery consignment system
                            for drivers and organisers.
                        </p>
                        <p className="text-black dark:text-white mt-2">
                            This includes the frontend and backend systems.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full flex justify-center dark:bg-zinc-900">
                <div className="w-full xl:w-5/6 max-w-screen-2xl p-5 flex flex-col-reverse xl:flex-row justify-between">
                    <div className="w-full xl:w-1/2">
                        <p className="text-black dark:text-white font-medium text-xl">Technologies used</p>
                        <div>
                            <p className="text-indigo-900 dark:text-white font-medium text-lg">Languages</p>

                            <div className="w-full flex flex-col xl:flex-row justify-start mt-5 gap-2">
                                <div className="flex gap-3 rounded-lg bg-gray-100 p-2 justify-center align-middle">
                                    <img className="h-5 xl:h-5" src={phpLogo} />
                                    <p className="font-medium">PHP</p>
                                </div>
                                <div className="flex gap-3 rounded-lg bg-gray-100 p-2 justify-center align-middle">
                                    <img className="h-5 xl:h-5" src={javaLogo} />
                                    <p className="font-medium">Java</p>
                                </div>
                                <div className="flex gap-3 rounded-lg bg-gray-100 p-2 justify-center align-middle">
                                    <img className="h-5 xl:h-5" src={typescriptLogo} />
                                    <p className="font-medium">TypeScript</p>
                                </div>
                                <div className="flex gap-3 rounded-lg bg-gray-100 p-2 justify-center align-middle">
                                    <p className="font-medium">SQL</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <p className="text-indigo-900 dark:text-white font-medium text-lg">Iterations</p>
                            <p className="text-black dark:text-white">
                                The current site is the third iteration of the administration system.
                            </p>

                            <div className="w-full flex flex-col xl:flex-row justify-between mt-5 gap-2">
                                <div className="rounded-lg bg-gray-100 p-5">
                                    <p className="text-indigo-500 font-medium text-md">Iteration 1</p>
                                    <p className="flex text-black font-medium gap-2">
                                        <img className="h-5 xl:h-5 rounded-lg" src={phpLogo} />
                                        PHP Full stack
                                    </p>
                                </div>

                                <div className="rounded-lg bg-gray-100 p-5">
                                    <p className="text-indigo-500 font-medium text-md">Iteration 2</p>
                                    <p className="flex justify-start text-black font-medium gap-2">
                                        <img className="h-5 xl:h-5 rounded-lg" src={reactLogo} />
                                        React Frontend
                                    </p>
                                    <p className="flex text-black font-medium gap-2">
                                        <img className="h-5 xl:h-5 rounded-lg" src={springLogo} />
                                        Spring Backend
                                    </p>
                                </div>

                                <div className="rounded-lg bg-gray-100 p-5">
                                    <p className="text-indigo-500 font-medium text-md">Iteration 3 (Current)</p>
                                    <p className="flex justify-start text-black font-medium gap-2">
                                        <img className="h-5 xl:h-5 rounded-lg" src={preactLogo} />
                                        Preact Frontend
                                    </p>
                                    <p className="flex justify-start text-black font-medium gap-2">
                                        <img className="h-5 xl:h-5 rounded-lg" src={springLogo} />
                                        Spring Backend
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5">
                                <p>
                                    As you can see, this site underwent a few major iterations.
                                    To put it simply, each iteration was a major learning experience for me which then further introduced me
                                    to more, and better technologies.
                                </p>
                                <p className="mt-2">
                                    Additionally, the site utilises APIs from both
                                    <span className="font-medium px-1 bg-gray-100 rounded-md mx-1">
                                        <img className="inline h-4 xl:h-4 -mt-0.5 mr-1" src={messagebirdLogo} />
                                        MessageBird
                                    </span>
                                    and
                                    <span className="font-medium px-1 bg-gray-100 rounded-md mx-1">
                                        <img className="inline h-4 xl:h-4 -mt-0.5 mr-1" src={tomtomLogo} />
                                        TomTom
                                    </span>.
                                </p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <p className="text-indigo-900 dark:text-white font-medium text-lg">Deployment</p>

                            <p className="">
                                <span className="text-indigo-500">Iteration 1 </span>
                                was initially hosted with HostGator, it was enough for a PHP solution- but proved to be not enough.
                            </p>

                            <p className="mt-5">
                                <span className="text-indigo-500">Iteration 2 & 3 </span>
                                utilised
                                <span className="font-medium px-1 bg-gray-100 rounded-md mx-1">
                                    <img className="inline h-4 xl:h-4 -mt-0.5 mr-1" src={googleGLogo} />
                                    Google Cloud
                                </span>
                                for frontend, backend and SQL
                                deployment with
                                <span className="font-medium px-1 bg-gray-100 rounded-md mx-1">
                                    <img className="inline h-4 xl:h-4 -mt-0.5 mr-1" src={dockerLogo} />
                                    Docker
                                </span>
                                containers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full flex justify-center bg-gray-100 dark:bg-zinc-900 py-10">
                <div className="w-full xl:w-5/6 max-w-screen-2xl p-5 flex flex-col-reverse xl:flex-row justify-between">
                    <div className="w-full xl:w-1/2">
                        <p className="text-black dark:text-white">
                            Quick aside- if you like this project please consider donating :)
                        </p>
                        <a className="text-indigo-500" target="_" href="https://www.cook4cald.org">Cook4Cald Webstie</a>
                        <p className="text-xs">(I didnt make the landing website)</p>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    )
}

export default C4CProjectPage;