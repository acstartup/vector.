"use client";

import Image from "next/image";
import vector from "../../public/vector-full.png";
import x from "../../public/vector-x.png"
import check from "../../public/vector-check.png"
import circle from "../../public/vector-circle.png"
import eye from "../../public/vector-eye.png"

export default function Home() {
  return (
    <div className="overflow-y-hidden min-h-screen">
        <div className="flex flex-col items-center pl-1 pt-60"> {/* general positioning */}
            <div className=""> {/* Vector. */}
                <Image
                    className="w-18 h-auto"
                    src={vector}
                    alt="Vector."
                ></Image>
            </div>
            <h1 className="pt-2 text-4xl pl-1 font-light">Log In</h1>

            <div className="flex flex-col pt-6 gap-4 pl-5"> {/* sign up boxes */}
                <input
                    className="outline-white outline-[1px] bg-white/10 w-70 h-7 px-3 rounded-xl text-sm"
                    placeholder="Username"
                ></input>
                <div className="flex flex-row relative pb-6">
                    <input
                        className="outline-white outline-[1px] bg-white/10 w-70 h-7 px-3 rounded-xl text-sm"
                        placeholder="Password"
                    ></input>
                    <button className="relative right-8">
                        <Image
                            className="w-4 h-auto"
                            src={eye}
                            alt="()"
                        ></Image>
                    </button>
                </div>
            </div>
            <div className="flex justify-center relative pl-2 pb-3"> {/* sign up */}
                <button className="bg-white px-2 py-1 rounded-xl text-black text-sm hover:opacity-80">
                    Log In
                </button>
            </div>
            <h2 className="flex justify-center relative pl-3 text-xs text-white/80">Don’t have an account?<a href="../sign-up/" className="pl-1 text-white hover:underline">Sign Up</a></h2>
        </div>
    </div>
  );
}