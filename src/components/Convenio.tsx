import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import Image from "next/image";

interface ConvenioProps {
    imagem: StaticImport,
    alt: string,
    link: string
}

export default function Convenio ({imagem, alt, link}: ConvenioProps){
    return(
        <Link className="flex flex-col items-center justify-center border-0 aspect-square" href={link}>
            <Image src={imagem} alt={alt} />
        </Link>
    )
}