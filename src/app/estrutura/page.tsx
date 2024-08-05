import Image from "next/image";

export default function Estrutura() {
    const cardImage = require('../../../public/assets/imagemCard.png')
    const iconeCard = require('../../../public/assets/iconePlaceHolder.png')
    const imagemQualidade = require('../../../public/assets/imagemTerceiraSectionEstrutura.png')
    return (
        <div className="mx-auto w-[60%] b-yellow-300 mt-4">
            <div className="mb-20">
                <h1 className="text-[#6462AB] text-4xl mb-4 "><span className="border-t-[3px] border-x-darkblue">Nossas</span> instalações</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu vulputate erat. Vivamus tristique orci metus, <br /> faucibus fringilla ex pharetra sed. Nulla fringilla elit non erat finibus, id eleifend erat pretium. </p>

            </div>

            <div className="flex gap-16  b-green-500 h-auto mx-auto max-w-[1152px] ">
                <div className="sombra flex flex-col items-center bg-darkblue w-[30%] rounded-2xl gap-4 "> {/* inline seria: style={{boxShadow: '-25px -25px 0px #fff'}} */}
                    <Image className="mt-4" alt='ícone' src={iconeCard} />

                    <p className="w-[80%] m-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu vulputate erat. Vivamus tristique orci metus, faucibus fringilla ex pharetra sed</p>
                    <div className=" bg-red-600 rounded-2xl h-64"><Image className="h-full rounded-2xl" alt='card' src={cardImage} /></div>


                </div>

                <div className="sombra flex flex-col items-center bg-darkblue w-[30%] rounded-2xl gap-4 "> {/* inline seria: style={{boxShadow: '-25px -25px 0px #fff'}} */}

                    <div className=" bg-red-600 rounded-2xl h-64"><Image className="h-full rounded-2xl" alt='card' src={cardImage} /></div>

                    <p className="w-[80%] m-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu vulputate erat. Vivamus tristique orci metus, faucibus fringilla ex pharetra sed</p>
                    <Image className="mt-4" alt='ícone' src={iconeCard} />

                </div>

                <div className="sombra flex flex-col items-center bg-darkblue w-[30%] rounded-2xl gap-4 "> {/* inline seria: style={{boxShadow: '-25px -25px 0px #fff'}} */}
                    <Image className="mt-4" alt='ícone' src={iconeCard} />

                    <p className="w-[80%] m-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu vulputate erat. Vivamus tristique orci metus, faucibus fringilla ex pharetra sed</p>
                    <div className=" bg-red-600 rounded-2xl h-64"><Image className="h-full rounded-2xl" alt='card' src={cardImage} /></div>


                </div>

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