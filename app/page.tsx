import Image from "next/image";
import vector from "../public/vector-full.png";
import vectorDouble from "../public/vector-double4.png";

export default function Home() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden min-h-screen">
      <div className="flex justify-between relative px-[100px] top-5 w-full h-40"> {/* header */}
        <a 
          className="w-30"
          href="/">
          <Image
            src={vector}
            alt="vector"
          ></Image>
        </a>
        <a 
          href="/login"
          className="z-[10] relative text-center bg-white w-45 h-9 pt-1.5 px-3 py-2.25 rounded-md text-center text-black hover:opacity-93">
          Get Started for Free
        </a>
      </div>

      <div className="relative top-25 px-[100px] w-230"> {/* Front Entrance */}
        <span className="z-[10] relative text-white text-6xl font-light">Quantify your daily grind to</span>
        <span className="z-[10] relative text-6xl right-0.25 font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-red-300 bg-clip-text text-transparent animate-gradient"> make ambition reality.</span>
        <h3 className="z-[10] relative top-6 text-lg font-light opacity-70 w-148">
          Eliminate your feeling of falling behind with simple day-to-day tracking to reach your goals, from dominating your training to mastering your work and building a winning streak.  
        </h3>
        <a 
          href="/login"
          className="relative top-14 border border-white w-45 h-20 py-2.25 px-3 rounded-md hover:bg-white/10">
          Get Started for Free
        </a>
        <h2 className="relative top-20 opacity-70 font-light">
          Vector is currently free for everyone.
        </h2>

        <div className="z-[0] absolute left-[735px] top-[-223px] w-[1000px] h-[800px]">
          <Image
            src={vectorDouble}
            alt="full"
            fill
            className="object-contain"
          ></Image>
        </div>
      </div>

      <div className="z-[20] fixed flex justify-center left-1/2 -translate-x-1/2 bottom-3.5"> {/* Goal Tracking */}
        <div className="py-1.5 px-3 backdrop-blur-xs font-normal text-white/60 rounded-full bg-white/2 border border-white/8">
          100,000 goals reached with Vector
        </div>
      </div>
    </div>
  );
}
