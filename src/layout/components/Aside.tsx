import { NavLink } from "react-router";

export default function Aside() {
    return (
        <aside className="max-w-as w-full fixed left-0 top-0 bottom-0 bg-white px-4 py-8 border-r border-r-secondary-100">
            <nav className="w-full h-full flex flex-col justify-between">
                <ul className="flex flex-col gap-y-2">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive
                            ? 'w-full flex items-center gap-x-2 px-4 py-2 rounded-lg font-semibold bg-primary text-white'
                            : 'w-full flex items-center gap-x-2 px-4 py-2 rounded-lg font-semibold text-secondary-500 hover:bg-primary hover:text-white transition duration-200'}>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="projects" className={({ isActive }) => isActive
                            ? 'w-full flex items-center gap-x-2 px-4 py-2 rounded-lg font-semibold bg-primary text-white'
                            : 'w-full flex items-center gap-x-2 px-4 py-2 rounded-lg font-semibold text-secondary-500 hover:bg-primary hover:text-white transition duration-200'}>Proyectos</NavLink>
                    </li>
                    <li>
                        <NavLink to="categories" className={({ isActive }) => isActive
                            ? 'w-full flex items-center gap-x-2 px-4 py-2 rounded-lg font-semibold bg-primary text-white'
                            : 'w-full flex items-center gap-x-2 px-4 py-2 rounded-lg font-semibold text-secondary-500 hover:bg-primary hover:text-white transition duration-200'}>Categorias</NavLink>
                    </li>
                </ul>

                <ul>
                    <li>
                        <NavLink to="profile" className={({ isActive }) => isActive
                            ? 'w-full flex items-center gap-x-2 px-4 py-2 rounded-lg font-semibold bg-primary text-white'
                            : 'w-full flex items-center gap-x-2 px-4 py-2 rounded-lg font-semibold text-secondary-500 hover:bg-primary hover:text-white transition duration-200'}>Perfil</NavLink>
                    </li>
                    <li>
                        <button className="w-full flex items-center gap-x-2 px-4 py-2 rounded-lg font-semibold text-secondary-500 hover:bg-primary hover:text-white active:bg-primary transition duration-200">Cerrar Sesión</button>
                    </li>
                </ul>
            </nav>
        </aside >
    )
}
