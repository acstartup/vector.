"use client";

import { useState } from "react";
import Image from "next/image";
import vector from "../../public/vector-full.png";
import x from "../../public/vector-x.png"
import check from "../../public/vector-check.png"
import circle from "../../public/vector-circle.png"
import eye from "../../public/vector-eye.png"
import { Fascinate } from "next/font/google";

import { supabase } from "@/lib/supabase-client"

export default function Home() {
    const [username, setUsername ] = useState("");
    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");
    const [confirmPassword, setConfirmPassword ] = useState("");

    const atleast8Chars = password.length > 8; {/* returns boolean value to atleast8Chars */}
    const specialSymbol = /[^a-zA-Z0-9]/.test(password); {/* ^ means not, so if password has something that is not a lowercase, uppercase, or number, it will return true */}
    const uppercase = /[A-Z]/.test(password); {/* returns true when .test finds uppercase in password, GEN NOTE: WE WANT A TRUE RETURN VALUE, TRUE = WANTED SUCCESS PARAMETER */}
    const lowercase = /[a-z]/.test(password); {/* true if their are lowercase letters */}
    const numbers = /[0-9]/.test(password); {/* true if their are numbers */}

    const [showError, setShowError] = useState(false);
    const [passMatch, setPassMatch] = useState(false);
    const [zero, setZero] = useState(false);
    const [user, setUser] = useState(false);
    const [success, setSuccess] = useState(false);
    const [fail, setFail] = useState(false);
    const [isEmail, setIsEmail] = useState(false);

    const allParameters = (atleast8Chars && specialSymbol && uppercase && lowercase && numbers);

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault()

        const match = (password === confirmPassword);
        {/* check all password parameters are passed */}
        if (username.length === 0 && email.length === 0) {
            setUser(true);
            setIsEmail(true);
            return;
        }
        setUser(false);
        setIsEmail(false);

        if (username.length === 0) {
            setUser(true);
            return;
        }
        setUser(false);
        
        if (email.length === 0) {
            setIsEmail(true);
            return;
        }
        setIsEmail(false);

        if (password.length === 0) {
            setZero(true);
            return;
        }
        setZero(false);

        if (!allParameters) {
            setShowError(true);
            return;
        }
        setShowError(false);

        {/* check password matches confirm password */}
        if (!match && zero === false) {
            setPassMatch(true);
            return;
        }
        setPassMatch(false);

        {/* adding user sign up to Supabase */}
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error) {
            console.error(error);
            setFail(true);
            return;
        }
        setFail(false);

        setSuccess(true);
    }

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
                        onChange={(e) => setUsername(e.target.value)}
                        className={`outline-[1px] bg-white/10 w-70 h-7 px-3 rounded-xl text-sm ${username.length === 0 ? user ? "outline-[#D03E3E]" : "outline-white" : "outline-[#6AD03E]"}`}
                        placeholder="Username"
                    ></input>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className={`outline-[1px] bg-white/10 w-70 h-7 px-3 rounded-xl text-sm ${email.length === 0 ? isEmail ? "outline-[#D03E3E]" : "outline-white" : "outline-[#6AD03E]"}`}
                        placeholder="Email"
                        type="email"
                    ></input>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className={`outline-[1px] bg-white/10 w-70 h-7 px-3 rounded-xl text-sm ${password.length === 0 ? "outline-white" : allParameters ? "outline-[#6AD03E]" : "outline-[#D03E3E]"}`}
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
                                src={password.length === 0 ? circle : numbers ? check : x}
                                alt="O"
                            ></Image>
                            <h1 className={`relative text-xs bottom-0.5 ${password.length === 0 ? "" : numbers ? "text-[#6AD03E]" : "text-[#D03E3E]"} ${password.length === 0 ? "" : "font-semibold"}`}>Number (0-9)</h1>
                        </div>
                    </div>
                    <div className="flex flex-row relative bottom-2.5">
                        <input
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={`outline-[1px] bg-white/10 w-70 h-7 px-3 rounded-xl text-sm ${confirmPassword.length === 0 ? "outline-white" : allParameters ? confirmPassword === password && confirmPassword.length > 0 ? "outline-[#6AD03E]" : "outline-[#D03E3E]" : "outline-[#D03E3E]"}`}
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
                    <div className="flex flex-col items-center relative pr-2"> {/* sign up */}
                        {user && <h1 className="relative text-[#D03E3E] text-xs bottom-3">Must have username</h1>}
                        {isEmail && <h1 className="relative text-[#D03E3E] text-xs bottom-3">Must have email</h1>}
                        {zero && <h1 className="relative text-[#D03E3E] text-xs bottom-3">Password must have an input</h1>}
                        {showError && <h1 className="relative text-[#D03E3E] text-xs bottom-3">All password parameters must first be met</h1>} {/* showError conditional, only when showError is true does All password... show */}
                        {passMatch && <h1 className="relative text-[#D03E3E] text-xs bottom-3">Password must match confirm password inputs</h1>}
                        {success && <h1 className="relative text-[#6AD03E] text-xs bottom-3">Account successfully created. Head to log in.</h1>}
                        {fail && <h1 className="relative text-[#D03E3E] text-xs bottom-3">Account creation failed. Try again later.</h1>}
                        <button onClick={handleSignUp} className="bg-white px-2 py-1 w-18 rounded-xl text-black text-sm hover:opacity-80">
                            Sign Up
                        </button>
                    </div>
                    <h2 className="flex justify-center relative bottom-1 pr-4 text-xs text-white/80">Already have an account?<a href="../log-in/" className="pl-1 text-white hover:underline">Log In</a></h2>
                </div>
            </div>
        </div>
    );
}