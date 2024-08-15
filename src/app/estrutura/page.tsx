import Image from "next/image";
import CardEstrutura from "@/components/CardEstrutura";

export default function Estrutura() {
    const cardImage = require('../../../public/assets/imagemCard.png')
    const cardImageRua = require('../../../public/assets/Retina_e_vitreo_rua.jpg')
    const cardImageClinica = require('../../../public/assets/imagemClinica.png')
    const iconeRua = require('../../../public/assets/rua.png')
    const iconeMedico = require('../../../public/assets/oftalmologista.png')
    const iconeClinica = require('../../../public/assets/clinica-de-saude.png')
    const imagemQualidade = require('../../../public/assets/imagemTerceiraSectionEstrutura.png')
    return (
        <div className="mx-auto w-[80%] b-yellow-300 mt-4 flex flex-col">
            <div className="mb-20">
                <h1 className="text-[#6462AB] text-4xl mb-4 "><span className="border-t-[3px] border-x-darkblue">Nossas</span> instalações</h1>
                <p>A Retina e Vítreo Consultoria possui uma área de 600 m2, com centro diagnóstico e terapêutico moderno. <br/>A clínica conta com um centro de eletrofisiologia ocular capaz de realizar exames de eletrorretinografia, <br/>eletro-oculografia e potencial visual evocado.</p>

            </div>

            <div className="flex flex-row items-center justify-between b-green-500 w-full max-w-[1280px] self-center">
                <CardEstrutura icone={iconeMedico} texto={"Precisão e confiabilidade em cada exame. Equipamentos modernos e tecnologia avançada nos permitem oferecer resultados precisos e rápidos, auxiliando no seu diagnóstico e tratamento."} imagem={cardImage}/>
                <CardEstrutura icone={iconeRua} texto={"Pensando em seu conforto, nossa clínica oferece localização privilegiada e estacionamento amplo, para que você possa se dedicar ao seu bem-estar com tranquilidade."} imagem={cardImageRua} invertido/>
                <CardEstrutura icone={iconeClinica} texto={"Sua saúde em um ambiente acolhedor. Desfrute de um atendimento humanizado em um espaço projetado para proporcionar conforto e tranquilidade."} imagem={cardImageClinica}/>

            </div>

            <div className="flex justify-between mt-40 b-slate-600 h-auto">
                <div className="w-[50%]">
                    <h2 className="text-[#6462AB] text-4xl mb-4 m-"><label className="border-t-[3px] border-x-darkblue ">QUALIDA</label>DE DE SERVIÇO</h2>
                    <p>Com a experiência de 35 anos em diagnóstico e tratamento clínico e cirúrgico de doenças vitreorretinianas, a Clínica de Retina e Vítreo oferece aos seus pacientes inúmeros serviços, entre eles a vantagem do paciente realizar consultas e exames complementares no mesmo local.</p>
                </div>


                <Image src={imagemQualidade} alt="imagem da recepção" />

            </div>
        </div>
    );
}