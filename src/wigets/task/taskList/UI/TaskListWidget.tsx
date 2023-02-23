import React,{FC, useEffect, useState} from 'react'
import { Task, TaskListItem, useTasks } from 'entities/task'
import { Tasks, useGetTasksAllMutation } from 'entities/task'
import { useAppDispatch } from 'app/store/hooks'

interface TaskListWidgetProps{
  filteredData?:Tasks,
}

export const TaskList:FC<TaskListWidgetProps> = ({filteredData,...TaskListWidgetProps}) => {
  const dispatch = useAppDispatch();
  const [taskList,setTaskList] = useState<Tasks>();
  const [getAllTasks,isSuccess] = useGetTasksAllMutation();
  
  useEffect(()=>{
    if(filteredData !== undefined && filteredData.data.length >0){
      setTaskList(filteredData)
    }
    else{
      getAllTasks({page:0}).unwrap().then((resp)=>{
        setTaskList(resp)
      })
    }
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