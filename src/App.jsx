import TaskList from "./components/TaskList";
import AddTask from './components/AddTask';
import { useState } from "react";
import { initialTasks } from "./data";
export default function App() {
  const [tasks, setTasks]=useState(initialTasks);
  // const [isAdded, setIsAdded]=useState(false);
  //handlers
  const handleAddTask=(newTask)=>{
    const nextId=tasks[tasks.length-1].id+1;
     setTasks([...tasks, {
      text:newTask,
      id:nextId,
      done:false
     }]);
    //  setIsAdded(true)
  }
  return ( 
  <div >
   <h1>Prague internity</h1>
   <AddTask handleAddTask={handleAddTask} 
  //  isAdded={isAdded}
   />
   <TaskList tasks={tasks}/>
  </div>
  
)
  
}
