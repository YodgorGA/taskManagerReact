import React,{FC, useEffect, useState} from 'react'
import { Task, TaskListItem } from 'entities/task'
import { Tasks } from 'entities/task'

interface TaskListWidgetProps{
  filteredData?:Tasks,
}

export const TaskList:FC<TaskListWidgetProps> = ({filteredData,...TaskListWidgetProps}) => {
  const [taskList,setTaskList] = useState<Tasks>();
  
  useEffect(()=>{
    setTaskList(filteredData);
  },[filteredData])
  if(taskList?.data !== null){
    return (
      <div className="cardTaskList_tasks tasksCardTaskList">
        {
          taskList?.data.map((task:Task)=>{
            return <TaskListItem assignedId={task.assignedId} id={task.id} key={task.id}/>
          })
        }
      </div>
    )
  }
  return (
    <div className="cardTaskList_tasks tasksCardTaskList">

    </div>
  )
}

export {}