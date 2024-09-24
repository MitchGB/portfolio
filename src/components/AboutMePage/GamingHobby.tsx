const GamingHobby = () => {
    return (
        <div className="flex justify-end">
            <div className="w-1/2 flex flex-col mt-20 px-0 rounded-md">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <p className="font-semibold text-xl text-black dark:text-white">Gaming</p>
                </div>

                <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                    <div className="grid-span-1 order-last md:order-first text-black dark:text-white">
                        As with most other nerds, I love to play video games. Mostly the grindly ones, like Path of Exile.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GamingHobby;