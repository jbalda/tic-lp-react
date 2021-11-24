//A component
import React from "react";

export const NumeroAleatorio = () => {
    const [numero, setNumero] = React.useState(0);

    const random = ()=>{
        return Math.floor(Math.random() * 10);
    };
    
    return (
        <div>
            <h1>NÚMERO ALEATORIO {numero}</h1>
            <button onClick={() => setNumero(random())}> GENERAR </button>
        </div>
    );
    
}