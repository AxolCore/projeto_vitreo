import CardOlho from "./CardOlho";

export default function CardOlhosSection() {
    return (
        <div className="flex flex-row mobile:flex-col justify-center w-[70vw] mobile:w-screen items-center b-blue-700 mb-8 animate-revelar-esquerda gap-16 my-16">
            <CardOlho titulo={"Nossos serviços"} paragrafo={"Com a experiência de 35 anos em diagnóstico e tratamento clínico e cirúrgico de doenças vitreorretinianas, a Clínica de Retina e Vítreo oferece aos seus pacientes inúmeros serviços."} />
            <CardOlho titulo={"Estrutura"} paragrafo={"A Retina e Vítreo Consultoria possui uma área de 600 m2, com centro diagnóstico e terapêutico moderno. A clínica conta com um centro de eletrofisiologia ocular capaz de realizar exames"} />
            <CardOlho titulo={"Problemas e tratamentos"} paragrafo={"A Clínica de Retina e Vítreo realiza diversas cirurgias, utilizando equipamentos modernos e de última tecnologia."} />
        </div>
    );
}