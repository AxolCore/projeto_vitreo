'use client'
import ContatoCard from "@/components/ContatoCard";
import { Alert, TextField } from "@mui/material"
import { useState } from "react"

interface DadosProps {
    nome: string,
    email: string,
    telefone: string,
    mensagem: string,
}

export default function ContatoPage() {

    const [dados, setDados] = useState<DadosProps>({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
    })

    return (
        <div className="grid desktop:grid-cols-3 mobile:grid-cols-1">
            <div className="desktop:col-span-2 flex flex-col items-center">
                <div className="desktop:w-[40vw] mobile:w-[90vw] flex flex-col space-y-8 my-8 mobile:items-center">
                    <label className="text-4xl font-bold text-darkblue">Contato</label>
                    <p className="text-base font-normal text-darkgray">Entre em contato pelo telefone ou e-mail, ou preencha o formulario abaixo.</p>
                    <TextField className="mobile:w-[90vw]" variant="outlined" label="Nome" value={dados.nome} placeholder="João Silva" onChange={(e) => { setDados({ ...dados, nome: e.target.value }) }} />
                    <TextField className="mobile:w-[90vw]" variant="outlined" label="Email" value={dados.email} placeholder="joaosilva@email.com" onChange={(e) => { setDados({ ...dados, email: e.target.value }) }} />
                    <TextField className="mobile:w-[90vw]" variant="outlined" label="Telefone" value={dados.telefone} placeholder="00991234567" onChange={(e) => { setDados({ ...dados, telefone: e.target.value }) }} />
                    <TextField className="mobile:w-[90vw]" variant="outlined" label="Mensagem" multiline maxRows={1} inputProps={{ style: { scrollbarWidth: "thin", minHeight: 80, maxHeight: 80 } }} value={dados.mensagem} placeholder="Mensagem..." onChange={(e) => { setDados({ ...dados, mensagem: e.target.value }) }} />
                    <button className="desktop:w-[10vw] mobile:w-[90vw] p-3 bg-darkblue text-white rounded-lg shadow shadow-black hover:scale-105 active:bg-darkgray">Enviar</button>
                </div>
            </div>
            <ContatoCard />
        </div>
    )
}