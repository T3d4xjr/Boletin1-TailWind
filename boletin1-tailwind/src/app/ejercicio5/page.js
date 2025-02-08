"use client"
export default function Dashboard() {
  return (
    <div className="flex h-screen bg-background">
      <aside className="w-64 bg-primary text-white p-6 fixed h-full">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <nav className="mt-8">
          <ul>
            <li className="mb-4">
              <a href="#" className="hover:text-secondary">Inicio</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:text-secondary">Usuarios</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:text-secondary">Reportes</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:text-secondary">Configuración</a>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="ml-64 flex-1 p-8">
        <header className="bg-primary text-white p-4 shadow-lg fixed w-full top-0 left-0 z-10">
          <h1 className="text-2xl font-bold">Bienvenido al Dashboard</h1>
        </header>
        <main className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
 
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-dark">Ventas del Mes</h3>
            <p className="mt-2 text-4xl text-primary">1500</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-dark">Usuarios Activos</h3>
            <p className="mt-2 text-4xl text-primary">320</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-dark">Nuevas Suscripciones</h3>
            <p className="mt-2 text-4xl text-primary">85</p>
          </div>
        </main>

        <div className="mt-8 overflow-scroll bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-dark">Últimas Actividades</h2>
          <table className="w-full mt-4 table-auto">
            <thead className="bg-primary text-white">
              <tr>
                <th className="py-2 px-4">ID</th>
                <th className="py-2 px-4">Nombre</th>
                <th className="py-2 px-4">Fecha</th>
                <th className="py-2 px-4">Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">1</td>
                <td className="py-2 px-4">Juan Pérez</td>
                <td className="py-2 px-4">2025-02-07</td>
                <td className="py-2 px-4 text-green-500">Activo</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">2</td>
                <td className="py-2 px-4">Maria Gómez</td>
                <td className="py-2 px-4">2025-02-06</td>
                <td className="py-2 px-4 text-red-500">Inactivo</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">3</td>
                <td className="py-2 px-4">Carlos López</td>
                <td className="py-2 px-4">2025-02-05</td>
                <td className="py-2 px-4 text-green-500">Activo</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">4</td>
                <td className="py-2 px-4">Ana Martínez</td>
                <td className="py-2 px-4">2025-02-04</td>
                <td className="py-2 px-4 text-green-500">Activo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
