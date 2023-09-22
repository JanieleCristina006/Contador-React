import { useState } from "react";

export default function Contador() {

const [acrescenta,setAcrescenta] = useState(0)
const [decrementar,setDecrementar] = useState(0)

const aumentar = () =>{
    setAcrescenta(acrescenta +1)
}

const diminuir = () =>{
    setDecrementar(decrementar -1)
}

const resetarContadores = () => {
    setAcrescenta(0);
    setDecrementar(0);
  };

    return (
    <main>
       <div>
        <h1>{acrescenta}</h1>
        <button onClick={aumentar}>Incrementar</button>
      </div>

      <div>
        <h1>{decrementar}</h1>
        <button onClick={diminuir}>Decrementar</button>
      </div>

      <button onClick={resetarContadores} className="reset">Resetar Contadores</button>
    </main>
    
    );
  }
  