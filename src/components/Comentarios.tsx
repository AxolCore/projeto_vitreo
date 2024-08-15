'use client'
import Image from "next/image"
import { useState } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function Comentario() {

    const vit = require("../../public/assets/logo.jpg");
    const [visivel, setVisivel] = useState(false)

    return (
        <ParallaxProvider>
            <div className="bg-[url('/assets/oculos_desfoque.jpg')] bg-cover bg-fixed bg-center bg-no-repeat w-screen">
                <Parallax className={`flex flex-col w-[40vw] mt-[15vh] ml-[15vw] mobile:w-full mobile:m-auto gap-16 py-8 ${visivel ? "animate-revelar-direita" : "opacity-0"}`} onEnter={() => setVisivel(true)}>

                    <div className="flex mobile:flex-col items-center w-[full] desktop:h-[20vh]">
                        <Image className="w-[6vw] h-[6vw] mobile:w-[50vw] mobile:h-[50vw] aspect-square rounded-full mr-[2vw]" src={vit} alt="icone1" />
                        <div className="mobile:flex mobile:flex-col mobile:items-center mobile:mt-8 mobile:w-[90vw]">
                            <p className="text-2xl  text-darkblue font-bold">MARILIA DE OLIVEIRA</p>
                            <p className="mt-[2vh]  text-white">Melhor atendimento que já recebi, equipe comprometida e competente! Ótimos profissionais médicos, equipe de apoio muito educada e atenciosa. Pelo bom atendimento prestado nessa clínica, foi descoberta minha doença (Hipertensão Intracraniana Idiopática) e onde… </p>

                        </div>
                    </div>
                    <div className="flex mobile:flex-col items-center w-[full] desktop:h-[20vh]">
                        <Image className="w-[6vw] h-[6vw] mobile:w-[50vw] mobile:h-[50vw] aspect-square rounded-full mr-[2vw]" src={vit} alt="icone1" />
                        <div className="mobile:flex mobile:flex-col mobile:items-center mobile:mt-8 mobile:w-[90vw]">
                            <p className="text-2xl  text-darkblue font-bold">DANIEL DE M. KELLER</p>
                            <p className="mt-[2vh]  text-white">Fui atendido em duas ocasiões diferentes: a primeira, para uma consulta de rotina e em outra ocasião, durante um encaixe de emergência. A Dra. Aline Shiokawa e o Dr. Naoye Shiokawa foram muito atenciosos… </p>

                        </div>
                    </div>
                    <div className="flex mobile:flex-col items-center w-[full] desktop:h-[20vh]">
                        <Image className="w-[6vw] h-[6vw] mobile:w-[50vw] mobile:h-[50vw] aspect-square rounded-full mr-[2vw]" src={vit} alt="icone1" />
                        <div className="mobile:flex mobile:flex-col mobile:items-center mobile:mt-8 mobile:w-[90vw]">
                            <p className="text-2xl  text-darkblue font-bold">ROGER SETOGUTTE</p>
                            <p className="mt-[2vh]  text-white">Dr. Naoye, grande pessoa, excelente profissional, referência em Retina e Vítreo. Parabéns! Grande abraço!! </p>

                        </div>
                    </div>

                </Parallax>

            </div>
        </ParallaxProvider>
    )
}