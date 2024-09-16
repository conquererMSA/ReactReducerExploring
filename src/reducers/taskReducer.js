export const taskReducer=(tasks, action)=>{
    switch (action.type) {
        case "addTask":
            return [...tasks, {
                text:action.newTask,
                id:action.nextId,
                done:false
               }]
        case "deleteTask":
            return tasks.filter(task=>task.id!=action.taskId)
        case "changeTask":
            return tasks.map(t=>{
                if(action.task.id===t.id) return action.task;
                else return t;
              })
        default:
            throw new Error("action does not matched");
    }
}