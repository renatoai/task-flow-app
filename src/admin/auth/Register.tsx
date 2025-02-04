import { Link } from "react-router";

export default function Register() {
    return (
        <div className="w-full grid grid-cols-2 justify-center bg-white">
            <div className="max-w-[350px] w-full mx-auto flex flex-col justify-center items-center gap-y-6">
                <div className="w-full flex flex-col items-start gap-y-2">
                    <h2 className="text-3xl font-bold text-secondary-500">Registrarse</h2>
                    <p>Ingrese los campos para registrarse</p>
                </div>
                <form action="/admin" className="w-full flex flex-col gap-y-6">
                    <div className="w-full flex items-center gap-x-6">
                        <div className="w-full flex flex-col items-start gap-y-1">
                            <label htmlFor="" className="font-semibold text-base text-secondary-500">Nombre</label>
                            <input type="email" placeholder="Nombre" className="w-full px-4 py-3 rounded-xl border border-secondary-100 hover:outline hover:outline-primary hover:border-primary focus:outline focus:outline-primary focus:border-primary placeholder:text-secondary-200/50 transition duration-200" />
                        </div>

                        <div className="w-full flex flex-col items-start gap-y-1">
                            <label htmlFor="" className="font-semibold text-base text-secondary-500">Apellido</label>
                            <input type="email" placeholder="Apellido" className="w-full px-4 py-3 rounded-xl border border-secondary-100 hover:outline hover:outline-primary hover:border-primary focus:outline focus:outline-primary focus:border-primary placeholder:text-secondary-200/50 transition duration-200" />
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-start gap-y-1">
                        <label htmlFor="" className="font-semibold text-base text-secondary-500">Email</label>
                        <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-secondary-100 hover:outline hover:outline-primary hover:border-primary focus:outline focus:outline-primary focus:border-primary placeholder:text-secondary-200/50 transition duration-200" />
                    </div>

                    <div className="w-full flex flex-col items-start gap-y-1">
                        <label htmlFor="" className="font-semibold text-base text-secondary-500">Contraseña</label>
                        <input type="password" placeholder="Contraseña" className="w-full px-4 py-3 rounded-xl border border-secondary-100 hover:outline hover:outline-primary hover:border-primary focus:outline focus:outline-primary focus:border-primary placeholder:text-secondary-200/50 transition duration-200" />
                    </div>
                    <button type="submit" className="w-full bg-primary px-4 py-3 rounded-xl border border-primary text-white font-semibold  hover:cursor-pointer hover:bg-primary-900 transition duration-200">Iniciar Sesión</button>
                </form>
                <span>Ya tiens cuenta? <Link to="/login" className="font-semibold text-primary hover:text-primary-900 transition duration-200">Iniciar Sesión</Link></span>
            </div>
            <div className="bg-primary h-screen flex flex-col justify-center items-center gap-y-6 ">
                <img src="/wirefrime-alphaui.png" alt="" className="" />
                <div className="max-w-[474px] w-full flex flex-col gap-y-6">
                    <div className="max-w-474px w-full flex flex-col gap-y-2">
                        <h2 className="text-xl font-semibold text-white text-center 2xl:text-3xl">Bienvenido a nuestra aplicación</h2>
                        <p className="text-[#C9CCFF] text-center">Inicia sesión para explorar los cambios que hemos realizado y disfrutar de las nuevas funciones implementadas.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
