/* eslint-disable react/prop-types */
import Task from "./Task";

export default function TaskList({tasks, handleDeleteTask}) {
  return (
    <ul>
       {
        tasks.map(task=><Task key={task.id} task={task} handleDeleteTask={handleDeleteTask}/>)
       }
    </ul>
  )
}
