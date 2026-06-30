import Button from "./Button";

export default function Select({ id, htmlFor, label, state, dispatch }) {
  const { listaCitas, seleccionarCita } = state;
  return (
    <div className="max-w-sm mx-auto">
      <label
        htmlFor={htmlFor}
        className="block mb-2.5 text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <select
        id={id}
        className="block w-full px-3 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm placeholder:text-gray-400"
        value={seleccionarCita ? seleccionarCita.id : ""}
        onChange={(e) =>
          dispatch({ type: "SELECT_CITA", id: Number(e.target.value) })
        }
      >
        <option value="" disabled>
          Selecciona una opcion...
        </option>
        {listaCitas.map((listaCita) => (
          <option
            key={listaCita.id}
            value={listaCita.id}
            disabled={!listaCita.available}
          >{`${listaCita.date}, ${listaCita.time}, ${listaCita.available ? "Disponible" : "No disponible"}`}</option>
        ))}
      </select>
      <div className="bg-gray-300 mt-10 p-4 rounded-lg flex justify-center items-center gap-4">
        <Button
          variant="primary"
          onClick={() =>
            dispatch({ type: "RESERVAR_CITA", id: seleccionarCita.id })
          }
        >
          Reservar Cita
        </Button>
        <Button
          variant="secondary"
          onClick={() => dispatch({ type: "RESETEAR_CITA" })}
        >
          Resetear Formulario
        </Button>
      </div>
    </div>
  );
}
