'use client'
import { useState } from "react"
import Image from "next/image"

export default function Chatbot() {

    const [ativo, setAtivo] = useState(false);
    const icone = require("../../public/assets/chatbot.png");

    return (
        <>
            <button className={`w-16 aspect-square rounded-full bg-darkblue fixed bottom-10 right-2 ${!ativo && "animate-bounce"}`} onClick={() => setAtivo(!ativo)}><Image className="p-2 invert" src={icone} alt="chatbot"/></button>
            <iframe
                className={`w-[20vw] h-[500px] fixed bottom-10 right-20 rounded-lg ${ativo ? "inline-block" : "hidden"}`}
                src="https://www.chatbase.co/chatbot-iframe/-p-_P_jmz8i6yjylNa6iC"
            ></iframe>
        </>
    )
}