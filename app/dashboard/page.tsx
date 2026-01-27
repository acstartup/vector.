import Image from "next/image";
import vector from "../../public/vector-full.png"
import dashboard from "../../public/vector-dashboard.png"
import work from "../../public/vector-work.png"
import lift from "../../public/vector-lift.png"
import todo from "../../public/vector-todo.png"

export default function Home() {
    return (
        <div className="px-[30px]">
            <div className="flex justify-between relative top-5">
                <a className="w-30">
                    <Image
                        src={vector}
                        alt="Vector."
                    ></Image>
                </a>
                <a className="bg-gray-100/30 w-14 h-14 rounded-2xl">
                </a>
            </div>

            <div className="flex flex-col gap-3 pt-[90px]">
                <a
                    className="bg-[#753B95] w-14 h-14 rounded-2xl grid place-items-center pb-0.5 hover:opacity-80">
                    <Image
                        className="w-8.5 h-9"
                        src={dashboard}
                        alt="Dashboard"
                    ></Image>
                </a>
                <a 
                    className="bg-white/7 w-14 h-14 rounded-2xl grid place-items-center hover:bg-[#753B95]/60">
                    <Image
                        className="w-9 h-9"
                        src={work}
                        alt="Work"
                    ></Image>
                </a>
                <a 
                    className="bg-white/7 w-14 h-14 rounded-2xl grid place-items-center hover:bg-[#753B95]/60">
                    <Image
                        className="w-9 h-9"
                        src={lift}
                        alt="Lift"
                    ></Image>
                </a>
                <a 
                    className="bg-white/7 w-14 h-14 rounded-2xl grid place-items-center hover:bg-[#753B95]/60">
                    <Image
                        className="w-9 h-9"
                        src={todo}
                        alt="todo"
                    ></Image>
                </a>
                <a className="bg-gray-100/30 w-14 h-14 rounded-2xl"></a>
                <div className="flex flex-col pt-47 gap-3">
                    <a className="bg-gray-100/30 w-14 h-14 rounded-2xl"></a>
                    <a className="bg-gray-100/30 w-14 h-14 rounded-2xl"></a>
                </div>
            </div>
        </div>
    )
}