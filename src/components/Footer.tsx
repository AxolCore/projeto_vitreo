import Image from "next/image"
import Link from "next/link"

export default function Footer() {

    const logo = require("../../public/assets/logo.jpg");
    const pin = require("../../public/assets/pin.svg");
    const telefone = require("../../public/assets/telefone.svg");
    const email = require("../../public/assets/email.svg");

    return (
        <div className="w-screen bg-darkgray flex flex-row justify-center mobile:flex-col mobile:items-center mt-40">
            <div className="w-[28vw] px-[2vw] my-8 mobile:w-[80vw] mobile:items-center">
                <Image src={logo} alt="logo" />
            </div>
            <div className="flex flex-col border-y-0 border-x border-lightgray w-[28vw] px-[2vw] my-8 space-y-3 mobile:w-[80vw] mobile:border-x-0">
                <label className="text-2xl font-bold text-lightgray mobile:text-center">Navegação</label>
                <Link className="text-base font-normal text-gray hover:text-lightgray" href="/">Inicio</Link>
                <Link className="text-base font-normal text-gray hover:text-lightgray" href="">A Clinica</Link>
                <Link className="text-base font-normal text-gray hover:text-lightgray" href="">Nossa Equipe</Link>
                <Link className="text-base font-normal text-gray hover:text-lightgray" href="/quem-somos">Serviços</Link>
                <Link className="text-base font-normal text-gray hover:text-lightgray" href="">Problemas e Tratamentos</Link>
                <Link className="text-base font-normal text-gray hover:text-lightgray" href="">Noticias</Link>
            </div>
            <div className="flex flex-col w-[28vw] space-y-6 my-8 mobile:w-[80vw] desktop:pl-[2vw]">
                <label className="text-2xl font-bold text-lightgray mobile:text-center">Contato</label>
                <div className="flex flex-row"><Image src={pin} alt="localização"/><p className="text-base font-normal text-gray ml-2">Rua Mateus Leme, 2285, São Francisco Curitiba – PR, CEP: 80530-010</p></div>
                <div className="flex flex-row"><Image src={telefone} alt="telefone"/><p className="text-base font-normal text-gray ml-2">(41) 3078-4800</p></div>
                <div className="flex flex-row"><Image src={email} alt="email"/><p className="text-base font-normal text-gray ml-2 break-all">contato@retinaevitreoconsultoria.com.br</p></div>
            </div>
        </div>
    )
}