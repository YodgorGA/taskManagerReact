import React,{FC, useEffect, useState} from 'react'
import { Task, TaskListItem } from 'entities/task'
import { Tasks } from 'entities/task'

interface TaskListWidgetProps{
  filteredData?:Tasks,
  fetchData:()=>void,
}

export const TaskList:FC<TaskListWidgetProps> = ({fetchData,filteredData,...TaskListWidgetProps}) => {
  const [taskList,setTaskList] = useState<Tasks>();
  
  useEffect(()=>{
    setTaskList(filteredData);
  },[filteredData])
  if(taskList?.data !== null){
    return (
      <div className="cardTaskList_tasks tasksCardTaskList">
        {
          taskList?.data.map((task:Task)=>{
            return <TaskListItem fetchData={fetchData} assignedId={task.assignedId} id={task.id} key={task.id}/>
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