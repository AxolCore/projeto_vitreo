import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ParallaxCardsProps {
    icon: StaticImport,
    alt: string,
    label: string
}

export default function ParallaxCards({icon, alt, label}: ParallaxCardsProps){
    return(
        <div className="flex flex-col items-center justify-evenly desktop:w-[12vw] mobile:w-[80vw] aspect-video bg-white hover:bg-darkblue rounded-xl p-px mobile:mb-12 group transition-colors duration-700">
            <Image className="desktop:w-[5vw] mobile:w-[30vw] group-hover:invert" src={icon} alt={alt} />
            <label className="group-hover:invert">{label}</label>
        </div>
    )
}