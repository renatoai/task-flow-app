
export default function Dashboard() {
  return (
    <>
      <h2 className="text-secondary-900 text-2xl font-semibold">Dashboard</h2>
      <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
        <div className="w-full bg-white p-6 flex flex-col gap-6 rounded-2xl border border-secondary-100">
          <h3 className="text-xl text-secondary-900 font-semibold">Estadísticas del Proyecto</h3>

          <div className="flex justify-between items-center flex-wrap gap-6">
            <div className="flex items-center gap-x-2">
              <div className="w-12 h-12 bg-blue-100 flex justify-center items-center border border-blue-600 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 14H12M12 14H14M12 14V16M12 14V12" stroke="#4171C3" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M2 6.95C2 6.067 2 5.626 2.07 5.258C2.21922 4.46784 2.60314 3.741 3.17165 3.17231C3.74017 2.60361 4.46689 2.21947 5.257 2.07C5.626 2 6.068 2 6.95 2C7.336 2 7.53 2 7.716 2.017C8.51705 2.09223 9.27679 2.40728 9.896 2.921C10.04 3.04 10.176 3.176 10.45 3.45L11 4C11.816 4.816 12.224 5.224 12.712 5.495C12.9802 5.64449 13.2648 5.7626 13.56 5.847C14.098 6 14.675 6 15.828 6H16.202C18.834 6 20.151 6 21.006 6.77C21.0853 6.84 21.16 6.91467 21.23 6.994C22 7.849 22 9.166 22 11.798V14C22 17.771 22 19.657 20.828 20.828C19.656 21.999 17.771 22 14 22H10C6.229 22 4.343 22 3.172 20.828C2.001 19.656 2 17.771 2 14V6.95Z" stroke="#4171C3" stroke-width="1.5" />
                </svg>
              </div>

              <div className="flex flex-col gap-y-1">
                <h2 className="text-lg text-secondary-500 font-semibold ">25 Proyectos</h2>
                <span>En 40 dias</span>
              </div>
            </div>

            <div className="flex items-center gap-x-2">
              <div className="w-12 h-12 bg-green-200 flex justify-center items-center border border-green-600 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12.9L7.143 16.5L15 7.5M20 7.563L11.428 16.563L11 16" stroke="#319C58" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </div>

              <div className="flex flex-col gap-y-1">
                <h2 className="text-lg text-secondary-500 font-semibold ">Completados</h2>
                <span>En 40 dias</span>
              </div>
            </div>

          </div>
          <div className="flex justify-between items-center flex-wrap gap-6">
            <div className="flex items-center gap-x-2">
              <div className="w-12 h-12 bg-orange-200 flex justify-center items-center border border-orange-600 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.258 3.508C18.3951 3.56477 18.5122 3.66091 18.5946 3.78426C18.677 3.90762 18.721 4.05264 18.721 4.201V8.444C18.721 8.64291 18.642 8.83367 18.5013 8.97433C18.3607 9.11498 18.1699 9.194 17.971 9.194H13.728C13.5798 9.19387 13.4349 9.14981 13.3117 9.06739C13.1884 8.98497 13.0924 8.86788 13.0357 8.73092C12.979 8.59396 12.9641 8.44326 12.993 8.29786C13.0219 8.15246 13.0932 8.01888 13.198 7.914L14.8 6.31C13.3284 5.69377 11.6947 5.58014 10.152 5.98669C8.60935 6.39325 7.24383 7.29731 6.26712 8.55874C5.29041 9.82018 4.75705 11.3686 4.74969 12.9639C4.74234 14.5592 5.2614 16.1125 6.22644 17.3829C7.19148 18.6533 8.5486 19.5699 10.0875 19.9906C11.6264 20.4114 13.261 20.3128 14.7382 19.7102C16.2154 19.1076 17.4525 18.0345 18.2579 16.6574C19.0633 15.2802 19.392 13.6759 19.193 12.093C19.1724 11.8977 19.2292 11.7022 19.3511 11.5483C19.4731 11.3945 19.6505 11.2946 19.8453 11.2701C20.0401 11.2456 20.2368 11.2985 20.393 11.4174C20.5493 11.5363 20.6527 11.7117 20.681 11.906C20.9244 13.8422 20.5136 15.8041 19.5139 17.48C18.5142 19.1559 16.983 20.4495 15.1637 21.1552C13.3443 21.8609 11.3413 21.9382 9.47299 21.3748C7.60469 20.8114 5.97834 19.6396 4.85248 18.0457C3.72663 16.4518 3.16588 14.5273 3.25938 12.5782C3.35289 10.629 4.09527 8.76704 5.36853 7.28824C6.64178 5.80945 8.37282 4.79872 10.2865 4.41673C12.2001 4.03473 14.1866 4.30339 15.93 5.18L17.44 3.67C17.5449 3.56527 17.6785 3.49399 17.8239 3.46516C17.9694 3.43633 18.121 3.45123 18.258 3.508Z" fill="#CC7014" />
                </svg>
              </div>

              <div className="flex flex-col gap-y-1">
                <h2 className="text-lg text-secondary-500 font-semibold ">En Progreso</h2>
                <span>En 40 dias</span>
              </div>
            </div>

            <div className="flex items-center gap-x-2">
              <div className="w-12 h-12 bg-red-200 flex justify-center items-center border border-red-600 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#DD7175" stroke-width="1.5" />
                  <path d="M12 8V12L14.5 14.5" stroke="#DD7175" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>

              <div className="flex flex-col gap-y-1">
                <h2 className="text-lg text-secondary-500 font-semibold ">Completados</h2>
                <span>En 40 dias</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white p-6 flex flex-col gap-6 rounded-2xl border border-secondary-100">
          <h3 className="text-xl text-secondary-900 font-semibold">Estadísticas del Proyecto</h3>
          <div className="flex items-center gap-x-6 text-secondary-500">
            <div className="flex items-center gap-x-2">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              <p className="text-lg font-semibold">Completado</p>
            </div>
            <p className="text-lg font-semibold">80%</p>
          </div>

          <div className="flex items-center gap-x-6 text-secondary-500">
            <div className="flex items-center gap-x-2">
              <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
              <p className="text-lg font-semibold">En Progreso</p>
            </div>
            <p className="text-lg font-semibold">80%</p>
          </div>

          <div className="flex items-center gap-x-6 text-secondary-500">
            <div className="flex items-center gap-x-2">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              <p className="text-lg font-semibold">Pendiente</p>
            </div>
            <p className="text-lg font-semibold">80%</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="w-full bg-white flex flex-col gap-y-6 p-6 border border-secondary-100 rounded-3xl">
          <img src="./wirenewtask.png" alt="" />
          <div className="flex flex-col gap-y-2">
            <h3 className="text-xl text-secondary-900 font-semibold">Nueva Tarea</h3>
            <p>Implica crear y asignar una nueva tarea dentro del sistema de gestión de proyectos. El</p>
          </div>
          <a href="" className="bg-primary flex justify-center items-center gap-x-2 text-white font-semibold px-4 py-3 rounded-lg">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 10.9047H10.5M10.5 10.9047H5.5M10.5 10.9047V5.90466M10.5 10.9047V15.9047" stroke="white" stroke-width="2" stroke-linecap="round" />
            </svg>

            Añadir Nueva Tarea
          </a>
        </div>
      </div>
    </>
  )
}
