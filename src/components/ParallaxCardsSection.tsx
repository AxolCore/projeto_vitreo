import Image from "next/image";
import ParallaxCards from "./ParallaxCards";

export default function ParallaxCardsSection() {

    const icon = require("../../public/assets/medico.png");

    return (
        <div className="w-screen bg-parallax-bg bg-cover bg-fixed bg-center bg-no-repeat flex flex-col items-center">
            <label className="text-3xl font-bold text-darkgray text-center mt-12 mb-6">DIFERENCIAIS RETINA E VÍTREO</label>
            <span className="w-[5vw] border-b-2 border-darkgray"></span>
            <div className="desktop:w-[60vw] mobile:w-[90vw] flex desktop:flex-row mobile:flex-col items-center justify-evenly my-12">
                <ParallaxCards icon={icon} alt={"icone"} label={"Equipe especializada"}/>
                <ParallaxCards icon={icon} alt={"icone"} label={"Experiência de 35 anos"}/>
                <ParallaxCards icon={icon} alt={"icone"} label={"Aceitamos Convênios"}/>
                <ParallaxCards icon={icon} alt={"icone"} label={"Equipamentos de Ponta"}/>
            </div>
        </div>
    )
}