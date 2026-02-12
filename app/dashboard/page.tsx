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
        <div className="flex flex-col h-screen">
            <div className="flex justify-between relative top-5 px-[30px]">
                <a className="w-30">
                    <Image
                        src={vector}
                        alt="Vector."
                    ></Image>
                </a>
                <a className="bg-white/7 w-14 h-14 rounded-2xl"></a>
            </div>

            <div className="flex grow min-h-0">
                <div className="flex flex-col gap-3 px-[30px] pt-[90px] h-full overflow-y-auto"> {/* navigation sidebar */}
                    <a
                        href="/dashboard/"
                        className="bg-[#753B95] w-14 h-14 shrink-0 rounded-2xl grid place-items-center pb-0.5">
                        <Image
                            className="w-8.5 h-9"
                            src={dashboard}
                            alt="Dashboard"
                        ></Image>
                    </a>
                    <a 
                        href="../work/"
                        className="bg-white/7 w-14 h-14 shrink-0 rounded-2xl grid place-items-center hover:bg-[#753B95]/60">
                        <Image
                            className="w-9 h-9"
                            src={work}
                            alt="Work"
                        ></Image>
                    </a>
                    <a 
                        href="../lift/"
                        className="bg-white/7 w-14 h-14 shrink-0 rounded-2xl grid place-items-center hover:bg-[#753B95]/60">
                        <Image
                            className="w-9 h-9"
                            src={lift}
                            alt="Lift"
                        ></Image>
                    </a>
                    <a 
                        href="../todo/"
                        className="bg-white/7 w-14 h-14 shrink-0 rounded-2xl grid place-items-center hover:bg-[#753B95]/60">
                        <Image
                            className="w-9 h-9"
                            src={todo}
                            alt="Todo"
                        ></Image>
                    </a>
                    <a 
                        href="../weight/"
                        className="bg-white/7 w-14 h-14 shrink-0 rounded-2xl grid place-items-center hover:bg-[#753B95]/60">
                        <Image
                            className="w-9 h-9"
                            src={weight}
                            alt="Weight"
                        ></Image>
                    </a>
                    <div className="flex flex-col mt-auto pb-10 gap-3 shrink-0">
                        <a
                            href="../setting/"
                            className="bg-white/7 w-14 h-14 shrink-0 rounded-2xl grid place-items-center pl-1 hover:bg-[#753B95]/60">
                            <Image
                                className="w-9 h-9"
                                src={setting}
                                alt="Setting"
                            ></Image>
                        </a>
                        <a className="bg-white/7 w-14 h-14 shrink-0 rounded-2xl grid place-items-center hover:bg-[#753B95]/60">
                            <Image
                                className="w-9 h-9"
                                src={logout}
                                alt="Logout"
                            ></Image>
                        </a>
                    </div>
                </div>
                <div className="flex-1"> {/* dashboard page, flex-1 means a new organization */}
                    <div className="flex mt-[90px] ml-[65px] gap-6 mr-[30px]">
                        <div className="bg-white/10 flex-1 h-[24vh] rounded-3xl">
                            <div className="mt-[12px] px-[17px]">
                                <div className="flex justify-between">
                                    <h1 className="">Work</h1>
                                    <div className="flex flex-row gap-1 items-center">
                                        <a className="text-xs bg-white text-black font-semibold px-[4px] py-[3px] rounded-lg outline-[0.5] outline-black">TDY</a>
                                        <a className="text-xs bg-white/5 font-semibold px-[6px] py-[3px] rounded-lg outline-[0.5] outline-black">WK</a>
                                        <a className="text-xs bg-white/5 font-semibold px-[7px] py-[3px] rounded-lg outline-[0.5] outline-black">MT</a>
                                        <a className="text-xs bg-white/5 font-semibold px-[7px] py-[3px] rounded-lg outline-[0.5] outline-black">YR</a>
                                    </div>
                                </div>
                                <h2 className="relative right-0.5 mt-[15px] text-6xl">23/40</h2>
                                <h3 className="">hours</h3>
                            </div>
                        </div>
                        <div className="bg-white/10 flex-1 h-[24vh] rounded-3xl">
                            <div className="mt-[12px] px-[17px]">
                                <div className="flex justify-between">
                                    <h1 className="">Lift</h1>
                                    <div className="flex flex-row gap-1 items-center">
                                        <a className="text-xs bg-white/5 font-semibold px-[4px] py-[3px] rounded-lg outline-[0.5] outline-black">TDY</a>
                                        <a className="text-xs bg-white text-black font-semibold px-[6px] py-[3px] rounded-lg outline-[0.5] outline-black">WK</a>
                                        <a className="text-xs bg-white/5 font-semibold px-[7px] py-[3px] rounded-lg outline-[0.5] outline-black">MT</a>
                                        <a className="text-xs bg-white/5 font-semibold px-[7px] py-[3px] rounded-lg outline-[0.5] outline-black">YR</a>
                                    </div>
                                </div>
                                <h2 className="relative right-0.5 mt-[15px] text-6xl">32/35</h2>
                                <h3 className="">sessions</h3>
                            </div>
                        </div>
                        <div className="bg-white/10 flex-1 h-[24vh] rounded-3xl">
                            <div className="mt-[12px] px-[17px]">
                                <div className="flex justify-between">
                                    <h1 className="">Habit</h1>
                                    <div className="flex flex-row gap-1 items-center">
                                        <a className="text-xs bg-white text-black font-semibold px-[4px] py-[3px] rounded-lg outline-[0.5] outline-black">TDY</a>
                                        <a className="text-xs bg-white/5 font-semibold px-[6px] py-[3px] rounded-lg outline-[0.5] outline-black">WK</a>
                                        <a className="text-xs bg-white/5 font-semibold px-[7px] py-[3px] rounded-lg outline-[0.5] outline-black">MT</a>
                                        <a className="text-xs bg-white/5 font-semibold px-[7px] py-[3px] rounded-lg outline-[0.5] outline-black">YR</a>
                                    </div>
                                </div>
                                <h2 className="relative right-0.5 mt-[15px] text-6xl">2</h2>
                                <h3 className="">complete</h3>
                            </div>
                        </div>
                        <div className="bg-white/10 flex-1 h-[24vh] rounded-3xl">
                            <div className="mt-[12px] px-[17px]">
                                <div className="flex justify-between">
                                    <h1 className="">Weight</h1>
                                    <div className="flex flex-row gap-1 items-center">
                                        <a className="text-xs bg-white text-black font-semibold px-[4px] py-[3px] rounded-lg outline-[0.5] outline-black">TDY</a>
                                        <a className="text-xs bg-white/5 font-semibold px-[6px] py-[3px] rounded-lg outline-[0.5] outline-black">WK</a>
                                        <a className="text-xs bg-white/5 font-semibold px-[7px] py-[3px] rounded-lg outline-[0.5] outline-black">MT</a>
                                        <a className="text-xs bg-white/5 font-semibold px-[7px] py-[3px] rounded-lg outline-[0.5] outline-black">YR</a>
                                    </div>
                                </div>
                                <h2 className="relative right-0.5 mt-[15px] text-6xl">-1.2</h2>
                                <h3 className="">pounds (lbs)</h3>
                            </div>
                        </div>
                    </div>

                    <div className="flex mt-[20px] ml-[65px] gap-6 mr-[30px]">
                        <div className="bg-white/10 flex-1 h-[55vh] rounded-3xl">
                            <div className="mt-[12px] px-[17px]">
                                <h1 className="">Progression Statistics</h1>
                                <h2 className="relative mt-[15px] text-6xl right-0.5">83%</h2>
                                <h3 className="w-30">of daily tasks completed</h3>
                            </div>
                        </div>
                        <div className="bg-white/10 flex-1 h-[55vh] rounded-3xl">
                            <div className="mt-[12px] px-[17px]">
                                <h1 className="">Notes</h1>
                        </div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}