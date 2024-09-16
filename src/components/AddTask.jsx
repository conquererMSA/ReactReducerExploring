/* eslint-disable react/prop-types */
import { useState } from "react"

export default function AddTask({handleAddTask}) {
    const [newTask, setNewTask]=useState("");
  return (
    <>
        <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
        <button onClick={()=>{
            handleAddTask(newTask)
            setNewTask('')
        }}>Add</button>
    </>
  )
}
