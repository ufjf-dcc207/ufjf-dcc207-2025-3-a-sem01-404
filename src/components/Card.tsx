import React from "react";

//definicao das props que o componente vai aceitar
interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article"; //define a tag HTML que o componente deve usar
}

//criacao do componente em si usando FC e desestruturacao dnv
const Card: React.FC<CardProps> = ({
  children,
  className = "", //valor padrao pra evitaar erro
  as = "div", //valor padrao pra evitar erro
}) => {

  //agora transorma a string "div" / "section" / "article" em uma tag dinamica 
  //isso permite escrever <Component> no JSX e o react entende qual tag usar
  //ex simples: Se as="section", o JSX vira <section>...</section>.
  const Component: React.ElementType = as;

  //retorno do JSX -> tudo que colocado aqui será mostrado na tela
  return (
    <Component className={`bg-white rounded-2xl shadow-sm p-4 ${className}`}>
      {children}
    </Component>
  );
};

export default Card