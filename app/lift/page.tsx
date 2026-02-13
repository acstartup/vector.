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
import clock from "../../public/vector-clock.png"
import notes from "../../public/vector-notes.png"
import calendar from "../../public/vector-calendar.png"
import trash from "../../public/vector-trash.png"
import notesBlack from "../../public/vector-notes-black.png"
import calendarBlack from "../../public/vector-calendar-black.png"
import weightBlack from "../../public/vector-weight-black.png"
import down from "../../public/vector-down.png"
import up from "../../public/vector-up.png"
import { saveLift, getLiftLogs, deleteLiftLogs } from "@/app/actions"

export default function Home() {
    const [addDropdownOpen, setAddDropdownOpen] = useState(false);
    const [timeFilter, setTimeFilter] = useState("today");
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [sessionName, setSessionName] = useState("");
    const [exercises, setExercises] = useState<{ name: string; weight: string; weightType: string; sets: string; reps: string }[]>([]);
    const [liftNotes, setLiftNotes] = useState("");
    const [liftLogs, setLiftLogs] = useState<any []>([]);
    const [liftDropdown, setLiftDropdown] = useState<number | null>(null);
    const [noteDropdown, setNoteDropdown] = useState<number | null>(null);

    const fetchLogs = async () => {
        const result = await getLiftLogs();
        if (result.success) setLiftLogs(result.data);
    }

    useEffect(() => {
        fetchLogs();
    }, []);

    const handleLift = async () => {
        if (!sessionName) return alert("Please enter session name.");
        
        const result = await saveLift({ date, sessionName, exercises, liftNotes})

        if (result.success) {
            setAddDropdownOpen(false);
            setSessionName("");
            setExercises([...exercises, { name: "", weight: "", weightType: "lbs", sets: "", reps: "" }]);
            setLiftNotes("");
            alert("Lift saved!");
        } else {
            alert("Error: " + result.error)
        }
    }

    const handleDelete = async (id: number) => {
        const result = await deleteLiftLogs(id);
        if (result.success) {
            fetchLogs();
        } else {
            alert("Error: " + result.error)
        }
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
                        href="/lift/"
                        className="bg-[#753B95] w-14 h-14 shrink-0 rounded-2xl grid place-items-center">
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
                    <div className="bg-white/10 flex-[2] h-[80vh] rounded-3xl">
                        <div className="mt-[12px] px-[19px]">
                            <div className="flex justify-between">
                                <h1 className="">Lift Progress</h1>
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
                                <div className="absolute z-10 bg-black/10 bg-white/20 backdrop-blur-lg rounded-3xl py-2.5 px-2 w-full">
                                    <div className="flex justify-between pb-2">
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
                                    <div className="flex justify-between pb-2">
                                        <Image
                                            className="absolute w-9.25 px-2 py-1"
                                            src={lift}
                                            alt="lift"
                                        ></Image>
                                        <input
                                            value={sessionName}
                                            onChange={(e) => setSessionName(e.target.value)}
                                            className="outline-[1px] text-sm outline-white bg-white/10 backdrop-blur-none w-full h-7 px-3 pl-9 rounded-xl text-sm"
                                            placeholder="Session name"
                                        ></input>
                                    </div>
                                    {exercises.map((exercise, index) => (
                                        <div key={index} className="flex items-center gap-1.5 pb-2 pl-8">
                                            <input
                                                value={exercise.name}
                                                onChange={(e) => {
                                                    const updated = [...exercises];
                                                    updated[index] = { ...exercise, name: e.target.value };
                                                    setExercises(updated);
                                                }}
                                                className="outline-[1px] text-sm outline-white bg-white/10 backdrop-blur-none flex-1 min-w-0 h-7 px-3 pl-3 rounded-xl text-sm"
                                                placeholder="Exercise name"
                                            ></input>
                                            <input
                                                value={exercise.weight}
                                                onChange={(e) => {
                                                    const updated = [...exercises];
                                                    updated[index] = { ...exercise, weight: e.target.value };
                                                    setExercises(updated);
                                                }}
                                                className="shrink-0 outline-[1px] outline-white bg-white/10 rounded-lg px-2 w-12 py-0.5 text-sm text-center hover:bg-white/20"
                                                placeholder="wt."
                                            ></input>
                                            <select
                                                value={exercise.weightType}
                                                onChange={(e) => {
                                                    const updated = [...exercises];
                                                    updated[index] = { ...exercise, weightType: e.target.value };
                                                    setExercises(updated);
                                                }}
                                                className="shrink-0 outline-[1px] outline-white bg-white/10 rounded-lg pl-1 w-12 py-0.5 text-sm text-center hover:bg-white/20"
                                            >
                                                <option value="lbs">lbs</option>
                                                <option value="kg">kg</option>
                                            </select>
                                            <select
                                                value={exercise.sets}
                                                onChange={(e) => {
                                                    const updated = [...exercises];
                                                    updated[index] = { ...exercise, sets: e.target.value };
                                                    setExercises(updated);
                                                }}
                                                className="shrink-0 outline-[1px] outline-white bg-white/10 rounded-lg pl-1 w-14 py-0.5 text-sm text-center hover:bg-white/20"
                                            >
                                                <option>Sets</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                            </select>
                                            <input
                                                value={exercise.reps}
                                                onChange={(e) => {
                                                    const updated = [...exercises];
                                                    updated[index] = { ...exercise, reps: e.target.value };
                                                    setExercises(updated);
                                                }}
                                                className="shrink-0 outline-[1px] outline-white bg-white/10 rounded-lg px-2 w-12 py-0.5 text-sm text-center hover:bg-white/20"
                                                placeholder="Reps"
                                            ></input>
                                        </div>
                                    ))}
                                    <div className="flex flex-row gap-1 justify-end">
                                        <button
                                            onClick={() => setExercises(exercises.slice(0, -1))}
                                            className="bg-[#A83333] border-white border-[1] rounded-lg mb-2 px-0.5 hover:bg-[#A83333]/80"
                                        >
                                            <Image
                                                className="w-5 h-5"
                                                src={trash}
                                                alt="trash"
                                            ></Image>
                                        </button>
                                        <button
                                            onClick={() => setExercises([...exercises, { name: "", weight: "", weightType: "lbs", sets: "", reps: "" }])}
                                            className="bg-white/10 border-white border-[1] rounded-lg mb-2 hover:bg-white/40"
                                        >
                                            <Image
                                                className="w-6 h-6"
                                                src={add}
                                                alt="add"
                                            ></Image>
                                        </button>
                                    </div>
                                    <div className="flex justify-between">
                                        <Image
                                            className="absolute w-9.5 px-2 py-0.75"
                                            src={notes}
                                            alt="notes"
                                        ></Image>
                                        <input
                                            value={liftNotes}
                                            onChange={(e) => setLiftNotes(e.target.value)}
                                            className="outline-[1px] placeholder-text-sm outline-white bg-white/10 backdrop-blur-none w-full h-7 px-3 pl-9 rounded-xl text-sm"
                                            placeholder="Notes"
                                        ></input>
                                    </div>
                                    <div className="flex relative justify-end gap-1.5 top-2.5 mb-2">
                                        <button 
                                            onClick={() => setAddDropdownOpen(false)}
                                            className="bg-white/20 background-blur-lg text-white text-sm rounded-xl border-white border-[1] px-2 py-0.5 hover:bg-white/40">
                                            Cancel
                                        </button>
                                        <button 
                                            onClick={handleLift}
                                            className="bg-white/20 background-blur-lg text-white text-sm rounded-xl border-white border-[1] px-3 py-0.5 hover:bg-white/40">
                                            Add
                                        </button>
                                    </div>
                                </div>
                            } 
                        </div>

                        {liftLogs.map((log) => (
                            <div key={log.id} className="flex flex-col pb-2 z-0">
                                <div className="flex items-center gap-1">
                                    <div className="flex-1 flex items-center justify-between bg-white rounded-lg border-[1] border-black py-0.5 px-2">
                                        <button onClick={() => setLiftDropdown(liftDropdown === log.id ? null : log.id)}>
                                            <Image className="w-5 h-5" src={liftDropdown === log.id ? down : up} alt=""></Image>
                                        </button>
                                        <div className="flex justify-between pr-3">
                                            <Image className="w-6 h-6" src={calendarBlack} alt="clock"></Image>
                                            <p className="text-sm text-black pt-0.5 pl-2">{log.date}</p>
                                        </div>
                                        <div className="flex justify-between pr-3">
                                            <Image className="w-6 h-6" src={weightBlack} alt="weight"></Image>
                                            <p className="text-sm text-black pt-0.5 pl-2">{log.sessionName}</p>
                                        </div>
                                        <button onClick={() => setNoteDropdown(noteDropdown === log.id ? null : log.id)}>
                                            <Image className="w-6 h-6" src={notesBlack} alt="excercises" />
                                        </button>
                                    </div>
                                    <button onClick={() => handleDelete(log.id)} className="bg-[#A83333] w-7.25 h-7.25 rounded-lg">
                                        <Image className="px-0.75 py-0.75" src={trash} alt="trash" />
                                    </button>
                                </div>
                                {liftDropdown === log.id &&
                                    <div className="flex flex-col gap-0.5 mt-0.25 z-10">
                                        {log.excercises?.map((ex: any, i: number) => (
                                            <div key={i} className="flex items-center justify-between bg-white rounded-lg border-[1] border-black ml-4 py-0.5 px-2 mr-8">
                                                <p className="text-sm text-black">Lift: {ex.name}</p>
                                                <p className="text-sm text-black">Max Set: {ex.weight}{ex.weightType}</p>
                                                <p className="text-sm text-black">SetsxReps: {ex.sets}x{ex.reps}</p>
                                            </div>
                                        ))}
                                    </div>
                                }
                                {noteDropdown === log.id && log.notes && 
                                    <div className="bg-white border-black rounded-lg mt-1 px-2 ml-45 mr-8">
                                        <p className="text-sm text-black py-0.5">{log.notes}</p>
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}