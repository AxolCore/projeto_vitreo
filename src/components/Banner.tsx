import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
export default function Banner(){
    const imagemBanner = require('../../public/assets/ImagemBanner.jpg')
    return(
        <div className=" ml-[] flex justify-start px-16 items-start w-screen pb-48 pt-12 bg-fundoBanner bg-center bg-cover bg-no-repeat text-white ">
            <div className="flex flex-col justify-start items-start w-[40vw] h-1/2 gap-4 font-semibold ml-[6vw]">
                <h1 className="text-2xl uppercase border-y-2 p-2 mt-[8%] mb-[4%] text-darkblue font-extrabold">Retina e Vítreo</h1>
            
             
                <p className="text-slate-600 text-lg">A Retina e Vítreo Consultoria é uma referência no diagnóstico e tratamento das doenças da retina e do vítreo, contando com médicos renomados e especializados na área. Fundada pelo Dr. Naoye Shiokawa, pioneiro na moderna técnica de correção de descolamento de retina por meio da vitrectomia em 1981, a clínica oferece aos seus pacientes a conveniência de realizar exames na própria clínica, proporcionando um atendimento completo e de qualidade. Venha ser nosso paciente você também!</p>
                <div className="flex gap-2 mt-12">
                    <button className="bg-darkblue p-2 rounded-3xl hover:bg-white hover:text-black">Saiba mais</button>
                    <button className="bg-darkblue p-2 rounded-3xl hover:bg-white hover:text-black">Entre em Contato</button>
                </div>
            </div>
        </div>
    );
}