'use client'
import { useEffect, useState } from "react";
import Convenio from "./Convenio";

export default function ConveniosSection() {

    const [visivel, setVisivel] = useState(false);

    useEffect(() => {
        setInterval(()=>{
            let scroll = document.getElementById("convenios")?.getBoundingClientRect().top;
            setVisivel(scroll != undefined && scroll < 600);
        },500)
    })

    const convenios = [
        [
            {
                imagem: require("../../public/assets/convenios/bradesco.png"),
                alt: "Bradesco",
                link: "https://wwws.bradescosaude.com.br/PCBS-LoginSaude/td/inicioLoginSegurado.do"
            },
            {
                imagem: require("../../public/assets/convenios/cassi.png"),
                alt: "Cassi",
                link: "http://www.cassi.com.br/"
            },
            {
                imagem: require("../../public/assets/convenios/amil.png"),
                alt: "Amil",
                link: "https://www.amil.com.br/"
            },
            {
                imagem: require("../../public/assets/convenios/parana-clinicas.png"),
                alt: "Paraná Clinicas",
                link: "www.paranaclinicas.com.br/"
            },
            {
                imagem: require("../../public/assets/convenios/unimed.png"),
                alt: "Unimed Curitiba",
                link: "https://www.unimedcuritiba.com.br/"
            }
        ],
        [
            {
                imagem: require("../../public/assets/convenios/carpenter.jpg"),
                alt: "The Art of Woodworking",
                link: "/"
            },
            {
                imagem: require("../../public/assets/convenios/farmers-market.jpg"),
                alt: "Farmers Market",
                link: "/"
            },
            {
                imagem: require("../../public/assets/convenios/bicycle-garage.jpg"),
                alt: "Bicycle Garage",
                link: "/"
            },
            {
                imagem: require("../../public/assets/convenios/salty-sailor.jpg"),
                alt: "The Salty Sailor",
                link: "/"
            },
            {
                imagem: require("../../public/assets/convenios/gentleman-barber.jpg"),
                alt: "Gentleman's Barber",
                link: "/"
            },
        ]
    ]





    return (
        <div id="convenios" className={`w-[60vw] flex flex-col items-center transition-opacity duration-1000" ${visivel? "opacity-100" : "opacity-0"}`}>
            <label className="text-3xl font-bold text-darkgray text-center mt-12 mb-6">NOSSOS CONVÊNIOS</label>
            <span className="w-[5vw] border-b-2 border-darkgray"></span>
            <label className="text-darkblue text-center mt-12 mb-6">Confira os convênios aceitos em nossa clinica</label>

            <div className="desktop:w-[60vw] mobile:w-[90vw] flex desktop:flex-row mobile:flex-col items-center justify-evenly my-12 border-t border-dotted">
                <div className="divide-y divide-gray divide-solid grid grid-cols-1 border-b border-dotted mt-12">
                    {
                        convenios.map((i, index) => {
                            return (
                                <div key={index} className="divide-x divide-gray divide-solid grid grid-cols-5">
                                    {
                                        i.map((j, index2) => <Convenio key={index2} imagem={j.imagem} alt={j.alt} link={j.link} />)
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}