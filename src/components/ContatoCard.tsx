import Image from "next/image"

export default function ContatoCard() {

    const pin = require("../../public/assets/pin.svg");
    const telefone = require("../../public/assets/telefone.svg");
    const email = require("../../public/assets/email.svg");

    return (
        <div className="flex flex-col w-[28vw] px-[2vw] space-y-6 my-8 mobile:w-[100vw]">
            <label className="text-lg font-normal text-white bg-darkblue p-2 mt-24">Contato</label>
            <div className="flex flex-row"><Image className="brightness-50 scale-90" src={pin} alt="localização" /><p className="text-base font-normal text-darkgray ml-2">Rua Mateus Leme, 2285, São Francisco Curitiba – PR, CEP: 80530-010</p></div>
            <div className="flex flex-row"><Image className="brightness-50 scale-90" src={telefone} alt="telefone" /><p className="text-base font-normal text-darkgray ml-2">(41) 3078-4800</p></div>
            <div className="flex flex-row"><Image className="brightness-50 scale-90" src={email} alt="email" /><p className="text-base font-normal text-darkgray ml-2 break-all">contato@retinaevitreoconsultoria.com.br</p></div>
        </div>
    )
}