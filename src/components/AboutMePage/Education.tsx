
import stPetersLogo from "../../assets/logo/stpeters-logo.png"
import rmitLogo from "../../assets/logo/rmit-emblem.svg"

const Education = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col mt-20 rounded-md gap-5">
                <div className="flex flex-row justify-start items-center gap-2">
                    <div className="w-12 flex justify-center">
                        <img className="h-10" src={stPetersLogo} />
                    </div>
                    <div>
                        <p className="font-semibold text-xl text-black dark:text-white">Certificate IV, Information Technology</p>
                        <p className="text-black dark:text-white">St Peters College 2019-2020</p>
                    </div>
                </div>
                <div className="flex flex-row justify-start items-center gap-2">
                    <div className="w-12 flex justify-center">
                        <img className="h-12" src={rmitLogo} />
                    </div>
                    <div>
                        <p className="font-semibold text-xl text-black dark:text-white">Associates Deg, Information Technology</p>
                        <p className="text-black dark:text-white">RMIT University 2021-2022</p>
                    </div>
                </div>
                <div className="flex flex-row justify-start items-center gap-2">
                    <div className="w-12 flex justify-center">
                        <img className="h-12" src={rmitLogo} />
                    </div>
                    <div>
                        <p className="font-semibold text-xl text-black dark:text-white">Bachelors Deg, Computer Science</p>
                        <p className="text-black dark:text-white">RMIT University 2023-2025</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;