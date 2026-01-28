import Image from "next/image";
import vector from "../../public/vector-full.png"
import dashboard from "../../public/vector-dashboard.png"
import work from "../../public/vector-work.png"
import lift from "../../public/vector-lift.png"
import todo from "../../public/vector-todo.png"
import weight from "../../public/vector-weight.png"
import setting from "../../public/vector-setting.png"
import logout from "../../public/vector-logout.png"

export default function Home() {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between relative top-5 px-[30px]">
                <a className="w-30">
                    <Image
                        src={vector}
                        alt="Vector."
                    ></Image>
                </a>
                <a className="bg-white/7 w-14 h-14 rounded-2xl"></a>
            </div>

            <div className="flex">
                <div className="flex flex-col gap-3 px-[30px] pt-[90px]"> {/* navigation sidebar */}
                    <a
                        href="/dashboard/"
                        className="bg-[#753B95] w-14 h-14 rounded-2xl grid place-items-center pb-0.5">
                        <Image
                            className="w-8.5 h-9"
                            src={dashboard}
                            alt="Dashboard"
                        ></Image>
                    </a>
                    <a 
                        href="../work/"
                        className="bg-white/7 w-14 h-14 rounded-2xl grid place-items-center hover:bg-[#753B95]/60">
                        <Image
                            className="w-9 h-9"
                            src={work}
                            alt="Work"
                        ></Image>
                    </a>
                    <a 
                        href="../lift/"
                        className="bg-white/7 w-14 h-14 rounded-2xl grid place-items-center hover:bg-[#753B95]/60">
                        <Image
                            className="w-9 h-9"
                            src={lift}
                            alt="Lift"
                        ></Image>
                    </a>
                    <a 
                        href="../todo/"
                        className="bg-white/7 w-14 h-14 rounded-2xl grid place-items-center hover:bg-[#753B95]/60">
                        <Image
                            className="w-9 h-9"
                            src={todo}
                            alt="Todo"
                        ></Image>
                    </a>
                    <a 
                        href="../weight/"
                        className="bg-white/7 w-14 h-14 rounded-2xl grid place-items-center hover:bg-[#753B95]/60">
                        <Image
                            className="w-9 h-9"
                            src={weight}
                            alt="Weight"
                        ></Image>
                    </a>
                    <div className="flex flex-col pt-47 gap-3">
                        <a 
                            href="../setting/"
                            className="bg-white/7 w-14 h-14 rounded-2xl grid place-items-center pl-1 hover:bg-[#753B95]/60">
                            <Image
                                className="w-9 h-9"
                                src={setting}
                                alt="Setting"
                            ></Image>
                        </a>
                        <a className="bg-white/7 w-14 h-14 rounded-2xl grid place-items-center hover:bg-[#753B95]/60">
                            <Image
                                className="w-9 h-9"
                                src={logout}
                                alt="Logout"
                            ></Image>
                        </a>
                    </div>
                </div>
                <div className="flex-1"> {/* dashboard page, flex-1 means a new organization */}
                    <div className="flex mt-[90px] ml-[65px] gap-6">
                        <div className="bg-white/10 w-70 h-45 rounded-4xl"></div>
                        <div className="bg-white/10 w-70 h-45 rounded-4xl"></div>
                        <div className="bg-white/10 w-70 h-45 rounded-4xl"></div>
                        <div className="bg-white/10 w-70 h-45 rounded-4xl"></div>
                    </div>

                    <div className="flex mt-[20px] ml-[65px] gap-6">
                        <div className="bg-white/10 w-146 h-105 rounded-4xl"></div>
                        <div className="bg-white/10 w-146 h-105 rounded-4xl"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}