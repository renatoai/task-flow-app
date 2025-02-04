import CardTaskCompleted from "../components/CardTaskCompleted"
import CardTaskInProgress from "../components/CardTaskInProgress"
import CardTaskPending from "../components/CardTaskPending"
import HeaderTask from "../components/HeaderTask"

export default function Page() {
  return (
    <>
      <h2 className="text-secondary-900 text-2xl font-semibold">Dashboard</h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="w-full bg-white flex flex-col gap-y-4 p-3 border border-secondary-100 rounded-2xl">
          <HeaderTask status="Pendiente" title="Pendiente" tasks={16} to="projects/details" />
          <hr className="border border-secondary-100 bg-transparent" />
          <CardTaskPending
            bgColor="red"
            badgeName="app móvil"
            date="2 Febrero"
            title="Diseñar wirefrimes de la pantalla de inicio"
            description="Crear wireframes de baja fidelidad para la pantalla principal de la app móvil. Incluir las secciones de navegación, búsqueda y principales botones."
            image="/shop.png"
            imgAdjunt={3}
            urAdjunt={0} />

          <CardTaskPending
            bgColor="red"
            badgeName="app móvil"
            date="2 Febrero"
            title="Diseñar wirefrimes de la pantalla de inicio"
            description="Crear wireframes de baja fidelidad para la pantalla principal de la app móvil. Incluir las secciones de navegación, búsqueda y principales botones."
            // image="/shop.png"
            imgAdjunt={3}
            urAdjunt={0} />
        </div>

        <div className="w-full bg-white flex flex-col gap-y-4 p-3 border border-secondary-100 rounded-2xl">
          <HeaderTask
            status="En Progreso"
            title="En Progreso"
            tasks={10} to="/projects/details" />

          <hr className="border border-secondary-100 bg-transparent" />

          <CardTaskInProgress
            bgColor="orange"
            badgeName="app móvil"
            date="2 Febrero"
            title="Diseñar wirefrimes de la pantalla de inicio"
            description="Crear wireframes de baja fidelidad para la pantalla principal de la app móvil. Incluir las secciones de navegación, búsqueda y principales botones."
            // image="/shop.png"
            imgAdjunt={3}
            urAdjunt={0} />

          <CardTaskInProgress
            bgColor="orange"
            badgeName="app móvil"
            date="2 Febrero"
            title="Diseñar wirefrimes de la pantalla de inicio"
            description="Crear wireframes de baja fidelidad para la pantalla principal de la app móvil. Incluir las secciones de navegación, búsqueda y principales botones."
            image="/shop.png"
            imgAdjunt={3}
            urAdjunt={0} />

          <CardTaskInProgress
            bgColor="orange"
            badgeName="app móvil"
            date="2 Febrero"
            title="Diseñar wirefrimes de la pantalla de inicio"
            description="Crear wireframes de baja fidelidad para la pantalla principal de la app móvil. Incluir las secciones de navegación, búsqueda y principales botones."
            // image="/shop.png"
            imgAdjunt={3}
            urAdjunt={0} />
        </div>

        <div className="w-full bg-white flex flex-col gap-y-4 p-3 border border-secondary-100 rounded-2xl">
          <HeaderTask
            status="Completado"
            title="Completado"
            tasks={2} to="projects/details" />

          <hr className="border border-secondary-100 bg-transparent" />

          <CardTaskCompleted
            bgColor="green"
            badgeName="app móvil"
            date="2 Febrero"
            title="Diseñar wirefrimes de la pantalla de inicio"
            description="Crear wireframes de baja fidelidad para la pantalla principal de la app móvil. Incluir las secciones de navegación, búsqueda y principales botones."
            image="/shop.png"
            imgAdjunt={3}
            urAdjunt={0} />

          <CardTaskCompleted
            bgColor="green"
            badgeName="app móvil"
            date="2 Febrero"
            title="Diseñar wirefrimes de la pantalla de inicio"
            description="Crear wireframes de baja fidelidad para la pantalla principal de la app móvil. Incluir las secciones de navegación, búsqueda y principales botones."
            // image="/shop.png"
            imgAdjunt={3}
            urAdjunt={0} />

        </div>
      </div>
    </>
  )
}
