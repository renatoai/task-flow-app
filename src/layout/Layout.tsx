import { Outlet } from "react-router";
import Aside from "./components/Aside";


export default function Layout() {

    return (
        <>
            <Aside />
            <div className="ml-0 flex flex-col gap-y-6 md:ml-(--max-width-as)">
                <header className="w-full bg-white sticky top-0 flex justify-between items-center border-b border-b-secondary-100 px-4 py-4 md:z-10 md:px-6">
                    <h2 className="text-2xl font-semibold text-secondary-900">Bienvenido de Nuevo 👋</h2>
                    <div className="flex items-center gap-x-2">
                        <div className="w-prof h-prof bg-secondary-100 rounded-full overflow-hidden">
                            <img src="./user.jpg" alt="" />
                        </div>
                        <div className="hidden md:flex flex-col">
                            <h2 className="font-semibold text-secondary-500">Renato</h2>
                            <span>Renato@gmail.com</span>
                        </div>
                    </div>
                </header>
                <main className="max-w-main w-full mx-auto mb-8 flex flex-col gap-y-6 px-4 md:z-0 md:px-6">
                    <Outlet />
                </main>
            </div>
        </>
    )
}
