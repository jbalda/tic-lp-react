//A component
import React from "react";

export const NumeroAleatorioRemoto = () => {
    const [numero, setNumero] = React.useState(0);
    const [isSending, setIsSending] = React.useState(false);

    const setNumeroHendler = () => {

    };
    // const randomService = ()=>{
        
        
    //     return fetch('https://randomexpress.herokuapp.com/random',{mode:'cors'})
    //     .then(response => response.json())
    //     .then(data => {console.log(data);return data.data.random; } );

    //         };
    
    const randomService = async ()=>{
        console.log("algo");
        
        const response = await  fetch('https://randomexpress.herokuapp.com/random',{mode:'cors'});
        const data = await response.json();
        console.log(data);
        const random = data.data.random;
        console.log(random);
        setNumero(random);

            };
    //     const response = await fetch('https://randomexpress.herokuapp.com/random',{mode:'cors'});
    //     const data = await response.json();
    //     setNumero(data.random);
    // },[]);

    return (
        <div>
            <h1>NÚMERO ALEATORIO {numero}</h1>
            <button disabled={isSending}  onClick={() => randomService()}> GENERAR </button>
        </div>
    );
    
}