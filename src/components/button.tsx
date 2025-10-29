import React from "react"

type ButtonVariant = "primary" | "secondary" //possiveis variantes do botão

//agora começa a definir as props do componente extendendo todas as props nativas de um <button> (como o onClick, disabled, etc.) além das que vão ser definidas na interface
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant //prop opcional para estilizar o botão
    className?: string //permite passar classes adicionais do tailwind
    children: React.ReactNode //define o que vai aparecer dentro do botão (texto, ícone, etc), e é obrigatório.
}

//FC => functional component => função que devolve JSX
//<ButtonProps> => usa as props descritas em ButtonProps 
//quando se faz ({}), significa uma desestruturação das props
const Button: React.FC <ButtonProps> = ({
    variant = "primary", //se nada for passado, o botao sera primario
    className = "", //evita erro se nao for passado classe
    children,
    ...rest //guarda as outras props que nao foram listadas
}) => {
    //baseClasses => classes que todos botoes terao.
    const baseClasses = "inline-flex items-center justify-center px-4 py-2 rounded-2xl text-sm font-medium transition-shadow focus:outline-none"
    
    //aqui usando ternario, se variant === primary usa o primeiro conjunto de classes, se nao, usa o outro
    const variantClasses = variant === "primary" ? "bg-emerald-500 text-white shadow hover:shadow-md" : "bg-white text-slate-700 border border-slate-200 shadow-sm hover:shadow"

    //agora, é juntado tudo => as classes base, as classes da variante escolhida e as classes extras passadas
    const classes = `${baseClasses} ${variantClasses} ${className}`

    //aqui o componente retorna um JSX (o que vai aparecer na tela)
    //<button> => é o elemento HTML que será mostrado.
    //className = classes ==> faz aplicar os estilos 
    // ...rest faz aplicar todas as outras orps que vieram
    //{children} insere o conteudo que tiver entre as tags
    return (
        <button className={classes} {...rest}>
            {children}
        </button>
    )
}

export default Button