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
                <Parallax className={`flex flex-col w-[40vw] mt-[15vh] ml-[15vw] mobile:w-full mobile:m-auto ${visivel ? "animate-revelar-direita" : "opacity-0"}`} onEnter={() => setVisivel(true)}>

                    <div className="flex w-[full] h-[20vh]">
                        <Image className="w-[6vw] aspect-square rounded-full mr-[2vw]" src={vit} alt="icone1" />
                        <div>
                            <p className="text-2xl  text-darkblue font-bold">USER 1</p>
                            <p className="mt-[2vh]  text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tortor mi, fermentum imperdiet risus vel, mattis lacinia orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tortor mi, fermentum imperdiet risus vel, mattis lacinia orci. </p>

                        </div>
                    </div>
                    <div className="flex w-[full] h-[20vh] mt-[10vh]">
                        <Image className="w-[6vw] aspect-square rounded-full mr-[2vw]"  src={vit} alt="icone1" />
                        <div>
                            <p className="text-2xl   text-darkblue font-bold">USER 2</p>
                            <p className="mt-[2vh]  text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tortor mi, fermentum imperdiet risus vel, mattis lacinia orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tortor mi, fermentum imperdiet risus vel, mattis lacinia orci. </p>
                        </div>

                    </div>
                    <div className="flex w-[full] h-[20vh] mt-[10vh] mb-[10vh]">
                        <Image className="w-[6vw] aspect-square rounded-full mr-[2vw]" src={vit} alt="icone1" />
                        <div>
                            <p className="text-2xl text-darkblue font-bold">USER 3</p>
                            <p className="mt-[2vh] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tortor mi, fermentum imperdiet risus vel, mattis lacinia orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tortor mi, fermentum imperdiet risus vel, mattis lacinia orci. </p>
                        </div>
                    </div>

                </Parallax>

            </div>
        </ParallaxProvider>
    )
}