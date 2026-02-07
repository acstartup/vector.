import Image from "next/image";
import vector from "../../public/vector-full.png"
import dashboard from "../../public/vector-dashboard.png"
import work from "../../public/vector-work.png"
import lift from "../../public/vector-lift.png"
import todo from "../../public/vector-todo.png"
import weight from "../../public/vector-weight.png"
import setting from "../../public/vector-setting.png"
import logout from "../../public/vector-logout.png"
import add from "../../public/vector-add.png"

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
                <a className="bg-white/7 w-14 h-14 rounded-2xl">
                </a>
            </div>

            <div className="flex">
                <div className="flex flex-col gap-3 px-[30px] pt-[90px]">
                    <a
                        href="../dashboard/"
                        className="bg-white/7 w-14 h-14 rounded-2xl grid place-items-center pb-0.5 hover:bg-[#753B95]/60">
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
                        href="/todo/" 
                        className="bg-[#753B95] w-14 h-14 rounded-2xl grid place-items-center">
                        <Image
                            className="w-9 h-9"
                            src={todo}
                            alt="todo"
                        ></Image>
                    </a>
                    <a 
                        href="../weight/"
                        className="bg-white/7 w-14 h-14 rounded-2xl grid place-items-center hover:bg-[#753B95]/60">
                        <Image
                            className="w-9 h-9"
                            src={weight}
                            alt="weight"
                        ></Image>
                    </a>
                    <div className="flex flex-col pt-47 gap-3">
                        <a 
                            href="../setting/"
                            className="bg-white/7 w-14 h-14 rounded-2xl grid place-items-center pl-1 hover:bg-[#753B95]/60">
                            <Image
                                className="w-9 h-9"
                                src={setting}
                                alt="setting"
                            ></Image>
                        </a>
                        <a className="bg-white/7 w-14 h-14 rounded-2xl grid place-items-center hover:bg-[#753B95]/60">
                            <Image
                                className="w-9 h-9"
                                src={logout}
                                alt="logout"
                            ></Image>
                        </a>
                    </div>
                </div>

                <div className="flex flex-row gap-6 mt-[90px] ml-[65px] mr-[30px] flex-1">
                    <div className="bg-white/10 flex-[2] h-[80vh] rounded-3xl">
                        <div className="mt-[12px] px-[19px]">
                            <div className="flex justify-between">
                                <h1 className="">Habits Overview</h1>
                                <div className="flex flex-row gap-1.5 items-center">
                                    <a className="text-xs bg-white text-black font-semibold px-[4px] py-[3px] rounded-lg outline-[0.5] outline-black">TODAY</a>
                                    <a className="text-xs bg-white/5 font-semibold px-[7px] py-[3px] rounded-lg outline-[0.5] outline-black">WEEK</a>
                                    <a className="text-xs bg-white/5 font-semibold px-[7px] py-[3px] rounded-lg outline-[0.5] outline-black">MONTH</a>
                                    <a className="text-xs bg-white/5 font-semibold px-[7px] py-[3px] rounded-lg outline-[0.5] outline-black">YEAR</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 flex-1">
                        <div className="bg-white/10 w-10 h-10 px-[5px] py-[3.5px] rounded-2xl">
                            <Image
                                className="w-8 h-8"
                                src={add}
                                alt="Add"
                            ></Image>
                        </div>
                        <div className="flex flex-row gap-3">
                            <div className="bg-white/70 flex-1 h-[21vh] rounded-3xl">
                                <div className="px-[16px] py-[12px]">
                                    <div className="flex flex-row gap-3 pb-2">
                                        <div className="bg-white/10 w-7 h-7 rounded-xl"></div>
                                        <h1 className="text-xl">Sunlight</h1>
                                    </div>
                                    <h2 className="text-6xl pb-2">1/1</h2>
                                    <h3 className="w-50 text-xs">Get atleast 10 minutes of sunlight daily</h3>
                                </div>
                            </div>
                            <div className="bg-white/10 flex-1 h-[21vh] rounded-3xl">
                                <div className="px-[16px] py-[12px]">
                                    <div className="flex flex-row gap-3 pb-2">
                                        <div className="bg-white/10 w-7 h-7 rounded-xl"></div>
                                        <h1 className="text-xl">Drink 1L Water</h1>
                                    </div>
                                    <h2 className="text-6xl pb-2">0/1</h2>
                                    <h3 className="w-50 text-xs">Drink at least 1 Liter of water daily</h3>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-3">
                            <div className="bg-white/10 flex-1 h-[21vh] rounded-3xl">
                                <div className="px-[16px] py-[12px]">
                                    <div className="flex flex-row gap-3 pb-2">
                                        <div className="bg-white/10 w-7 h-7 rounded-xl"></div>
                                        <h1 className="text-xl">Hit the gym</h1>
                                    </div>
                                    <h2 className="text-6xl pb-2">0/1</h2>
                                    <h3 className="w-50 text-xs">Go to the gym and get a good workout daily</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}