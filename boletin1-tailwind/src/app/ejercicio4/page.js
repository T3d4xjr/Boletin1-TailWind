export default function Blog() {
    return (
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 p-8 text-center text-white">
          <h1 className="text-4xl font-bold">Blog de Tecnología</h1>
          <p className="mt-4 text-xl">Últimas tendencias, noticias y artículos del mundo tech</p>
        </header>
  
        <div className="flex flex-col md:flex-row p-8 space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1 flex flex-col space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold">El futuro de la IA</h2>
              <p className="mt-2">En este artículo, exploramos cómo la inteligencia artificial transformará industrias...</p>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold">Computación Cuántica: ¿Qué es y por qué es importante?</h2>
              <p className="mt-2">La computación cuántica promete cambiar la forma en que resolvemos problemas complejos...</p>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold">5 Lenguajes de Programación en Ascenso</h2>
              <p className="mt-2">Te contamos cuáles son los lenguajes que están ganando popularidad en la comunidad de desarrollo...</p>
            </div>
          </div>

          <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Enlaces Relacionados</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-blue-600 hover:text-blue-800">¿Cómo elegir tu primer lenguaje de programación?</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800">Tendencias en inteligencia artificial para 2025</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800">Desarrollo Web vs. Desarrollo Móvil</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800">Top 10 recursos gratuitos para aprender a programar</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800">La evolución de la nube: ¿Qué viene después?</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  