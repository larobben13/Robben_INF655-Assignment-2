import { useState } from "react";
import Task from "./Task";
import TaskData from "./TaskData";

export default function TaskForm({ text, name }) {
    const[taskNum, setTaskNum] = useState(3);
   const handelTask = () => {
        setTaskNum((prev) => {
            return prev + 1;
        });
    };
    

    return (
        <span>
            {text}
            {name}
            {TaskData.map((task) =>(
                <Task key={task.id} title={task.title} description={task.description} />
            ))}
            <form>
                <div>
                    <input type="text" placeholder="Task Title"/>
                    <button>Submit</button>
                </div>
            </form>
            <button onClick={handelTask}>Add Task</button>

            <br></br>
            {taskNum}
        </span>
    );
}
TaskForm.defaultProps ={
    name: "Lauren",
};
