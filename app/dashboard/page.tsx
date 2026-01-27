import Image from "next/image";
import vector from "../../public/vector-full.png"

export default function Home() {
    return (
        <div>
            <a>
                <Image
                    src={vector}
                    alt="Vector."
                ></Image>
            </a>
        </div>
    )
}