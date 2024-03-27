const LargeScaleComputing = () => {
    return (
        <div className="flex flex-col mt-20 px-5 md:px-0 rounded-md hover:outline outline-1 outline-offset-8 outline-indigo-500">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                <p className="font-semibold text-xl">Large-Scale Computing</p>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                <div className="grid-span-1 order-last md:order-first">
                    <p>
                        One of my ongoing passions is for large-scale, distributed computing systems.
                        This intrigue started when I wanted to create a dynamically scalable server network for minecraft.
                    </p>
                    <br />
                    <p>
                        I bought my own Server Rack and started learning the concept of containerisation, utilising Docker.
                        Later, I learnt Kubernetes and it's complex API.
                    </p>
                    <br />
                    <p>
                        In conjunction with container orchestration; I used Redis and MongoDB sharding to fully scale the network.
                        I still have a lot to learn, but I am confident with my skills and have applied it to many applications thus far.
                    </p>
                </div>
                <div className="grid-span-1 flex flex-col text-left md:text-right">
                    <p className="font-medium text-lg">Technologies Used</p>

                    <div>
                        <img src="" />
                        <p>Kubernetes</p>
                    </div>

                    <div>
                        <img src="" />
                        <p>Docker</p>
                    </div>

                    <div>
                        <img src="" />
                        <p>Redis</p>
                    </div>

                    <div>
                        <img src="" />
                        <p>MongoDB</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LargeScaleComputing;