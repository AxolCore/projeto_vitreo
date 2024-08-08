import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
export default function Banner(){
    const imagemBanner = require('../../public/assets/ImagemBanner.jpg')
    return(
        <div className="flex justify-center items-center w-screen py-72 bg-fundoBanner bg-center bg-cover bg-no-repeat text-white ">
            <div className="flex flex-col items-center w-1/2 h-1/2 gap-4 font-semibold">
                <h1 className="text-2xl uppercase border-y-2 p-2 ">a clínica</h1>
                <p className="text-center">Referência no diagnóstico e tratamento das doenças da retina e do vítreo, a Retina e Vítreo Consultoria conta com médicos renomados na área de doenças da retina e vítreo.</p>
                <div className="flex gap-2">
                    <button className="bg-darkblue p-2 rounded-3xl hover:bg-white hover:text-black">Saiba mais</button>
                    <button className="bg-darkblue p-2 rounded-3xl hover:bg-white hover:text-black">Entre em Contato</button>
                </div>
            </div>
        </div>
    );
}