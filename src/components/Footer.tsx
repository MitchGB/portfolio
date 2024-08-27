const Footer = () => {
    return (
        <footer className="w-full flex justify-center bg-zinc-900">
            <div className="w-full xl:w-5/6 max-w-screen-2xl ">
                <div className="py-8 text-gray-400 text-sm px-5 ">
                    <p>UIcons by <a href="https://www.flaticon.com/uicons" target="_" className="text-indigo-500">Flaticon</a></p>
                    <p>
                        Site made using Preact (TS), Tailwind, Vite
                        <a className="text-indigo-500" target="_" href="https://github.com/MitchGB/portfolio"> {">"} Source</a>
                    </p>
                </div>
                <div className="flex justify-between items-center py-16 px-5 border-t border-gray-700">

                    <a href="/" className="group font-bold text-xl text-white hover:text-indigo-500">
                        mitchg
                        <span className="text-indigo-500 group-hover:text-white">.</span>
                        dev
                    </a>

                    <p className="text-white">2024, Mitchell Gertrude</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;