import Image from "next/image";
import vector from "../../public/vector-full.png"
import dashboard from "../../public/vector-dashboard.png"
import work from "../../public/vector-work.png"
import lift from "../../public/vector-lift.png"
import todo from "../../public/vector-todo.png"
import weight from "../../public/vector-weight.png"
import setting from "../../public/vector-setting.png"
import logout from "../../public/vector-logout.png"
import personal from "../../public/vector-personal-setting.png"
import security from "../../public/vector-privacy-setting.png"

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
                <a className="bg-white/7 w-14 h-14 rounded-2xl">
                </a>
            </div>

            <div className="flex grow min-h-0">
                <div className="flex flex-col gap-3 px-[30px] pt-[90px] h-full overflow-y-auto">
                    <a
                        href="../dashboard/"
                        className="bg-white/7 w-14 h-14 shrink-0 rounded-2xl grid place-items-center pb-0.5 hover:bg-[#753B95]/60">
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
                            alt="todo"
                        ></Image>
                    </a>
                    <a 
                        href="../weight/"
                        className="bg-white/7 w-14 h-14 shrink-0 rounded-2xl grid place-items-center hover:bg-[#753B95]/60">
                        <Image
                            className="w-9 h-9"
                            src={weight}
                            alt="weight"
                        ></Image>
                    </a>
                    <div className="flex flex-col mt-auto pb-10 gap-3 shrink-0">
                        <a 
                            href="/setting/"
                            className="bg-[#753B95] w-14 h-14 shrink-0 rounded-2xl grid place-items-center pl-1">
                            <Image
                                className="w-9 h-9"
                                src={setting}
                                alt="setting"
                            ></Image>
                        </a>
                        <a className="bg-white/7 w-14 h-14 shrink-0 rounded-2xl grid place-items-center hover:bg-[#753B95]/60">
                            <Image
                                className="w-9 h-9"
                                src={logout}
                                alt="logout"
                            ></Image>
                        </a>
                    </div>
                </div>
                <div className="py-22 px-40"> {/* bread crumb */}
                    <a href="../setting/" className="text-lg font-semibold">Setting &gt;</a>
                    <h1 className="text-4xl">Account</h1>
                </div>
            </div>
        </div>
    )
}