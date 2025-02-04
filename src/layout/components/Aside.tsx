import { useState } from "react";
import { NavLink } from "react-router";

export default function Aside() {
    const [menu, setMenu] = useState(false);
    console.log(menu)

    return (
        <aside className={menu ? "max-w-as w-full fixed left-0 top-0 bottom-0 bg-white px-4 py-8 border-r border-r-secondary-100 transition duration-300 ease-in-out" : "max-w-as w-full fixed -left-full top-0 bottom-0 bg-white px-4 py-8 border-r border-r-secondary-100 transition duration-300 ease-in-out md:opacity-100 md:left-0"}>
            <nav className="w-full h-full flex flex-col justify-between" onClick={() => setMenu(!menu)}>
                <ul className="flex flex-col gap-y-2">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive
                            ? 'w-full flex items-center gap-x-2 px-4 py-2 rounded-lg font-semibold bg-primary text-white'
                            : 'w-full flex items-center gap-x-2 px-4 py-2 rounded-lg font-semibold text-secondary-500 hover:bg-primary hover:text-white transition duration-200'}>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={({ isActive }) => isActive
                            ? 'w-full flex items-center gap-x-2 px-4 py-2 rounded-lg font-semibold bg-primary text-white'
                            : 'w-full flex items-center gap-x-2 px-4 py-2 rounded-lg font-semibold text-secondary-500 hover:bg-primary hover:text-white transition duration-200'}>Proyectos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tags" className={({ isActive }) => isActive
                            ? 'w-full flex items-center gap-x-2 px-4 py-2 rounded-lg font-semibold bg-primary text-white'
                            : 'w-full flex items-center gap-x-2 px-4 py-2 rounded-lg font-semibold text-secondary-500 hover:bg-primary hover:text-white transition duration-200'}>Categorias</NavLink>
                    </li>
                </ul>

                <ul>
                    <li>
                        <NavLink to="/profile" className={({ isActive }) => isActive
                            ? 'w-full flex items-center gap-x-2 px-4 py-2 rounded-lg font-semibold bg-primary text-white'
                            : 'w-full flex items-center gap-x-2 px-4 py-2 rounded-lg font-semibold text-secondary-500 hover:bg-primary hover:text-white transition duration-200'}>Perfil</NavLink>
                    </li>
                    <li>
                        <button className="w-full flex items-center gap-x-2 px-4 py-2 rounded-lg font-semibold text-secondary-500 hover:bg-primary hover:text-white active:bg-primary transition duration-200">Cerrar Sesión</button>
                    </li>
                </ul>
            </nav>
            <button onClick={() => setMenu(!menu)} className="font-bold fixed z-50 right-20 top-5 p-2 bg-primary rounded-lg text-white md:hidden">
                {
                    menu ?
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 12C2 7.286 2 4.929 3.464 3.464C4.93 2 7.286 2 12 2C16.714 2 19.071 2 20.535 3.464C22 4.93 22 7.286 22 12C22 16.714 22 19.071 20.535 20.535C19.072 22 16.714 22 12 22C7.286 22 4.929 22 3.464 20.535C2 19.072 2 16.714 2 12Z" stroke="white" stroke-width="1.5" />
                            <path d="M14.5 9.5L9.5 14.5M9.5 9.5L14.5 14.5" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                        :
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 18.005C22 18.555 21.554 19 21.005 19H12.995C12.7311 19 12.478 18.8952 12.2914 18.7086C12.1048 18.522 12 18.2689 12 18.005C12 17.7411 12.1048 17.488 12.2914 17.3014C12.478 17.1148 12.7311 17.01 12.995 17.01H21.005C21.555 17.01 22 17.455 22 18.005ZM22 12C22 12.55 21.554 12.995 21.005 12.995H2.995C2.73111 12.995 2.47803 12.8902 2.29143 12.7036C2.10483 12.517 2 12.2639 2 12C2 11.7361 2.10483 11.483 2.29143 11.2964C2.47803 11.1098 2.73111 11.005 2.995 11.005H21.005C21.555 11.005 22 11.451 22 12ZM21.005 6.99C21.2689 6.99 21.522 6.88517 21.7086 6.69857C21.8952 6.51197 22 6.25889 22 5.995C22 5.73111 21.8952 5.47803 21.7086 5.29143C21.522 5.10483 21.2689 5 21.005 5H8.995C8.86433 5 8.73495 5.02574 8.61423 5.07574C8.49351 5.12574 8.38382 5.19903 8.29143 5.29143C8.19903 5.38382 8.12574 5.49351 8.07574 5.61423C8.02574 5.73495 8 5.86433 8 5.995C8 6.12567 8.02574 6.25505 8.07574 6.37577C8.12574 6.49649 8.19903 6.60618 8.29143 6.69857C8.38382 6.79097 8.49351 6.86426 8.61423 6.91426C8.73495 6.96426 8.86433 6.99 8.995 6.99H21.005Z" fill="white" />
                        </svg>

                }
            </button>
        </aside >
    )
}