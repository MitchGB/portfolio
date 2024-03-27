const WebDevelopment = () => {
    return (
        <div className="flex md:items-end flex-col mt-20 px-5 md:px-0 rounded-md hover:outline outline-1 outline-offset-8 outline-indigo-500">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                <p className="font-semibold text-xl">Web Development</p>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                <div className="grid-span-1 order-last text-left">
                    <p>
                        Admittedly, I started Web Development relatively late. In my freelancing journey, I found the majority of requests that I was declining were for websites.
                    </p>
                    <br />
                    <p>
                        So naturally, I started learning how to make them. My main library of choice is Preact.
                    </p>
                    <br />
                    <p>
                        The admin website made for my biggest client, <a href="https://cook4cald.org" className="text-indigo-500">Cook4Cald</a>,
                        is made with React & has a Spring backend. They love it.
                    </p>
                </div>
                <div className="grid-span-1 flex flex-col text-left md:text-left">
                    <p className="font-medium text-lg">Technologies Used</p>

                    <div>
                        <img src="" />
                        <p>Preact/React</p>
                    </div>

                    <div>
                        <img src="" />
                        <p>Spring</p>
                    </div>

                    <div>
                        <img src="" />
                        <p>Angular</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebDevelopment;