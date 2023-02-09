import React,{FC} from 'react'
import { TaskListItem } from 'entities/taskList'

export const TaskList:FC = () => {
  return (
    <div className="cardTaskList_tasks tasksCardTaskList">
        <TaskListItem id={0.3828421139863165} assignedUser='Какой-то пользователь, с длинным именем' priority={'high'} status={'open'} type='bug' taskName={'Написать статичные айдишники тасков, что-бы можно было настроить маршрутизацию'}/>
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