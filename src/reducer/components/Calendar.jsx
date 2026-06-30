import Button from "./Button";

export default function Calendar({ state, dispatch }) {
  const { listaCitas } = state;
  const disponibles = listaCitas.filter((cita) => cita.available).length;
  const noDisponibles = listaCitas.filter((cita) => !cita.available).length;

  return (
    <div className="space-y-4 w-full">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className=" text-gray-800 font-semibold text-2xl">
          Agenda de citas
        </h2>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="bg-slate-800 text-white font-bold py-2 px-5 rounded-lg flex flex-col items-center justify-center">
            <h3 className="text-sm">Total de Disponibilidad</h3>
            <span className="text-xl">{disponibles}</span>
          </div>
          <div className="bg-slate-800 text-white font-bold py-2 px-5 rounded-lg flex flex-col items-center justify-center">
            <h3 className="text-sm">Total de Asistencia</h3>
            <span className="text-xl">{noDisponibles}</span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto bg-gray-100 rounded-3xl p-5 shadow-sm">
        <div className="grid grid-cols-3 gap-4 px-3 pb-3 border-b border-slate-300 text-xs sm:text-sm font-semibold uppercase tracking-wide text-slate-500">
          <span className="text-center">Fecha</span>
          <span className="text-center">Hora</span>
          <span className="text-center">Estado</span>
        </div>
        <ul className="space-y-3 mt-4">
          {listaCitas.map((listaCita) => (
            <li
              key={listaCita.id}
              className="grid grid-cols-3 gap-4 items-center bg-white rounded-2xl p-4 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <span className="text-center text-gray-800 font-medium">
                {listaCita.date}
              </span>
              <span className="text-center text-gray-600">
                {listaCita.time}
              </span>
              <div className="flex flex-col items-center gap-2">
                {listaCita.available ? (
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 text-sm font-semibold">
                    Disponible
                  </span>
                ) : (
                  <Button
                    variant="danger"
                    onClick={() =>
                      dispatch({ type: "CANCELAR_CITA", id: listaCita.id })
                    }
                  >
                    Cancelar
                  </Button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
