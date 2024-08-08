'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function NavBar() {
    const icone = require('../../public/assets/logo-horizontal2.jpg')
    const infoBoxMSG = require('../../public/assets/mensagem.png')
    const infoBoxLigar = require('../../public/assets/ligar.png')
    const formsIcon = require('../../public/assets/contact-form.png')
    const [listaDisplay, setListaDisplay] = useState(false);

    function chamaLista() {

        let listaDisplay = document.getElementById('listaul')
        if (listaDisplay) {
            listaDisplay.style.display = 'block'
        }
    }

    function mostraLista() {
        setListaDisplay(true);
    }

    function escondeLista() {
        setListaDisplay(false);
    }

    return (
        <><header className="w-screen bg-[#ffffff] flex justify-center items-center p-2">
            <div className="w-[60vw] bg-white flex justify-between items-center text-black mobile:flex-col">
                <Image className="mr-2 my-auto w-[20vw] mobile:w-[90vw] aspect-[466/68]" src={icone} alt="logo"></Image>
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
                <button className="flex items-center justify-center gap-1 bg-lightgray ml-2 w-44 h-10 rounded-2xl">
                    <div>Entre em contato</div>
                    <Image className="w-5 h-5 top-[30%] right-4" src={formsIcon} alt="formulário" />
                </button>
            </div>

        </header>
            <nav className="bg-darkblue py- text-white">
                <ul className="flex justify-center">
                    <li className=" border-r-2 py-4 px-4 border-l-2"><Link href={"/"}>INÍCIO</Link></li>
                    <li onMouseEnter={mostraLista}
                        onMouseLeave={escondeLista} className="px-4 border-r-2 py-4 " >A CLÍNICA
                        <ul id="listaul" style={{ display: listaDisplay ? 'block' : 'none' }} className="absolute bg-darkblue mt-2">
                            <li className="w-fit mt-2 hover:text list-none m-2 border-y-2"><Link href={"/"}>QUEM SOMOS</Link></li>
                            <li className="w-fit hover:t list-none m-2 border-y-2"><Link href={"/"}>ESTRUTURA</Link></li>
                            <li className="w-fit hover:t list-none m-2 border-y-2"><Link href={"/"}>CONVÊNIOS</Link></li>
                        </ul>
                    </li>

                    <li className="px-4 border-r-2  py-4  "><Link href={"/"}>NOSSA EQUIPE</Link></li>
                    <li className="px-4 border-r-2 py-4 "><Link href={"/"}>NOSSOS SERVIÇOS</Link></li>
                </ul>
            </nav></>
    );
}