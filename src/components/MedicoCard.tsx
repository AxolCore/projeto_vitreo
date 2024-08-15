import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

interface MedicoProps {
    nome: string,
    crm: string,
    especializacao: string,
    imagem: StaticImport,
    alt: string
}

export default function MedicoCard({ nome, crm, especializacao, imagem, alt }: MedicoProps) {
    return (
        <div className="flex flex-col items-center justify-center group bg-lightgray pb-8 ring-blue-500 hover:ring hover:scale-105 transition duration-500 rounded-lg">
            <Image className="group-hover:brightness-50 mb-8 rounded-t-lg" src={imagem} alt={alt} />
            <label className="text-lg font-light text-darkgray">{nome}</label>
            <span className="border-y border-double border-y-blue-800 w-16 h-1 my-2"></span>
            <label className="font-light text-darkgray text-center whitespace-break-spaces">{especializacao}  |  {crm}</label>
        </div>
    )
}