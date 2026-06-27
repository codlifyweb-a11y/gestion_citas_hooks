import { useState, useRef, forwardRef } from "react";
import ApiCall from "./ApiCall";

const mensajeText = "Hola";

export default function Example() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState(mensajeText);
  const [mostrarMensajeAlternativo, setMostrarMensajeAlternativo] =
    useState(true);
  const [colorFondo, setColorFondo] = useState("green");
  const [msj, setMsj] = useState("Hacer click");
  const [nuevoMsj, setNuevoMsj] = useState("");
  const [character, setCharacter] = useState("");
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [palabras, setPalabras] = useState("");
  // const [contador, setContador] = useState(0);
  const contador = palabras.length;
  //////////////////////////////////////////////////////////////Task
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const inputRef = useRef(null);

  const validTask = newTask.trim() === "";

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTask([...tasks, newTask.trim()]);
    setNewTask("");
  };

  const deleteTask = (indice) => {
    const newsTask = tasks.filter((_, index) => index !== indice);
    setTask(newsTask);
  };
  ////////////////////////////////////////////////////////////////////////

  const isCountMin = count === 1;
  const mensaje = mostrarMensajeAlternativo ? mensajeText : "Adios";
  const limitedCharacter = 50;
  const limitedRestate = limitedCharacter - character.length;

  const mandarMensaje = () => {
    alert("Mensaje enviado");
  };

  const cambiarTexto = () => {
    setText((current) => (current === mensajeText ? "Adios" : mensajeText));
  };

  const cambiarMensajeAlternativo = () => {
    setMostrarMensajeAlternativo((current) => !current);
    setColorFondo((current) => (current === "green" ? "blue" : "green"));
  };

  const decremental = () => {
    setCount((value) => value - 1);
  };

  const incremental = () => {
    setCount((value) => value + 1);
  };

  const cambiarMensajeBotton = () => {
    setMsj(nuevoMsj || "Hacer click");
    setNuevoMsj("");
  };

  const cambiarMensajeInput = (e) => {
    setNuevoMsj(e.target.value);
  };

  const actualizarCaracteres = (e) => {
    const nuevoTexto = e.target.value;
    setCharacter(nuevoTexto);
  };

  const sumarNumeros = () => {
    const sumar = parseInt(numero1) + parseInt(numero2);
    setResultado(sumar);
  };

  const actualizarNumero1 = (e) => {
    const nuevoNumero1 = e.target.value;
    setNumero1(nuevoNumero1);
  };
  const actualizarNumero2 = (e) => {
    const nuevoNumero2 = e.target.value;
    setNumero2(nuevoNumero2);
  };

  const validarPassword = () => {
    const valid =
      password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password);
    setIsValid(valid);
  };

  // useEffect(() => {
  //   setContador(palabras.length);
  // }, [palabras]);

  const grayBg = "bg-gray-300";

  const restarButtonClass = isCountMin ? "cursor-not-allowed bg-gray-300" : "";

  const textoButtonClass = text === mensajeText ? "" : grayBg;

  const mensajeButtonClass = mensaje === mensajeText ? "" : grayBg;

  return (
    <section className="flex flex-col justify-center items-center h-screen gap-4">
      <section className="flex gap-4">
        <Button
          className={restarButtonClass}
          text="Restar"
          onClick={decremental}
          disabled={isCountMin}
        />
        <span>{count}</span>
        <Button text="Sumar" onClick={incremental} />
      </section>

      <Button text="Enviar Mensaje" onClick={mandarMensaje} />

      <Button className={textoButtonClass} text={text} onClick={cambiarTexto} />

      <div style={{ backgroundColor: colorFondo, padding: 10 }}>
        <Button
          className={mensajeButtonClass}
          text={mensaje}
          onClick={cambiarMensajeAlternativo}
        />
      </div>
      <div className="flex gap-4">
        <InputText
          type="text"
          placeholder="Escribe aqui"
          value={nuevoMsj}
          onChange={cambiarMensajeInput}
        />
        <Button
          // className={mensajeButtonClass}
          text={msj}
          onClick={cambiarMensajeBotton}
        />
      </div>
      <div className="flex flex-col gap-4">
        <Textarea
          type="text"
          placeholder="Escribe aqui"
          value={character}
          onChange={actualizarCaracteres}
          maxLength={limitedCharacter}
        />
        <span> Amount de character: {limitedRestate} </span>
      </div>

      <div className="flex flex-col space-y-4">
        <div className="flex gap-4">
          <InputText
            type="number"
            placeholder="Escribe el numero 1"
            value={numero1}
            onChange={actualizarNumero1}
          />
          <InputText
            type="number"
            placeholder="Escribe el numero 2"
            value={numero2}
            onChange={actualizarNumero2}
          />
        </div>
        <Button text="Sumar" onClick={sumarNumeros} />
        <span>
          La suma de los dos numeros es: <strong>{resultado}</strong>
        </span>
      </div>
      <section className="flex justify-center mt-5">
        <div className="flex flex-col space-y-4">
          <div className="flex gap-4">
            <InputText
              ref={inputRef}
              id="add"
              placeholder="Escribe la tarea"
              value={newTask}
              onChange={(event) => setNewTask(event.target.value)}
            />
            <Button
              text="Agregar"
              onClick={addTask}
              disabled={validTask}
              className={validTask ? "bg-gray-300" : ""}
            />
          </div>
          <ul className="py-4 space-y-4">
            {tasks.length === 0 ? (
              <div className="flex flex-col items-center gap-3 text-gray-300 font-medium">
                <span>Sin tarea por agregar</span>
                <Button
                  text="Agregar"
                  onClick={focusInput}
                  className="bg-sky-500 hover:bg-sky-600"
                />
              </div>
            ) : (
              tasks.map((task, index) => (
                <div key={index} className="flex gap-4 w-full">
                  <li className="bg-gray-300 w-full rounded-lg px-4 py-2 text-sm text-gray-800 font-semibold capitalize">
                    {task}
                  </li>
                  <Button text="X" onClick={() => deleteTask(index)} />
                </div>
              ))
            )}
          </ul>
        </div>
      </section>
      <section className="flex justify-center mt-5">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <InputText
                type={showPassword ? "text" : "password"}
                placeholder="Escribe la contraseña"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-80"
              />
              <Button text="Validar" onClick={validarPassword} />
            </div>
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <InputText
                type="checkbox"
                checked={showPassword}
                onChange={(event) => setShowPassword(event.target.checked)}
                className="h-4 w-4"
              />
              Mostrar contraseña
            </label>
          </div>
          {isValid === null ? null : (
            <p
              className={`w-96 ${isValid ? "text-green-600" : "text-red-600"}`}
            >
              {isValid
                ? "La contraseña es valida ✔"
                : "La contraseña debe tener, al menos 8 caracteres, una mayúscula y un número ⚠"}
            </p>
          )}
        </div>
      </section>
      <section className="flex justify-center mt-5">
        <div className="flex flex-col space-y-4">
          <div className="flex  gap-4">
            <InputText
              type="text"
              value={palabras}
              onChange={(e) => setPalabras(e.target.value)}
            />
            <Button text="Limpiar" onClick={() => setPalabras("")} />
          </div>
          <p>Contador de caracteres: {contador}</p>
        </div>
      </section>
      <section className="flex justify-center mt-5">
        <ApiCall />
      </section>
    </section>
  );
}

export const Button = ({
  text = "",
  onClick,
  disabled = false,
  className = "",
}) => {
  const buttonClass = [
    "bg-blue-500 px-4 py-2 text-white rounded-lg",
    disabled && "cursor-not-allowed",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <button
      type="button"
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export const InputText = forwardRef(
  ({ type, value, onChange, placeholder, className = "", ...rest }, ref) => {
    const InputClass = `border-2 border-gray-700 focus:border-sky-600 ${className}`;
    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={InputClass}
        {...rest}
      />
    );
  },
);

export const Textarea = ({
  value,
  onChange,
  placeholder,
  className,
  ...rest
}) => {
  const InputClass = `border-2 border-gray-700 focus:border-sky-600 ${className}`;
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={InputClass}
      {...rest}
    />
  );
};
