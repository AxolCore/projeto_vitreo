import Image from "next/image";

export default function CardOlhos(){
    const imagemCard = require('../../public/assets/logo.jpg')
    return(
        <div className="flex flex-row mobile:flex-col justify-center w-[70vw] desktop:h-[50vh] mobile:w-screen items-center b-blue-700 mb-8 animate-revelar-esquerda gap-16 my-16">
            <div className="flex group transition-colors duration-200 hover:bg-darkblue border-2 border-dashed border-darkblue text-black rounded-xl flex-col gap-2 p-8 items-center justify-center b-green-800 w-[25%] mobile:w-[90vw] ">
                <Image className="w-36 rounded-full" src={imagemCard} alt="placeholder"/>
                <h2 className="text-lg text-black group-hover:text-white">Nossos serviços</h2>
                <p className="text-sm text-center group-hover:text-white text-blue-700">Com a experiência de 35 anos em diagnóstico e tratamento clínico e cirúrgico de doenças vitreorretinianas, a Clínica de Retina e Vítreo oferece aos seus pacientes inúmeros serviços.</p>
            </div>

            <div className="flex group transition-colors duration-200 hover:bg-darkblue border-2 border-dashed border-darkblue text-black rounded-xl flex-col gap-2 p-2 items-center justify-center b-green-800 w-[25%] mobile:w-[90vw]">
                <Image className="w-36 rounded-full" src={imagemCard} alt="placeholder"/>
                <h2 className="text-lg text-black group-hover:text-white">Estrutura</h2>
                <p className="text-sm text-center group-hover:text-white text-blue-700">A Retina e Vítreo Consultoria possui uma área de 600 m2, com centro diagnóstico e terapêutico moderno. A clínica conta com um centro de eletrofisiologia ocular capaz de realizar exames</p>
            </div>

            <div className="flex group transition-colors duration-200 hover:bg-darkblue border-2 border-dashed border-darkblue text-black rounded-xl flex-col gap-2 p-2 items-center justify-center b-green-800 w-[25%] mobile:w-[90vw]">
                <Image className="w-36 rounded-full" src={imagemCard} alt="placeholder"/>
                <h2 className="text-lg text-black group-hover:text-white">Problemas e tratamentos</h2>
                <p className="text-sm text-center group-hover:text-white text-blue-700">A Clínica de Retina e Vítreo realiza diversas cirurgias, utilizando equipamentos modernos e de última tecnologia.</p>
            </div>
        </div>
    );
}