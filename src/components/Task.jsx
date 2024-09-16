import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Task({task}) {
    const [onEdit, setOnEdit]=useState(false);
  return (
    <li>
    <label>
        <input type="checkbox" />
        {!onEdit?<><p>{task.text}</p> <button onClick={()=>setOnEdit(true)}>Edit</button></>:<><input value={task.text}/><button onClick={()=>setOnEdit(false)}>Save</button></>}
        <button>Delete</button>
    </label>
</li>
  )
}
