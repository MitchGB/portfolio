import { Link, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";
import { RouteError } from "../util/RouteError";

const ErrorPage = () => {
    const error = useRouteError() as RouteError;

    return (
        <div className="h-screen dark:bg-zinc-900">
            <Navbar />


            <section className="w-full flex justify-center dark:bg-zinc-900">
                <div className="w-full xl:w-2/6 max-w-screen-2xl text-center p-5 mt-20">
                    <p className="text-9xl font-medium text-black dark:text-white">Oops!</p>
                    <p className="text-4xl mt-5 text-black dark:text-white">{error.statusText}</p>

                    <div className="mt-5 flex justify-center">
                        <Link to="/">
                            <p className="rounded-md bg-indigo-500 text-white px-6 py-4 hover:bg-indigo-400">Go to Home Page</p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default ErrorPage;