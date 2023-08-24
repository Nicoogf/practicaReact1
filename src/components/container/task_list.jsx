
import React from 'react' ;
import { LEVELS } from '../../models/levels.enum' ;
import { Task } from "../../models/task.class" ;
import TaskComponent from "../pure/task" ;



const TaskListComponent = () => {


    const defaultTask = new Task ( 'Example' , 'Default Description' , false , LEVELS.NORMAL)

    return (
        <div>

            <div>
                Tu tarea :
            </div>

            <TaskComponent task={defaultTask}></TaskComponent>
           
        </div>
    );
};




export default TaskListComponent;
