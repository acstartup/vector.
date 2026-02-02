"use client";

import { useState } from "react";
import Image from "next/image";
import vector from "../../public/vector-full.png";
import x from "../../public/vector-x.png"
import check from "../../public/vector-check.png"
import circle from "../../public/vector-circle.png"
import eye from "../../public/vector-eye.png"

export default function Home() {
    const [password, setPassword ] = useState("");

    const atleast8Chars = password.length > 8; {/* returns boolean value to atleast8Chars */}
    const specialSymbol = /[^a-zA-Z0-9]/.test(password); {/* ^ means not, so if password has something that is not a lowercase, uppercase, or number, it will return true */}
    const uppercase = /[A-Z]/.test(password); {/* returns true when .test finds uppercase in password, GEN NOTE: WE WANT A TRUE RETURN VALUE, TRUE = WANTED SUCCESS PARAMETER */}
    const lowercase = /[a-z]/.test(password); {/* true if their are lowercase letters */}

    return (
        <div className="overflow-y-hidden min-h-screen">
            <div className="flex flex-col items-center pl-1 pt-50"> {/* general positioning */}
                <div className=""> {/* Vector. */}
                    <Image
                        className="w-18 h-auto"
                        src={vector}
                        alt="Vector."
                    ></Image>
                </div>
                <h1 className="pt-2 text-4xl pl-1 font-light">Sign Up</h1>

                <div className="flex flex-col pt-6 gap-4 pl-5"> {/* sign up boxes */}
                    <input
                        className="outline-white outline-[1px] bg-white/10 w-70 h-7 px-3 rounded-xl text-sm"
                        placeholder="Username"
                    ></input>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="outline-white outline-[1px] bg-white/10 w-70 h-7 px-3 rounded-xl text-sm"
                        placeholder="Password"
                    ></input> {/* e means event, e.target.value is current value in setPassword */}
                    <div className="relative flex flex-col bottom-1 pl-2 gap-1">
                        <div className="flex flex-row items-baseline gap-2">
                            <Image
                                className="w-3 h-3"
                                src={password.length === 0 ? circle : atleast8Chars ? check : x}
                                alt="O"
                            ></Image> {/* condition ? means true = circle : false = atleast8Chars, double condition, atleast8Chars is triggered only ic password.length is greater than 0 */}
                            <h1 className={`relative text-xs bottom-0.5 ${password.length === 0 ? "text-white" : atleast8Chars ? "text-[#6AD03E]" : "text-[#D03E3E]"} ${password.length === 0? "" : "font-semibold"}`}>At least 8 characters</h1>
                        </div> {/* utilizing front dash ` for commands inside of className */}
                        <div className="flex flex-row items-baseline gap-2">
                            <Image
                                className="w-3 h-3"
                                src={password.length === 0 ? circle : specialSymbol ? check : x}
                                alt="O"
                            ></Image>
                            <h1 className={`relative text-xs bottom-0.5 ${password.length === 0 ? "" : specialSymbol ? "text-[#6AD03E]" : "text-[#D03E3E]"} ${password.length === 0 ? "" : "font-semibold"}`}>Special symbol (@,!,$,etc...)</h1>
                        </div>
                        <div className="flex flex-row items-baseline gap-2">
                            <Image
                                className="w-3 h-3"
                                src={password.length === 0 ? circle : uppercase ? check : x}
                                alt="O"
                            ></Image>
                            <h1 className={`relative text-xs bottom-0.5 ${password.length === 0 ? "" : uppercase ? "text-[#6AD03E]" : "text-[#D03E3E]"} ${password.length === 0 ? "" : "font-semibold"}`}>Uppercase letter (A-Z)</h1>
                        </div>
                        <div className="flex flex-row items-baseline gap-2">
                            <Image
                                className="w-3 h-3"
                                src={password.length === 0 ? circle : lowercase ? check : x}
                                alt="O"
                            ></Image>
                            <h1 className={`relative text-xs bottom-0.5 ${password.length === 0 ? "" : lowercase ? "text-[#6AD03E]" : "text-[#D03E3E]"} ${password.length === 0 ? "" : "font-semibold"}`}>Lowercase letter (a-z)</h1>
                        </div>
                        <div className="flex flex-row items-baseline gap-2">
                            <Image
                                className="w-3 h-3"
                                src={circle}
                                alt="O"
                            ></Image>
                            <h1 className="relative text-xs bottom-0.5">Number (0-9)</h1>
                        </div>
                    </div>
                    <div className="flex flex-row relative bottom-2.5">
                        <input
                            className="outline-white outline-[1px] bg-white/10 w-70 h-7 px-3 rounded-xl text-sm"
                            placeholder="Confirm Password"
                        ></input>
                        <button className="relative right-8">
                            <Image
                                className="w-4 h-auto"
                                src={eye}
                                alt="()"
                            ></Image>
                        </button>
                    </div>
                    <div className="flex justify-center relative pr-2"> {/* sign up */}
                        <button className="bg-white px-2 py-1 rounded-xl text-black text-sm hover:opacity-80">
                            Sign Up
                        </button>
                    </div>
                    <h2 className="flex justify-center relative bottom-1 pr-4 text-xs text-white/80">Already have an account?<a href="../log-in/" className="pl-1 text-white hover:underline">Log In</a></h2>
                </div>
            </div>
        </div>
    );
}