/**
 * Ejemplo de componente tipo clase que dispone de los emtedos de ciclo de vida 
 */



import React, { Component } from 'react' ;

 class lifeCycle extends Component {

    constructor(props){
        super(props)
        console.log("Cuando se instancia el componente")
    }


    componentWillUnmount(){
        console.log("WillMount  :  Antes del montaje del componente ")
    }

    componentDidMount(){
        console.log("DidMount  : Justo al acabar el montaje del componente , antes de pintarlo ")
    }

    componentWillReceiveProps(nextProps){
        console.log(" componentWillReceiveProps : Si va a recibir nuevas Props ")
    }

    shouldComponentUpdate( nextProps , nextState ){
       /*  return true or false */ 
    }

    componentDidUpdate( nextProps , nextState ){
        console.log(" componentDidUpdate :Punto justo antes de actualizarse")
    }

    componentDidUpdate( prevProps , prevState ) {
         console.log(" componentDidUpdate :Punto justo despues de actualizarse")
    }

    componentWillUnmount(){
        console.log(" Willunmount : Justo antes de desaparecer ")
    }

}