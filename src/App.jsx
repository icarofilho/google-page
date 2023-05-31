import React from "react";
import "./App.css";
import Header from "./components/header/Header";
function App() {
  const [name, setName] = React.useState("Convidado");

  function handleName() {
    const inputName = document.getElementById("inputName").value;
    setName(inputName);
    console.log(name);
  }

  return (
    <>
      <div>
        <Header name={name} />
        <div>Entre com seu nome:</div>
        <input type="text" name="" id="inputName" />
        <div>
          <button onClick={handleName}>Enviar</button>
        </div>
      </div>
    </>
  );
}

export default App;
