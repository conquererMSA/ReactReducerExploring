import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Task({task, handleDeleteTask, handleChangeTask}) {
    const [onEdit, setOnEdit]=useState(false);
    
  return (
    <li>
    <label>
        <input type="checkbox" checked={task.done} onChange={(e)=>handleChangeTask({
            ...task,
            done:e.target.checked
        })} />
        {!onEdit?<><p>{task.text}</p> <button onClick={()=>setOnEdit(true)}>Edit</button></>:<><input value={task.text} onChange={(e)=>handleChangeTask({
            ...task,
            text:e.target.value
        })}/><button onClick={()=>setOnEdit(false)}>Save</button></>}
        <button onClick={()=>handleDeleteTask(task.id)}>Delete</button>
    </label>
</li>
  )
}
