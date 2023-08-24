import React , { useState ,useContext } from 'react';

/* Componente 1 dispone de un contexto que tiene un valor recibido por el padre */

const miContexto = React.createContext(null)

const Componente1 = () => { 

const state = useContext(miContexto);

    return (
        <div>
            <h1>El Token es : {state.toke} </h1>

            <Componente2> </Componente2>
        </div>
    );
 }

const Componente2  = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2> La sesion es : {state.sesion} </h2>
        </div>
    );
}



export default function MiComponenteContext() {

    const estadoInicial = {
        token : "1234567" ,
        sesion : 1
    }


    const [sessionData, setsessionData] = useState(estadoInicial);

    function ActualizarSesion() {
        setsessionData({
            token: "JWT123467",
            session : sessionData.sesion + 1 
        })
    }

    return(
        <MiComponenteContext.Provider value={sessionData}>
            {/* Todo lo que esta aca adentro se puede leer los datos de sesiondata */}
            {/*Si se actulizan los componentes de aquim tambien lo acualizan*/}
            <h1> Ejemplo de UseState y useContext</h1>
            <Componente1></Componente1>
            <button onclick={ActualizarSesion}>Actualizar session</button>
        </MiComponenteContext.Provider>
    )
    
}