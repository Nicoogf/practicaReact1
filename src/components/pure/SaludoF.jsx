import React , { useState } from 'react';
import PropTypes from 'prop-types';


const SaludoF = (props) => {


   const [ age , setAge ] = useState( 29 )

   const cumple  = () =>{
       setAge (age+1)
   }

    return (

    <div>
            <h1>
                Hola {props.name}  desde componente funcional !
            </h1>


        
            <h2>
                Tu edad es de : { age }
            </h2>
        
            <div>
                <button onClick={ cumple }> Cumplir Años </button>
            </div>
           
    </div>
    );
};


SaludoF.propTypes = {
    name : PropTypes.string,
};


export default SaludoF;
