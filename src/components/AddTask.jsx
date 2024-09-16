/* eslint-disable react/prop-types */
import { useState } from "react"

export default function AddTask({handleAddTask, isAdded}) {
    const [newTask, setNewTask]=useState("");
    if(isAdded) setNewTask("");
  return (
    <>
        <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
        <button onClick={()=>handleAddTask(newTask)}>Add</button>
    </>
  )
}
