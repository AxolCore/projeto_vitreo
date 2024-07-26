interface DadosProps {
    dado: string,
    label: string
}

export default function Dados({dado, label}: DadosProps){
    return(
        <div className="flex flex-col items-center text-center">
            <label className="text-3xl font-bold text-darkblue">{dado}</label>
            <label>{label}</label>
        </div>
    )
}