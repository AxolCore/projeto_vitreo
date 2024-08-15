import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface CardEstruturaProps {

    icone: StaticImport,
    texto: string,
    imagem: StaticImport,
    invertido?: boolean
};

export default function CardEstrutura({ icone, texto, imagem, invertido }: CardEstruturaProps) {
    return (
        <div className="sombra flex flex-col items-center bg-darkblue rounded-2xl gap-4 w-[24vw] h-[40vw] "> {/* inline seria: style={{boxShadow: '-25px -25px 0px #fff'}} */}
            <Image className={`my-4 ${invertido && "order-3"} w-20 h-20`} alt='ícone' src={icone} />

            <p className={`w-[80%] m-auto ${invertido && "order-2"}`}>{texto}</p>
            <div className={`bg-red-600 rounded-2xl h-64 ${invertido && "order-1"}`}><Image className="h-full rounded-2xl" alt='card' src={imagem} /></div>


        </div>
    );
}