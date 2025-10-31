import Card from "../components/Card";
import Button from "../components/button";

export default function DashboardPage() {
  return (
    //div principal
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* painel central */}
      <div className="max-w-4x1 w-full bg-white rounded-lg shadow-md p-6">
        {/* titulo da pag */}
        <h1 className="text-2x1 font-bold text-center text-blue-700 mb-6">
          Plano de Medicação Diária
        </h1>
        {/* container pros card dos medicamentos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* card 1 */}
          <Card
            titulo="Losartana 50mg"
            descricao="Tomar 1 comprimido às 08:00"
            imagem="/assets/colocar-foto-remedio.jpg"
          />
          {/* card 2 */}
          <Card
            titulo="Vitaminda D"
            descricao="Tomar 1 cápsula às 18:00"
            imagem="/assets/colocar-foto-remedio.jpg"
          />
          {/* card 3 */}
          <Card
            titulo="Dipirona 200mg"
            descricao="Tomar 1 comprimido às 20:00"
            imagem="/assets/colocar-foto-remedio.jpg"
          />
        </div>
        {/* div pro botao */}
        <div className="mt-8 flex justify-center">
          <Button texto="Adicionar novo medicamento" />
        </div>
      </div>
    </div>
  );
}
