import Image from "next/image";

export default function CardOlhos(){
    const imagemCard = require('../../public/assets/logo.jpg')
    return(
        <div className="flex w-[70vw] h-[50vh] b-blue-700 gap-2 mb-8 animate-revelar-esquerda">
            <div className="flex group hover:bg-slate-900 text-black rounded-xl flex-col gap-2 p-2 items-center  b-green-800 w-full ">
                <Image className="w-36 rounded-full" src={imagemCard} alt="placeholder"/>
                <h2 className="text-lg group-hover:text-white">Nossos serviços</h2>
                <p className="text-sm text-center text-blue-700 group-hover:text-white">Com a experiência de 35 anos em diagnóstico e tratamento clínico e cirúrgico de doenças vitreorretinianas, a Clínica de Retina e Vítreo oferece aos seus pacientes inúmeros serviços.</p>
            </div>

            <div className="flex group hover:bg-slate-900 text-black rounded-xl flex-col gap-2 p-2 items-center  b-green-800 w-full ">
                <Image className="w-36 rounded-full" src={imagemCard} alt="placeholder"/>
                <h2 className="text-lg group-hover:text-white">Estrutura</h2>
                <p className="text-sm text-center text-blue-700 group-hover:text-white">A Retina e Vítreo Consultoria possui uma área de 600 m2, com centro diagnóstico e terapêutico moderno. A clínica conta com um centro de eletrofisiologia ocular capaz de realizar exames</p>
            </div>

            <div className="flex group hover:bg-slate-900 text-black rounded-xl flex-col gap-2 p-2 items-center  b-green-800 w-full ">
                <Image className="w-36 rounded-full" src={imagemCard} alt="placeholder"/>
                <h2 className="text-lg group-hover:text-white">Problemas e tratamentos</h2>
                <p className="text-sm text-center text-blue-700 group-hover:text-white">A Clínica de Retina e Vítreo realiza diversas cirurgias, utilizando equipamentos modernos e de última tecnologia.</p>
            </div>
        </div>
    );
}