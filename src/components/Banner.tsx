import Image from "next/image";

export default function Banner(){
    const imagemBanner = require('../../public/assets/ImagemBanner.jpg')
    return(
        <div className="flex justify-center items-center w-screen h-screen bg-fundoBanner bg-no-repeat text-white ">
            <div className=" flex flex-col items-center w-1/2 h-1/2 gap-4 font-semibold">
                <h1 className="text-2xl uppercase border-y-2 p-2 ">a clínica</h1>
                <p className="text-center">Referência no diagnóstico e tratamento das doenças da retina e do vítreo, a Retina e Vítreo Consultoria conta com médicos renomados na área de doenças da retina e vítreo.</p>
                <div>
                    <button className="bg-darkblue">Saiba mais</button>
                    <button>Entre em contato</button>
                </div>
            </div>
          
        </div>
    );
}