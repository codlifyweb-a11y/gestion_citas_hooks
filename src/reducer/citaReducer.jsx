import { citas_db } from "../data";

const localStorageCitas = () => {
  const citas = localStorage.getItem("listaCitas");
  return citas ? JSON.parse(citas) : citas_db;
};

//Estado inicial
export const initialState = {
  listaCitas: localStorageCitas(),
  seleccionarCita: "",
};

//Reducer
export const citaReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_CITA": {
      const selectCita = state.listaCitas.find((cita) => cita.id === action.id);
      return {
        ...state,
        seleccionarCita: selectCita ?? "",
      };
    }
    case "ACTUALIZAR_CITA": {
      const selectCita = state.listaCitas.find((cita) => cita.id === action.id);
      return {
        ...state,
        seleccionarCita: selectCita ?? "",
      };
    }
    case "RESERVAR_CITA": {
      return {
        ...state,
        listaCitas: state.listaCitas.map((cita) =>
          cita.id === action.id ? { ...cita, available: false } : cita,
        ),
      };
    }
    case "CANCELAR_CITA": {
      return {
        ...state,
        listaCitas: state.listaCitas.map((cita) =>
          cita.id === action.id ? { ...cita, available: true } : cita,
        ),
      };
    }
    case "RESETEAR_CITA": {
      return {
        ...state,
        listaCitas: citas_db,
        seleccionarCita: "",
      };
    }
  }
  // if (action.type === "SELECT_CITA") {
  //   const selectCita = state.listaCitas.find((cita) => cita.id === action.id);
  //   return {
  //     ...state,
  //     seleccionarCita: selectCita,
  //   };
  // }
  // if (action.type === "ACTUALIZAR_CITA") {
  //   const listaCitas = state.listaCitas.map((cita) =>
  //     cita.id === action.id ? { ...cita, available: action.available } : cita,
  //   );
  //   return {
  //     ...state,
  //     listaCitas,
  //   };
  // }
  // if (action.type === "RESERVAR_CITA") {
  //   const listaCitas = state.listaCitas.map((cita) =>
  //     cita.id === action.id ? { ...cita, available: false } : cita,
  //   );
  //   return {
  //     ...state,
  //     listaCitas,
  //   };
  // }
  // if (action.type === "CANCELAR_CITA") {
  //   const listaCitas = state.listaCitas.map((cita) =>
  //     cita.id === action.id ? { ...cita, available: true } : cita,
  //   );
  //   return {
  //     ...state,
  //     listaCitas,
  //   };
  // }
  // if (action.type === "RESETEAR_CITA") {
  //   return {
  //     listaCitas: citas_db,
  //     seleccionarCita: "",
  //   };
  // }
};

// export const citaReducer = (state, action) => {
//   switch (action.type) {
//     case "SELECT_CITA": {
//       const selectCita = state.listaCitas.find((cita) => cita.id === action.id);
//       return {
//         ...state,
//         seleccionarCita: selectCita,
//       };
//     }
//     case "ACTUALIZAR_CITA": {
//       const selectCita = state.listaCitas.find((cita) => cita.id === action.id);
//       return {
//         ...state,
//         seleccionarCita: selectCita,
//       };
//     }
//     case "RESERVAR_CITA": {
//       const listaCitas = state.listaCitas.map((cita) =>
//         cita.id === action.id ? { ...cita, available: false } : cita,
//       );
//       return {
//         ...state,
//         listaCitas,
//       };
//     }
//     case "CANCELAR_CITA": {
//       const listaCitas = state.listaCitas.map((cita) =>
//         cita.id === action.id ? { ...cita, available: true } : cita,
//       );
//       return {
//         ...state,
//         listaCitas,
//       };
//     }
//     case "RESETEAR_CITA": {
//       return {
//         listaCitas: citas_db,
//         seleccionarCita: "",
//       };
//     }
//   }
