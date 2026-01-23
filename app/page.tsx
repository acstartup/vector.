import Image from "next/image";
import vector from "../public/vector-full.png";

export default function Home() {
  return (
    <div>
      <div className="flex justify-start w-full"> {/* header */}
        <a href="/" className="w-30 relative top-6 left-23">
          <Image 
            src={vector} 
            alt="vector"
          ></Image>
        </a>
        <a href="/home" className="border relative bg-gradient-to-r from-violet-500 to-violet-600 w-30 h-11 text-center pt-2 rounded-md top-7.5 left-285 text-black font-[550]">Start for free.
        </a>
      </div>
    </div>
  );
}
