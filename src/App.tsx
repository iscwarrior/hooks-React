// import Button from "./components/Button";

// function App() {
//   return (
//     <Button text="dame click perro ✂" handleClick={() => alert("ayay!")} />
//   );
// }

// export default App;

import { useState } from "react";

function App() {
  // no podemos cambiar estados y asi se crean los estados
  //  valor del estado | establecer estado (funcion que ayuda cambiar la funcion del contador)
  const [contador, setContador] = useState(0);
  return (
    <>
      <p> {contador}</p>
      <button onClick={() => setContador(contador - 1)}> - </button>
    </>
  );
}

export default App;
