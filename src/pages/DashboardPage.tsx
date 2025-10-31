import Card from "../components/Card";
import Button from "../components/button";
import dadosPlano from "../data/dadosPlano.json"

export default function DashboardPage() {
  return (
    // div principal
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* painel central */}
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-6">
        {/* título da página */}
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Plano de Medicação Diária
        </h1>

        {/* container pros cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* .map percorre cada objeto dentro do array vindo do JSON */}
          {dadosPlano.map((item) => (
            <Card
              key={item.id}
              titulo={item.titulo}
              descricao={item.descricao}
              imagem={`/assets/${item.imagem}`}
            />
          ))}
        </div>

        {/* botão */}
        <div className="mt-8 flex justify-center">
          <Button texto="Adicionar novo medicamento" />
        </div>
      </div>
    </div>
  );
}
