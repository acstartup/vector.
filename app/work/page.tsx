"use client";

import Image from "next/image";
import { useState } from "react";
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
import calendar from "../../public/vector-calendar.png"
import clock from "../../public/vector-clock.png"
import notes from "../../public/vector-notes.png"
import { saveWorkLog } from "@/app/actions"

export default function Home() {
    const [addDropdownOpen, setAddDropdownOpen] = useState(false);
    const [timeFilter, setTimeFilter] = useState("today");
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [workHours, setWorkHours] = useState("");
    const [workNotes, setWorkNotes] = useState("");
    const [unit, setUnit] = useState("");

    const handleWork = async () => {
        if (!workHours) return alert("Please enter hours.");

        const result = await saveWorkLog({ date, workHours, workNotes, unit })

        if (result.success) {
            setAddDropdownOpen(false);
            setWorkHours("");
            setWorkNotes("");
            alert("Work saved!");
        } else {
            alert("Error: " + result.error)
        }
    }

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
                        href="/work/"
                        className="bg-[#753B95] w-14 h-14 rounded-2xl grid place-items-center">
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
                                <h1 className="">Work Hours</h1>
                                <div className="flex flex-row gap-1.5 items-center">
                                    <button onClick={() => setTimeFilter("today")} className={`text-xs font-semibold px-[4px] py-[3px] rounded-lg outline-[0.5] outline-black ${timeFilter === "today" ? "bg-white text-black" : "bg-white/5 hover:bg-white/20 text-white"}`}>TODAY</button>
                                    <button onClick={() => setTimeFilter("week")}className={`text-xs font-semibold px-[7px] py-[3px] rounded-lg outline-[0.5] outline-black ${timeFilter === "week" ? "bg-white text-black" : "bg-white/5 hover:bg-white/20 text-white"}`}>WEEK</button>
                                    <button onClick={() => setTimeFilter("month")}className={`text-xs font-semibold px-[7px] py-[3px] rounded-lg outline-[0.5] outline-black ${timeFilter === "month" ? "bg-white text-black" : "bg-white/5 hover:bg-white/20 text-white"}`}>MONTH</button>
                                    <button onClick={() => setTimeFilter("year")} className={`text-xs font-semibold px-[7px] py-[3px] rounded-lg outline-[0.5] outline-black ${timeFilter === "year" ? "bg-white text-black" : "bg-white/5 hover:bg-white/20 text-white"}`}>YEAR</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1">
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
                                <div className="absolute bg-black/10 bg-white/20 backdrop-blue-lg rounded-3xl py-2.5 px-2 w-80">
                                    <div className="relative flex pb-2">
                                        <Image
                                            className="absolute w-9.5 px-2 py-0.5"
                                            src={calendar}
                                            alt="cal"
                                        ></Image>
                                        <input
                                            type="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                            className="outline-[1px] text-sm outline-white bg-white/10 w-full h-7 px-3 pl-9 rounded-xl text-sm [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:hidden"
                                            placeholder="Date"
                                        ></input>
                                    </div>
                                    <div className="relative flex pb-2">
                                        <Image
                                            className="absolute w-9.5 px-2 py-0.5"
                                            src={clock}
                                            alt="clock"
                                        ></Image>
                                        <input
                                            value={workHours}
                                            onChange={(e) => setWorkHours(e.target.value)}
                                            className="outline-[1px] text-sm outline-white bg-white/10 backdrop-blur-none w-full h-7 px-3 pl-9 pr-20 rounded-xl text-sm"
                                            placeholder="Hours"
                                        ></input>
                                        <select
                                            value={unit}
                                            onChange={(e) => setUnit(e.target.value)}
                                            className="absolute right-1 top-1 outline-[1px] outline-white bg-white/10 rounded-lg pl-1 w-17 py-0.2 text-sm hover:bg-white/20"
                                        >
                                            <option value="hours">Hours</option>
                                            <option value="minutes">Minutes</option>
                                        </select>
                                    </div>
                                    <div className="relative flex pb-2">
                                        <Image
                                            className="absolute w-9.5 px-2 py-0.5"
                                            src={notes}
                                            alt="notes"
                                        ></Image>
                                        <input
                                            value={workNotes}
                                            onChange={(e) => setWorkNotes(e.target.value)}
                                            className="outline-[1px] text-sm outline-white bg-white/10 backdrop-blur-none w-full h-7 px-3 pl-9 rounded-xl text-sm"
                                            placeholder="Notes"
                                        ></input>
                                    </div>
                                    <div className="flex relative justify-end gap-1.5">
                                        <button 
                                            onClick={() => setAddDropdownOpen(false)}
                                            className="bg-white/20 background-blur-lg text-white text-sm rounded-xl border-white border-[1] px-2 py-0.5 hover:bg-white/40">
                                            Cancel
                                        </button>
                                        <button 
                                            onClick={handleWork}
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