"use client";

import { useState } from "react";
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
import minus from "../../public/vector-minus.png"
import notes from "../../public/vector-notes.png"
import clock from "../../public/vector-clock.png"
import calendar from "../../public/vector-notes.png"
import album from "../../public/vector-album.png"

export default function Home() {
    const [addDropdownOpen, setAddDropdownOpen] = useState(false);
    const [timeFilter, setTimeFilter] = useState("");
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

    const [mon, setMon] = useState(false);
    const [tue, setTue] = useState(false);
    const [wed, setWed] = useState(false);
    const [thu, setThu] = useState(false);
    const [fri, setFri] = useState(false);
    const [sat, setSat] = useState(false);
    const [sun, setSun] = useState(false);

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
                    <div className="bg-white/10 flex-[1.25] h-[80vh] rounded-3xl">
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
                        <div className="relative">
                            <button
                                onClick={() => setAddDropdownOpen(!addDropdownOpen)} 
                                className={`bg-white/10 w-10 h-10 px-[5px] py-[3.5px] rounded-2xl hover:bg-white/30 mb-3 ${addDropdownOpen ? "bg-white/30" : "bg-white/10"}`}>
                                <Image
                                    className="w-8 h-8"
                                    src={addDropdownOpen ? minus : add}
                                    alt="Add"
                                ></Image>
                            </button>

                            {addDropdownOpen && 
                                <div className="absolute bg-black/10 bg-white/20 backdrop-blue-lg rounded-3xl py-2.25 px-1.25 w-93">
                                    <div className="flex justify-between pb-1.5 pl-2">
                                        <h1 className="text-sm">Active on:</h1>
                                    </div>
                                    <div className="flex justify-between px-2 pb-2.5">
                                            <button onClick={() => setMon(!mon)} className={`px-2 py-0.25 border-[1] border-white rounded-xl text-sm ${mon ? "bg-white text-black font-semibold" : "bg-white/10 hover:bg-white/30"}`}>Mon</button>
                                            <button onClick={() => setTue(!tue)} className={`px-2 py-0.25 border-[1] border-white rounded-xl text-sm ${tue ? "bg-white text-black font-semibold" : "bg-white/10 hover:bg-white/30"}`}>Tue</button>
                                            <button onClick={() => setWed(!wed)} className={`px-2 py-0.25 border-[1] border-white rounded-xl text-sm ${wed ? "bg-white text-black font-semibold" : "bg-white/10 hover:bg-white/30"}`}>Wed</button>
                                            <button onClick={() => setThu(!thu)} className={`px-2 py-0.25 border-[1] border-white rounded-xl text-sm ${thu ? "bg-white text-black font-semibold" : "bg-white/10 hover:bg-white/30"}`}>Thu</button>
                                            <button onClick={() => setFri(!fri)} className={`px-2 py-0.25 border-[1] border-white rounded-xl text-sm ${fri ? "bg-white text-black font-semibold" : "bg-white/10 hover:bg-white/30"}`}>Fri</button>
                                            <button onClick={() => setSat(!sat)} className={`px-2 py-0.25 border-[1] border-white rounded-xl text-sm ${sat ? "bg-white text-black font-semibold" : "bg-white/10 hover:bg-white/30"}`}>Sat</button>
                                            <button onClick={() => setSun(!sun)} className={`px-2 py-0.25 border-[1] border-white rounded-xl text-sm ${sun ? "bg-white text-black font-semibold" : "bg-white/10 hover:bg-white/30"}`}>Sun</button>
                                        </div>
                                    <div className="flex justify-between pb-2 px-2">
                                        <Image
                                            className="absolute w-10 px-2 py-0.25"
                                            src={album}
                                            alt="lift"
                                        ></Image>
                                        <input
                                            className="outline-[1px] text-sm outline-white bg-white/10 backdrop-blur-none w-full h-7 px-3 pl-9 rounded-xl text-sm"
                                            placeholder="Session name"
                                        ></input>
                                    </div>
                                    <div className="flex justify-between px-2">
                                        <Image
                                            className="absolute w-9.5 px-2 py-0.75"
                                            src={notes}
                                            alt="notes"
                                        ></Image>
                                        <input
                                            className="outline-[1px] placeholder-text-sm outline-white bg-white/10 backdrop-blur-none w-full h-7 px-3 pl-9 rounded-xl text-sm"
                                            placeholder="Notes"
                                        ></input>
                                    </div>
                                    <div className="flex relative justify-end gap-1.5 top-2.5 mb-2.5 px-2">
                                        <button 
                                            onClick={() => setAddDropdownOpen(false)}
                                            className="bg-white/20 background-blur-lg text-white text-sm rounded-xl border-white border-[1] px-2 py-0.5 hover:bg-white/40">
                                            Cancel
                                        </button>
                                        <button 
                                            /* onClick={handleWork} */
                                            className="bg-white/20 background-blur-lg text-white text-sm rounded-xl border-white border-[1] px-3 py-0.5 hover:bg-white/40">
                                            Add
                                        </button>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}