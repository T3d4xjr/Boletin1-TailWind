export default function Card() {
    return (
      <div className="max-w-sm bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="font-bold text-xl mb-2">Título del Card</h2>
        <p className="text-gray-600 text-base">
          Este es un ejemplo de una tarjeta creada con Tailwind CSS.
        </p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Ver más
        </button>
      </div>
    );
  }