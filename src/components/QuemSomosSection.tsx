import Dados from "@/components/Dados";
import Image from "next/image";

export default function QuemSomosSection(){

    const olho = require("../../public/assets/olho.svg");

    return(
        <div className="grid desktop:grid-cols-2 mobile:grid-cols-1 desktop:w-[60vw] desktop:ml-[20vw] mb-[30vh]">
            <div className="p-8 flex flex-col justify-evenly">
                <label className="text-darkblue text-sm">“Retina e Vítreo Consultoria”</label>
                <p className="text-3xl">ENTREGAMOS A VOCÊ <span className="text-darkblue">ATENDIMENTO OFTALMOLÓGICO</span> DE ALTA QUALIDADE</p>
            </div>
            <Image className="pt-16 px-8" src={olho} alt="atendimento oftalmologico"/>
            <p className="p-8 text-base">
            Referência no diagnóstico e tratamento das doenças oculares, a Retina e Vítreo Consultoria conta com médicos renomados. Além disso, nosso espaço conta com os mais modernos equipamentos oftalmológicos. Somos pioneiros na utilização da angiografia fluoresceínica, da tomografia de coerência óptica, da fotocoagulação (laser) retiniana, da “multimodal imaging” e oferecemos consultas de oftalmologia geral e especializadas, exames e cirurgias.
            </p>
            <div className="grid grid-cols-1 mt-8 p-8 gap-4">
                <Dados dado={"35 Anos"} label={"em diagnóstico e tratamento clínico"}/>
            </div>
        </div>
    )
}