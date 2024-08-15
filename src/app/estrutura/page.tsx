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
                <p>Nossa clínica oferece tudo o que você precisa para cuidar da sua saúde: estrutura completa, <br/>estacionamento seguro e equipamentos de última geração. Seu bem-estar é o nosso compromisso.</p>

            </div>

            <div className="flex flex-row items-center justify-between b-green-500 w-full max-w-[1280px] self-center">
                <CardEstrutura icone={iconeMedico} texto={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu vulputate erat. Vivamus tristique orci metus, faucibus fringilla ex pharetra sed"} imagem={cardImage}/>
                <CardEstrutura icone={iconeRua} texto={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu vulputate erat. Vivamus tristique orci metus, faucibus fringilla ex pharetra sed"} imagem={cardImageRua} invertido/>
                <CardEstrutura icone={iconeClinica} texto={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu vulputate erat. Vivamus tristique orci metus, faucibus fringilla ex pharetra sed"} imagem={cardImageClinica}/>

            </div>

            <div className="flex justify-between mt-40 b-slate-600 h-auto">
                <div className="w-[50%]">
                    <h2 className="text-[#6462AB] text-4xl mb-4 m-"><label className="border-t-[3px] border-x-darkblue ">QUALIDA</label>DE DE SERVIÇO</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu vulputate erat. Vivamus tristique orci metus, faucibus fringilla ex pharetra sed. Nulla fringilla elit non erat finibus, id eleifend erat pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu vulputate erat. Vivamus tristique orci metus, faucibus fringilla ex pharetra sed. Nulla fringilla elit non erat finibus, id eleifend erat pretium. </p>
                </div>


                <Image src={imagemQualidade} alt="imagem da recepção" />

            </div>
        </div>
    );
}