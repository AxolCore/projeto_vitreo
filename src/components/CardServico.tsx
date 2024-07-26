import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CardServicoProps {
    titulo: string,
    descricao: string,
    imagem: StaticImport,
    alt: string
}



export default function CardServico({ titulo, descricao, imagem, alt }: CardServicoProps) {
    return (
        <div className="desktop:grid desktop:grid-cols-5 mobile:flex mobile:flex-col mobile:items-center mobile:justify-center py-8">
            <Image className="p-8" src={imagem} alt={alt}/>
            <div className="flex flex-col desktop:col-span-4 desktop:ml-12 justify-center">
                <label className="font-bold text-3xl mobile:text-center text-darkblue">{titulo}</label>
                <p className="font-normal text-lg text-darkgray whitespace-pre-line">{descricao}</p>
            </div>
        </div>
    )
}