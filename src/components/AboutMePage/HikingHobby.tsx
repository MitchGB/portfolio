import HobbyCarousel from "./HobbyCarousel";

const HikingHobby = () => {
    return (
        <div className="flex flex-col xl:flex-row">
            <div className="xl:w-1/2 flex flex-col mt-20 px-0 rounded-md">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                    <p className="font-semibold text-xl text-black dark:text-white">Hiking & Camping</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                    <div className="grid-span-1 order-last md:order-first text-black dark:text-white">
                        I am a massive fan of the outdoors- and luckily I live in one of the most beautiful countries for
                        outdoor activities.
                        I love to fish, snorkel and camp in the most rural of areas.
                    </div>
                </div>
            </div>

            <div className="mt-10 xl:w-1/2">
                <HobbyCarousel />
            </div>
        </div>
    )
}

export default HikingHobby;