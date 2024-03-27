import { useRef, useState } from "preact/hooks";
import { useTypewriter } from "../util/TypewriterUtil";

const timeStamp = (): string => {
    var date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `[${hours}:${minutes}:${seconds} INFO]:`;
}

const stamp = timeStamp();

const ConsoleDisplay = () => {
    const consoleRef = useRef<string>() as any;

    var line1 = useTypewriter("java");
    var line2 = useTypewriter(" -jar mitchg.jar", 50, 200);

    var line3 = useTypewriter("Loading libraries, please wait...", 0, 1400);

    var line4 = useTypewriter(`${stamp}`, 0, 2000);
    var line5 = useTypewriter("Enabling Professional Coding", 0, 2000);

    var line6 = useTypewriter(`${stamp}`, 0, 2400);
    var line7 = useTypewriter("Enabling Cool Guy 😎", 0, 2400);

    var line8 = useTypewriter(`${stamp}`, 0, 2700);
    var line9 = useTypewriter("Verifying Language Support...", 0, 2700);

    var line10 = useTypewriter(`${stamp}`, 0, 3000);
    var line11 = useTypewriter("Found Lanauges: [Java, C#, TS, C++, Python, and more...]", 0, 3000);

    var line12 = useTypewriter("To see projects enter command 'projects'", 0, 3300);

    var [extraLines, setExtraLines] = useState<string[]>([]);

    const onSubmit = (event: any) => {
        event.preventDefault();

        if (String(consoleRef.current.value).toLowerCase() === "projects") {
            window.location.href = "/projects";
        } else {
            var lines = [...extraLines];
            lines.push(`Could not find command '${consoleRef.current.value}'`);
            setExtraLines(lines);
            consoleRef.current.value = "";
        }
    }

    return (
        <div className="rounded-md w-[500px] h-72 bg-gray-800 overflow-hidden relative">
            <div className="bg-gray-900 w-full h-8 p-2 flex items-center gap-1.5">
                <div className="rounded-full bg-red-500 hover:bg-red-600 cursor-pointer h-3 w-3" />
                <div className="rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer h-3 w-3" />
                <div className="rounded-full bg-green-500 hover:bg-green-600 cursor-pointer h-3 w-3" />
            </div>

            <div className="p-3 text-sm">
                <p className="text-white">
                    <span className="text-green-300">$ </span>
                    <span className="text-blue-300">{line1}</span>
                    {line2}
                </p>

                <p className="text-gray-300">
                    {line3}
                </p>

                <p className="text-white">
                    <span class="text-yellow-500">{line4} </span>
                    {line5}
                </p>

                <p className="text-white">
                    <span class="text-yellow-500">{line6} </span>
                    {line7}
                </p>

                <p className="text-white">
                    <span class="text-yellow-500">{line8} </span>
                    {line9}
                </p>

                <p className="text-white">
                    <span class="text-yellow-500">{line10} </span>
                    {line11}
                </p>

                <p className="text-green-300">
                    {line12}
                </p>

                {
                    extraLines.map((line, index) => <p key={index} className="text-white">{line}</p>)
                }
            </div>

            <div className="absolute bottom-0 w-full bg-gray-800">
                <form onSubmit={onSubmit} className="flex items-center">
                    <p className="text-white pl-3">{">"}</p>
                    <input ref={consoleRef} className="w-full bg-transparent text-white pl-1 text-sm outline-none"></input>
                </form>
            </div>
        </div>
    )
}

export default ConsoleDisplay;