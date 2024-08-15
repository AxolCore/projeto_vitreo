import Image from "next/image"

interface CardOlhoProps {
    titulo: string,
    paragrafo: string
}

export default function CardOlho({titulo, paragrafo}: CardOlhoProps) {

    const imagemCard = require('../../public/assets/logo.jpg');

    return (
        <div className="flex group transition-colors duration-200 desktop:h-[50vh] hover:bg-darkblue border-2 border-dashed border-darkblue text-black rounded-xl flex-col gap-6 p-4 items-center b-green-800 w-[30%] mobile:w-[90vw] ">
            <Image className="desktop:w-[10vw] rounded-full" src={imagemCard} alt="placeholder" />
            <h2 className="text-lg text-black text-center group-hover:text-white desktop:text-[1.4vw]">{titulo}</h2>
            <p className="text-sm text-center group-hover:text-white text-blue-700 desktop:text-[1vw]">{paragrafo}</p>
        </div>
    )
}