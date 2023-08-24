
import React , { useEffect ,useRef , useState }from 'react';

const Ejemplo2 = () => {

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    /* REFERENCIA USEREF PARA ASOCIAR VARIABLE */ 

    const miRef = useRef() ;

    function incrementar1 () {
        setContador1(contador1 + 1 )
    }

    function incrementar2 () {
        setContador2(contador2 + 1 )
    }


    /* Caso 1 : Ejecutar siempre un snipet de codigo */

    useEffect(() => {
        console.log("cambio en el estado del componente")
        console.log("Mostrando referencia a elemento de DOM")
        console.log(miRef)
    });


    /*Caso 2 Ejecutar solo en contador1 o contador2 */ 
    useEffect(()=>{
        console.log("cambio en el estado del CONTADOR 1")
        console.log("Mostrando referencia a elemento de DOM")
        console.log(miRef)
    }, [contador1])

       /*Caso 3 Ejecutar solo en algunos casos */ 
       useEffect(()=>{
        console.log("cambio en el estado del CONTADOR 1/ CONTADOR 2")
        console.log("Mostrando referencia a elemento de DOM")
        console.log(miRef)
    }, [contador1 , contador2])


    return (
        <div>
            <h1>Ejemplo de useState () , useRef() y useEffect() </h1>
            <h2> Contador 1 : {contador1} </h2>
            <h2> Contador 2 : {contador2} </h2>

            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>

            <div>
                <button onClick={incrementar1}> Incrementar el contador 1</button>
                <button onClick={incrementar2}> Incrementar el contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
