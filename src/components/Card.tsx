import React from "react";

//define o formato do componente card
export type CardProps = {
  titulo: string;
  descricao: string;
  imagem: string;
}
//:CardProps é o tipo esperado pra cada prop dessa (titulo, imagem e descricao)
export default function Card ({titulo, descricao, imagem}: CardProps) { 
  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-sm mx-auto">
      <img src={imagem} alt={titulo} className="w-full h-40 object-cover rounded-md mb-4" />
      <h2 className="text-lg font-bold text-gray-800 mb-2">{titulo}</h2>
      <p className="text-gray-600 text-sm">{descricao}</p>
    </div>
  )
}