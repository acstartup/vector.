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

                <div className="flex flex-row gap-4 mt-[90px] ml-[65px]">
                    <div className="flex w-98 h-23 rounded-3xl hover:bg-white/7">
                        <div className="flex flex-row bg-white/7 ml-[15px] mt-[10.5px] rounded-2xl w-17.5 h-17.5">
                            <Image
                                className="flex mt-[11px] ml-[11px] w-12 h-12"
                                src={personal}
                                alt="personal"
                            ></Image>
                        </div>
                        <div className="flex flex-col">
                            <a
                                href="../account/"
                            >
                                <h1 className="mt-[13px] ml-[15px] w-40 text-md font-bold">Account</h1>
                                <h2 className=" ml-[15px] w-70 text-sm">View and manage your profile picture and display name.</h2>
                            </a>
                        </div>
                    </div>
                    <div className="flex w-98 h-23 rounded-3xl hover:bg-white/7">
                        <div className="flex flex-row bg-white/7 ml-[15px] mt-[10.5px] rounded-2xl w-17.5 h-17.5">
                            <Image
                                className="flex mt-[14px] ml-[13.25px] w-10.75 h-10.75"
                                src={security}
                                alt="personal"
                            ></Image>
                        </div>
                        <div className="flex flex-col">
                            <a
                                href="../security/"
                            >
                                <h1 className="mt-[13px] ml-[15px] w-40 text-md font-bold">Security</h1>
                                <h2 className=" ml-[15px] w-70 text-sm">Change and manage your account password to keep your account secure.</h2>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}