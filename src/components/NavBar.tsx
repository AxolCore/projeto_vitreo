import Image from "next/image";

export default function NavBar() {
    const icone = require('../../public/assets/logo-horizontal2.jpg')
    const infoBoxMSG = require('../../public/assets/mensagem.png')
    const infoBoxLigar = require('../../public/assets/ligar.png')

    

    return (
        <><header className="w-screen h-[10vh] bg-[#ffffff] flex justify-center items-center">
            <div className="w-[50vw] bg-white flex justify-between text-black">
                <Image className="w-[10vw] h-[7vh] my-auto" src={icone} alt="logo"></Image>
                <div className="g-green-600 flex items-center ">
                    <div className="ml-4 w-[1vw]"><Image src={infoBoxMSG} alt="ícone de carta"></Image></div>
                    <div className="ml-4 flex flex-col justify-center">
                        <label>41 3078-4800</label>
                        <label>WHATSAPP: 41 98895-9094</label>
                    </div>


                </div>

                <div className="ml-4 flex items-center">
                    <div className=" w-[1vw] mr-4"><Image src={infoBoxLigar} alt="ícone de telefone"></Image></div>
                    <div className="flex flex-col justify-center">
                        <label>41 3078-4800</label>
                        <label>WHATSAPP: 41 98895-9094</label>
                    </div>


                </div>
                <button className="bg-red-600 w-[10%] h-10">botão</button>
            </div>

        </header>
            <nav className="bg-blue-500">
                <ul className="flex justify-center">
                    <li className="mx-4 ">INÍCIO</li>
                    <li className="mx-4 " >A CLÍNICA

                       {/*} <ul className="">
                            <li>QUEM SOMOS</li>
                            <li>ESTRUTURA</li>
                            <li>CONVÊNIOS</li>
                        </ul>*/}
                    </li>
        
                    <li className="mx-4 ">NOSSA EQUIPE</li>
                    <li className="mx-4 ">NOSSOS SERVIÇOS</li>
                    <li className="mx-4 "></li>
                </ul>
            </nav></>
    );
}