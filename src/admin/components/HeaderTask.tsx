interface HeaderTaskProps {
    status: string;
    title: string;
    tasks: number;
    to: string;
}
export default function HeaderTask({ status, title, tasks, to }: HeaderTaskProps) {
    // Función que devuelve la clase de color según el estado
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Pendiente':
                return 'bg-red-800'; // Color rojo para "Pendiente"
            case 'En Progreso':
                return 'bg-orange-800'; // Color naranja para "En Progreso"
            case 'Completado':
                return 'bg-green-800'; // Color verde para "Completado"
            default:
                return 'bg-gray-400'; // Color gris por defecto, en caso de un estado no válido
        }
    };

    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-4">
                <div className="flex items-center gap-x-2">
                    <span className={`w-2 h-2 rounded-full ${getStatusColor(status)}`}></span>
                    <h3 className="text-lg text-secondary-900 font-semibold">{title}</h3>
                </div>
                <span className="bg-secondary-100 text-sm text-secondary-900 font-semibold px-2 py-1 rounded-lg">{tasks}</span>
            </div>

            <a href={to} className="p-1 border border-secondary-100 rounded-lg hover:border-secondary-200 transition duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 12H12M12 12H6M12 12V6M12 12V18" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" />
                </svg>
            </a>
        </div>
    )
}
