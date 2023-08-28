import React  , { useState  , useRef , useEffect} from 'react'


function EEjemplo1(props) {

    const valorInicial = 0 ;
    const [contador1 ,setContador1 ] = useState(valorInicial) ;
    const [contador2 ,setContador2 ] = useState(valorInicial) ;

    const primerAumento = () => {
        setContador1( contador1 + 1)
    }

    const segundoAumento = () => {
        setContador2( contador2 + 2)
    }

    const miReferencia = useRef();
    
    useEffect(()=>{
        console.log("Se altero el estado de este componente")
    },[contador1])

    useEffect(()=>{
        console.log("Se altero el estado DEL SEGUNDO componente")
    },[contador2])

  return (
    <div>

    <h2>Primer Contador : </h2>
    <h3 ref={miReferencia}> { contador1 } </h3> 
    <button onClick={primerAumento}> Cambiar numero </button>

    <br />

    <h2> Segundo Contador </h2>
    <h3 ref={miReferencia}> { contador2 } </h3>
    <button onClick={segundoAumento}> Cambiar numero </button>
            

    </div>
  )
}



export default EEjemplo1
