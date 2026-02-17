"use client";

import { useState, useEffect } from "react";
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
import trash from "../../public/vector-trash.png"
import album from "../../public/vector-album.png"
import { saveHabit, getHabitLogs, updateHabitCount, deleteHabitLog } from "@/app/actions"

export default function Home() {
    const [addDropdownOpen, setAddDropdownOpen] = useState(false);
    const [timeFilter, setTimeFilter] = useState("today");
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [habitName, setHabitName] = useState("");
    const [habitNotes, setHabitNotes] = useState("");
    const [habitLogs, setHabitLogs] = useState<any[]>([]);

    const [mon, setMon] = useState(false);
    const [tue, setTue] = useState(false);
    const [wed, setWed] = useState(false);
    const [thu, setThu] = useState(false);
    const [fri, setFri] = useState(false);
    const [sat, setSat] = useState(false);
    const [sun, setSun] = useState(false);

    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const today = days[new Date().getDay()];

    const fetchLogs = async () => {
        const result = await getHabitLogs();
        if (result.success) setHabitLogs(result.data);
    }

    useEffect(() => {
        fetchLogs();
    }, []);

    const handleSave = async () => {
        const activeDays = [];
        if (mon) activeDays.push("mon");
        if (tue) activeDays.push("tue");
        if (wed) activeDays.push("wed");
        if (thu) activeDays.push("thu");
        if (fri) activeDays.push("fri");
        if (sat) activeDays.push("sat");
        if (sun) activeDays.push("sun");

        const result = await saveHabit({ date, habitName, habitNotes, activeDays })

        if (result.success) {
            setHabitName("");
            setHabitNotes("");
            setMon(false); setTue(false); setWed(false);
            setThu(false); setFri(false); setSat(false); setSun(false);
            setAddDropdownOpen(false);
            alert("Habit saved!");
        } else {
            alert("Error: " + result.error)
        }
    }

    const handleCount = async (id: number, currentCount: number) => {
        const result = await updateHabitCount(id, currentCount === 0? currentCount + 1 : currentCount - 1);
        if (result.success) fetchLogs();
    }

    const handleDelete = async (id: number) => {
        const result = await deleteHabitLog(id);
        if (result.success) fetchLogs();
    }

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
                        href="/todo/" 
                        className="bg-[#753B95] w-14 h-14 shrink-0 rounded-2xl grid place-items-center">
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
                            href="../setting/"
                            className="bg-white/7 w-14 h-14 shrink-0 rounded-2xl grid place-items-center pl-1 hover:bg-[#753B95]/60">
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

                <div className="flex flex-row gap-6 mt-[90px] ml-[65px] mr-[30px] flex-1">
                    <div className="bg-white/10 flex-[1.25] h-[80vh] rounded-3xl">
                        <div className="mt-[12px] px-[19px]">
                            <div className="flex justify-between">
                                <h1 className="">Habits Overview</h1>
                                <div className="flex flex-row gap-1.5 items-center">
                                    <button onClick={() => setTimeFilter("today")} className={`text-xs font-semibold px-[4px] py-[3px] rounded-lg outline-[0.5] outline-black ${timeFilter === "today" ? "bg-white text-black" : "bg-white/5 hover:bg-white/20 text-white"}`}>TODAY</button>
                                    <button onClick={() => setTimeFilter("week")}className={`text-xs font-semibold px-[7px] py-[3px] rounded-lg outline-[0.5] outline-black ${timeFilter === "week" ? "bg-white text-black" : "bg-white/5 hover:bg-white/20 text-white"}`}>WEEK</button>
                                    <button onClick={() => setTimeFilter("month")}className={`text-xs font-semibold px-[7px] py-[3px] rounded-lg outline-[0.5] outline-black ${timeFilter === "month" ? "bg-white text-black" : "bg-white/5 hover:bg-white/20 text-white"}`}>MONTH</button>
                                    <button onClick={() => setTimeFilter("year")} className={`text-xs font-semibold px-[7px] py-[3px] rounded-lg outline-[0.5] outline-black ${timeFilter === "year" ? "bg-white text-black" : "bg-white/5 hover:bg-white/20 text-white"}`}>YEAR</button>
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
                                <div className="absolute flex flex-col bg-black/10 bg-white/20 backdrop-blue-lg rounded-3xl py-2.25 px-0.75 w-88">
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
                                            onChange={(e) => setHabitName(e.target.value)}
                                            value={habitName}
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
                                            value={habitNotes}
                                            onChange={(e) => setHabitNotes(e.target.value)}
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
                                            onClick={handleSave}
                                            className="bg-white/20 background-blur-lg text-white text-sm rounded-xl border-white border-[1] px-3 py-0.5 hover:bg-white/40">
                                            Add
                                        </button>
                                    </div>
                                </div>
                            }
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {habitLogs
                                .filter((log) => log.active_days?.includes(today))
                                .map(((log) => (
                                <div key={log.id} className="">
                                    <div className={`h-40 w-80 rounded-3xl px-3 py-2 ${log.count === 0 ? "bg-white/10" : "bg-white/60"}`}>
                                        <div className="flex justify-between">
                                            <div className="flex justify-start">
                                                <button onClick={() => handleCount(log.id, log.count || 0)} className="w-6 h-6 bg-white/20 rounded-lg py-2 hover:bg-white/50"></button>
                                                <p className="relative text-white pl-3 text-lg bottom-0.5">{log.habit_name}</p>
                                            </div>
                                            <div className="flex justify-end">
                                                <button onClick={() => handleDelete(log.id)} className="flex relative bottom-0.5 pr-0.5 py-0.5"><Image className="w-5 h-5" src={trash} alt=""></Image></button>
                                            </div>
                                        </div>
                                        <h1 className="text-6xl">{log.count}/1</h1>
                                        <p className="text-white pt-3">{log.notes}</p>
                                    </div>
                                </div>
                            )))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}