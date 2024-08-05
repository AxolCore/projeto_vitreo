'use client'
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import CardServico from "./CardServico";
import { useState } from "react";

export default function CardsServicosSection() {

    const servico = require("../../public/assets/servico.png");
    const medico = require("../../public/assets/medico.png");
    const equipamento = require("../../public/assets/equipamento.png");

    const [visivel, setVisivel] = useState(false)

    return (
        <ParallaxProvider>
            <Parallax onEnter={() => setVisivel(true)} className={`desktop:w-[60vw] mobile:w-[90vw] ${visivel ? "animate-revelar-esquerda" : "opacity-0"}`}>
                <CardServico
                    titulo={"Confira nossos Serviços"}
                    descricao={`
                    – Centro avançado de diagnóstico e tratamento de doenças vitreorretinianas
                    – Consulta e exames complementares no mesmo local
                    – Os laudos dos exames são feitos e entregues na hora
                    – Sala de espera confortável com som e vídeo
                    – Estacionamento próprio e gratuito no local
                `}
                    imagem={servico}
                    alt={"serviços"} />
                <CardServico
                    titulo={"Equipe médica especializada"}
                    descricao={`
                    O médicos da Retina e Vítreo são profissionais dedicados a área de doenças da retina e vítreo. 
                    Sempre em constantemente atualização, a equipe participa de congressos internacionais 
                    e também realiza atividades cientificas desenvolvidas na própria clínica.
                `}
                    imagem={medico}
                    alt={"medicos"} />
                <CardServico
                    titulo={"Equipamentos de ponta"}
                    descricao={`
                    Nossa clínica conta com as mais modernas técnicas de diagnóstico e tratamento. 
                    Com equipamentos modernos e precisos (como o angiógrafo e tomógrafo Spectralis 
                    – Heidelberger Engineering), a Retina e Vítreo foi pioneira na utilização da angiografia fluoresceínica, 
                    da tomografia de coerência óptica, da fotocoagulação (laser) retiniana, da “multimodal imaging”.    
                `}
                    imagem={equipamento}
                    alt={"equipamentos"} />
            </Parallax>
        </ParallaxProvider>
    )
}