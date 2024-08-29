import Education from "../components/AboutMePage/Education";
import GamingHobby from "../components/AboutMePage/GamingHobby";
import HikingHobby from "../components/AboutMePage/HikingHobby";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { calculateAge } from "../util/DateUtil";


const AboutMePage = () => {
    const age = calculateAge(new Date(2002, 10, 22));
    return (
        <>
            <Navbar />

            <section className="w-full flex justify-center dark:bg-zinc-900">
                <div className="w-full xl:w-5/6 max-w-screen-2xl flex justify-center md:justify-between items-center p-5 gap-10">
                    <div className="py-32">
                        <p className="text-black dark:text-white text-5xl font-semibold">About Me.</p>
                        <p className="text-indigo-500 text-xl font-medium mt-5">Who is Mitch?</p>
                    </div>
                </div>
            </section>

            <section className="w-full flex justify-center dark:bg-zinc-900 text-black dark:text-white">
                <div className="w-full xl:w-5/6 max-w-screen-2xl px-5 my-16">
                    <div className="w-4/5">
                        <p className="font-semibold text-2xl text-black dark:text-white">Biography</p>
                        <p className="text-black dark:text-white">
                            Hi, I'm Mitch. I'm a {age} year old developer from <span className="font-medium">Melbourne, Australia</span>.
                            I've had a love for anything and everything tech related since I was very young.
                        </p>
                        <p className="text-black dark:text-white">
                            My journey began when I was 12, I wanted to make a game for roblox, I decided to pick up LUA and attempt to develop a game
                            from the ground up. It sucked. A few years later, I grew an obsession with Minecraft and particularly, it's multiplayer aspect.
                            I began developing plugins for the Spigot API in 2015, to this day I am still a very active member of the Spigot community.
                        </p>
                        <p className="text-black dark:text-white">
                            This love for the multiplayer aspect of the game enamoured me. I then branched into hosting my own game servers, which then exploded
                            into a fascination of large-scale networks and distributed systems.
                        </p>
                    </div>
                </div>

            </section>

            <section className="w-full flex justify-center bg-gray-100 dark:bg-zinc-800 dark:text-white">
                <div className="w-full xl:w-5/6 max-w-screen-2xl px-5 my-16">
                    <div>
                        <p className="font-semibold text-2xl">Hobbies</p>
                        <p className="text-black dark:text-white">Heres some things I love doing.</p>
                    </div>

                    <HikingHobby />

                    <GamingHobby />
                </div>

            </section>

            <section className="w-full flex justify-center dark:bg-zinc-900 text-black dark:text-white">
                <div className="w-full xl:w-5/6 max-w-screen-2xl px-5 my-16">
                    <div>
                        <p className="font-semibold text-2xl">Education</p>
                    </div>

                    <Education />
                </div>

            </section>
            <Footer />
        </>
    )
}

export default AboutMePage;