'use client'
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import MedicoCard from "./MedicoCard";
import { useState } from "react";

export default function MedicosSection() {

    const [visivel, setVisivel] = useState(false);

    const aline = require("../../public/assets/medicos/aline-shiokawa.jpg");
    const mario = require("../../public/assets/medicos/placeholder.jpg");
    const cassia = require("../../public/assets/medicos/cassia-saito.jpg");
    const naoye = require("../../public/assets/medicos/naoye-shiokawa.jpg");

    return (
        <ParallaxProvider>
            <Parallax onEnter={() => setVisivel(true)} className={`w-screen flex flex-col items-center justify-center ${visivel ? "animate-revelar-esquerda" : "opacity-0"}`}>
                <label className="text-3xl font-bold text-darkgray text-center mt-12 mb-6">EQUIPE MÉDICA</label>
                <label className="w-[5vw] border-b-2 border-darkgray text-center"></label>
                <div className="w-screen px-[10vw] flex flex-row gap-16 my-8">
                    <MedicoCard nome={"DRA. ALINE SHIOKAWA"} crm={"CRMPR-27847"} especializacao={"Médica oftalmologista"} imagem={aline} alt={"DRA. ALINE SHIOKAWA"} />
                    <MedicoCard nome={"PROF. DR. MÁRIO TERUO SATO"} crm={"CRMPR-16589"} especializacao={"Neuroftalmologista"} imagem={mario} alt={"PROF. DR. MÁRIO TERUO SATO"} />
                    <MedicoCard nome={"DRA. CÁSSIA SAITO"} crm={"CRMPR-92345"} especializacao={"Médica oftalmologista"} imagem={cassia} alt={"DRA. CÁSSIA SAITO"} />
                    <MedicoCard nome={"DR. NAOYE SHIOKAWA"} crm={"CRMPR-06532"} especializacao={"Médico oftalmologista"} imagem={naoye} alt={"DR. NAOYE SHIOKAWA"} />
                </div>
            </Parallax>
        </ParallaxProvider>
    )
}