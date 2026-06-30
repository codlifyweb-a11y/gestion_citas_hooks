import Calendar from "../components/Calendar";
import Select from "../components/Select";
import useCitas from "../hooks/useCitas";

export const HomeState = () => {
  const {
    listaCitas,
    seleccionarCita,
    selectCita,
    reservarCita,
    cancelarCita,
    resetForm,
  } = useCitas();
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-[#121212] py-4">
        <span className="text-white font-semibold text-xl uppercase text-center">
          <h1>Gestion de citas</h1>
        </span>
      </header>
      <main className="flex flex-col md:flex-row items-start w-full bg-gray-100 flex-grow px-8 py-4 gap-4">
        <section className="bg-white p-4 rounded-lg flex-1 min-w-0">
          <Calendar listaCitas={listaCitas} cancelarCita={cancelarCita} />
        </section>
        <section className="bg-gray-200 p-4 rounded-lg flex-1 min-w-0">
          <Select
            id="citas"
            htmlFor="citas"
            label="Selecciona una cita"
            listaCitas={listaCitas}
            seleccionarCita={seleccionarCita}
            selectCita={selectCita}
            reservarCita={reservarCita}
            resetForm={resetForm}
          />
        </section>
      </main>
      <footer className="bg-[#121212] py-6">
        <p className="text-white text-sm font-normal  text-center">
          Todos los derechos reservados
        </p>
      </footer>
    </div>
  );
};
