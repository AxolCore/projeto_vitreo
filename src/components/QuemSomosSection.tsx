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
            <p className="p-8 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed eu vulputate erat. Vivamus tristique orci metus, faucibus fringilla ex pharetra sed. 
                Nulla fringilla elit non erat finibus, id eleifend erat pretium. 
                Praesent feugiat tellus vitae ornare vulputate. 
                Duis urna tellus, malesuada eget tempor non, fermentum nec ipsum. 
                Praesent imperdiet laoreet est, vitae semper lorem consequat vitae. 
                Mauris vestibulum in sem at imperdiet Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed eu vulputate erat. 
                Vivamus tristique orci metus, faucibus fringilla ex pharetra sed. 
                Nulla fringilla elit non erat finibus, id eleifend erat pretium. 
                Praesent feugiat tellus vitae ornare vulputate. 
                Duis urna tellus, malesuada eget tempor non, fermentum nec ipsum. 
                Praesent imperdiet laoreet est, vitae semper lorem consequat vitae. 
                Mauris vestibulum in sem at imperdiet.
            </p>
            <div className="grid grid-cols-2 p-8">
                <Dados dado={"1"} label={"Dado 1"}/>
                <Dados dado={"2"} label={"Dado 2"}/>
                <Dados dado={"3"} label={"Dado 3"}/>
                <Dados dado={"4"} label={"Dado 4"}/>
            </div>
        </div>
    )
}