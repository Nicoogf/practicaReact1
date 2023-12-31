import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';


const TaskComponent =  ( { task } ) => {

    useEffect(()=>{
        console.log("Tarea Creada")
        return () => 
        console.log(` Tarea  : ${task.name} fue desaparecida`)
    }, [ task ] )

    return (
        <div>

            <h2> 
                Nombre : {task.name}
            </h2>

            

            <h3> 
                Descripcion  : {task.description}
            </h3>

            <h4> 
                Nivel : {task.level}
            </h4>

            <h5> Esta tarea esta : { task.completed ? `Finalizada` : "Pendiente" } </h5>


        </div>
    );
};


TaskComponent.propTypes = {
    task :PropTypes.instanceOf(Task)

};


export default TaskComponent;
