import React from "react"
import Task from "./Task"
const TaskList = ({tasks}) => {
  const taskList = 
        tasks.map(task=>(
    <Task taskName={task.taskName} taskPriorty={task.taskPriority} taskLength={task.taskLength}/>
  ))
  
  return (
    <ul>
    {taskList}
    </ul>
  )
}

export default TaskList