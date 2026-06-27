import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function ApiCall() {
  const [datos, setDatos] = useState([]);
  const [caragar, setCargar] = useState(true);
  const [usuarios, setUsuarios] = useState([]);
  const [users, setUsers] = useState([]);
  const [usersAxios, setUsersAxios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const data = ["Laptop", "Movil", "Tablet"];
      setDatos(data);
      setCargar(false);
    }, 2000);
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        data == [];
        setUsuarios(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(`Error al cargar los datos`, err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const conFetch = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.log(`Error al cargar los datos`, error);
        setLoading(false);
      }
    };
    conFetch();
  }, []);

  useEffect(() => {
    // const conAxios = async () => {
    //   try {
    //     await axios
    //       .get("https://jsonplaceholder.typicode.com/users")
    //       .then((response) => {
    //         setUsersAxios(response.data);
    //         setLoading(false);
    //       });
    //   } catch (error) {
    //     console.log(`Error al cargar los datos`, error);
    //     setLoading(false);
    //   }
    // };
    // conAxios();

    //  const fetchUsersAxios = async () => {
    //   try {
    //     const response = await axios.get(
    //       "https://jsonplaceholder.typicode.com/users",
    //     );
    //     setUsersAxios(response.data || []);
    //   } catch (error) {
    //     console.log(`Error al cargar los datos`, error);
    //     setUsersAxios([]);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // fetchUsersAxios();

    try {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          setUsersAxios(response.data);
          setLoading(false);
        });
    } catch (error) {
      console.log(`Error al cargar los datos`, error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div>
      {caragar ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {datos.map((dato, index) => (
            <li key={index}>{dato}</li>
          ))}
        </ul>
      )}
      <h2 className="text-gray-800 font-semibold text-xl">
        Listados de usuarios
      </h2>
      {loading ? (
        <p>Cargando...</p>
      ) : usuarios.length === 0 ? (
        <p className="text-gray-300 font-semibold text-center">Sin registros</p>
      ) : (
        <ol>
          {usuarios.map((usuario, index) => (
            <li key={usuario.id}>
              {index + 1}-{usuario.name}
            </li>
          ))}
        </ol>
      )}
      <h2 className="text-gray-800 font-semibold text-xl">
        Listados de usuarios con await
      </h2>
      {loading ? (
        <p>Cargando...</p>
      ) : users.length === 0 ? (
        <p className="text-gray-300 font-semibold text-center">Sin registros</p>
      ) : (
        <ol>
          {users.map((user, index) => (
            <li key={user.id}>
              {index + 1}-{user.name}
            </li>
          ))}
        </ol>
      )}
      <h2 className="text-gray-800 font-semibold text-xl">
        Listados de usuarios con axios
      </h2>
      {loading ? (
        <p>Cargando...</p>
      ) : users.length === 0 ? (
        <p className="text-gray-300 font-semibold text-center">Sin registros</p>
      ) : (
        <ol>
          {usersAxios.map((user, index) => (
            <li key={user.id}>
              {index + 1}-{user.name}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
