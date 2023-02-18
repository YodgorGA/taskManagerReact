import React,{FC, useEffect} from 'react'
import { TaskListItem, useTasks } from 'entities/task'
import { useGetTasksAllMutation } from 'entities/task/model/taskAPI'
import { useAppDispatch } from 'app/store/hooks'
import { setAllTasks } from 'entities/task/model/taskSlice'

export const TaskList:FC = () => {
  const dispatch = useAppDispatch();
  const getTasks = useTasks();

  const [getAllTasks,isSuccess] = useGetTasksAllMutation();

  useEffect(()=>{
    getAllTasks({page:0}).unwrap().then((resp)=>{
      dispatch(setAllTasks(resp.data))
    })
  },[])
  if(getTasks.tasks !== null){
    return (
      <div className="cardTaskList_tasks tasksCardTaskList">
        {
          getTasks.tasks.map((task)=>{
            return <TaskListItem id={task.id} type={task.type} key={task.id} assignedUser={task.assignedId} priority={task.rank} status={task.status} taskName={task.title}/>
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