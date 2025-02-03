
export default function ProjectView() {
    return (
        <>
            <h2 className="text-secondary-900 text-2xl font-semibold">Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col gap-y-6">
                    <div className="flex items-center gap-x-8">
                        <div className="flex items-center gap-x-2">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0042 10.5H10.0108H10" stroke="#959494" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.99984 18.8333C14.6022 18.8333 18.3332 15.1024 18.3332 10.5C18.3332 5.89763 14.6022 2.16667 9.99984 2.16667C5.39746 2.16667 1.6665 5.89763 1.6665 10.5C1.6665 15.1024 5.39746 18.8333 9.99984 18.8333Z" stroke="#959494" stroke-width="1.5" />
                            </svg>
                            <span>Estado</span>
                        </div>

                        <div className="flex items-center gap-x-2 text-secondary-500">
                            <span className="w-4 h-4 border-2 border-orange-800 rounded-full"></span>
                            <span>En Progreso</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-6"></div>
            </div>
        </>
    )
}
