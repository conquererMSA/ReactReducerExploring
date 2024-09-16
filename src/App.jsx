import TaskList from "./components/TaskList";
import AddTask from './components/AddTask';
import { useReducer } from "react";
import { initialTasks } from "./data";
import { taskReducer } from "./reducers/taskReducer";
export default function App() {
  const [tasks, dispatch]=useReducer(taskReducer, initialTasks)
  //handlers
  const handleAddTask=(newTask)=>{
    // const nextId=tasks[tasks.length-1].id+1; //array empty thakle id pabe na tokhon error dibe.
    const nextId=tasks.length===0?0:tasks[tasks.length-1].id+1;
   dispatch({
    type:"addTask",
    newTask,
    nextId
   })
  }
  const handleDeleteTask=(taskId)=>{
        dispatch({
          type:"deleteTask",
          taskId
        })
  }
  const handleChangeTask=(task)=>{
    dispatch({
      type:"changeTask",
      task
    })
  }
  return ( 
  <div >
   <h1>Prague internity</h1>
   <AddTask handleAddTask={handleAddTask}/>
   <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} handleChangeTask={handleChangeTask}/>
  </div>
  
)
  
}
