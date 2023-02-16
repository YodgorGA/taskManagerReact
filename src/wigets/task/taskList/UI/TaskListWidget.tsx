import React,{FC, useEffect} from 'react'
import { TaskListItem } from 'entities/task'
import { useGetAllTasksMutation } from 'entities/task/model/taskAPI'

export const TaskList:FC = () => {
  const [getAllTasks,isSuccess] = useGetAllTasksMutation();
  useEffect(()=>{
    getAllTasks({page:0}).unwrap().then((resp)=>{
      console.log(resp)
    })
    
  },[])
  return (
    <div className="cardTaskList_tasks tasksCardTaskList">
        <TaskListItem id={0.3828421139863165} assignedUser='Какой-то пользователь, с длинным именем' priority={'low'} status={'open'} type='bug' taskName={'Написать статичные айдишники тасков, что-бы можно было настроить маршрутизацию'}/>
        <TaskListItem id={Math.random()}assignedUser='Какой-то пользователь, с длинным именем' priority={'medium'} status={'done'} type='task' taskName={'Сделать переход на taskPage из editTask, используя кнопку Сохранить'}/>
        <TaskListItem id={Math.random()}assignedUser='Какой-то пользователь, с длинным именем' priority={'low'} status={'test'} type='task' taskName={'Название задачи, желательно оооооооооооооооооооооооочень длинное. Я сказал оОООООООООООООООООЧень ещееееееееееее ещееещееееее'}/>
        <TaskListItem id={Math.random()}assignedUser='Какой-то пользователь, с длинным именем' priority={'medium'} status={'process'} type='task' taskName={'Название задачи, желательно длинное'}/>
        <TaskListItem id={Math.random()}assignedUser='Какой-то пользователь, с длинным именем' priority={'high'} status={'test'} type='task' taskName={'Название задачи, желательно длинное'}/>
        <TaskListItem id={Math.random()}assignedUser='Какой-то пользователь, с длинным именем' priority={'low'} status={'test'} type='task' taskName={'Название задачи, желательно длинное'}/>
        <TaskListItem id={Math.random()}assignedUser='Какой-то пользователь, с длинным именем' priority={'high'} status={'test'} type='task' taskName={'Название задачи, желательно длинное'}/>
        <TaskListItem id={Math.random()}assignedUser='Какой-то пользователь, с длинным именем' priority={'medium'} status={'test'} type='task' taskName={'Название задачи, желательно длинное'}/>
    </div>
  )
}

export {}