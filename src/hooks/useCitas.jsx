import { useState } from "react";
import { citas_db } from "../data";
import { useEffect } from "react";

export default function useCitas() {
  const [listaCitas, setListaCitas] = useState(() => {
    const guardarCita = localStorage.getItem("listaCitas");
    return guardarCita ? JSON.parse(guardarCita) : citas_db;
  });
  const [seleccionarCita, setSeleccionarCita] = useState("");

  useEffect(() => {
    localStorage.setItem("listaCitas", JSON.stringify(listaCitas));
  }, [listaCitas]);

  const selectCita = (id) => {
    setSeleccionarCita(id);
  };
  const actualizarCita = (id, available) => {
    const updateCitas = listaCitas.map((cita) =>
      cita.id === id ? { ...cita, available } : cita,
    );
    setListaCitas(updateCitas);
  };

  const reservarCita = (id) => {
    actualizarCita(id, false);
  };

  const cancelarCita = (id) => {
    actualizarCita(id, true);
  };

  const resetForm = () => {
    setListaCitas(citas_db);
    setSeleccionarCita("listaCitas");
  };

  return {
    listaCitas,
    seleccionarCita,
    selectCita,
    reservarCita,
    cancelarCita,
    resetForm,
  };
}
