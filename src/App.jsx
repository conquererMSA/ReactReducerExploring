import TaskList from "./components/TaskList";
import AddTask from './components/AddTask';
import { useState } from "react";
import { initialTasks } from "./data";
export default function App() {
  const [tasks, setTasks]=useState(initialTasks);
  //handlers
  const handleAddTask=(newTask)=>{
    // const nextId=tasks[tasks.length-1].id+1; //array empty thakle id pabe na tokhon error dibe.
   const nextId=tasks.length===0?0:tasks[tasks.length-1].id+1;
     setTasks([...tasks, {
      text:newTask,
      id:nextId,
      done:false
     }]);
  }
  const handleDeleteTask=(taskId)=>{
        setTasks(tasks.filter(task=>task.id!=taskId))
  }
  const handleChangeTask=(task)=>{
    setTasks(tasks.map(t=>{
      if(task.id===t.id) return task;
      else return t;
    }))
  }
  return ( 
  <div >
   <h1>Prague internity</h1>
   <AddTask handleAddTask={handleAddTask}/>
   <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} handleChangeTask={handleChangeTask}/>
  </div>
  
)
  
}
