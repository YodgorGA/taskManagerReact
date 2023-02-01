import React,{FC} from 'react'
import { TaskListItem } from 'entities/taskList'

export const TaskList:FC = () => {
  return (
    <div className="cardTaskList_tasks tasksCardTaskList">
        <TaskListItem id={Math.random()}assignedUser='Какой-то пользователь, с длинным именем' priority={'high'} status={['open','Открыто']} type='bug' taskName={'Название задачи, желательно длинное'}/>
        <TaskListItem id={Math.random()}assignedUser='Какой-то пользователь, с длинным именем' priority={'medium'} status={['done','Завершено']} type='task' taskName={'Название задачи, желательно длинное'}/>
        <TaskListItem id={Math.random()}assignedUser='Какой-то пользователь, с длинным именем' priority={'low'} status={['test','Тестирование']} type='task' taskName={'Название задачи, желательно оооооооооооооооооооооооочень длинное. Я сказал оОООООООООООООООООЧень ещееееееееееее ещееещееееее'}/>
        <TaskListItem id={Math.random()}assignedUser='Какой-то пользователь, с длинным именем' priority={'medium'} status={['process','В работе']} type='task' taskName={'Название задачи, желательно длинное'}/>
        <TaskListItem id={Math.random()}assignedUser='Какой-то пользователь, с длинным именем' priority={'high'} status={['test','Тестирование']} type='task' taskName={'Название задачи, желательно длинное'}/>
        <TaskListItem id={Math.random()}assignedUser='Какой-то пользователь, с длинным именем' priority={'low'} status={['test','Тестирование']} type='task' taskName={'Название задачи, желательно длинное'}/>
        <TaskListItem id={Math.random()}assignedUser='Какой-то пользователь, с длинным именем' priority={'high'} status={['test','Тестирование']} type='task' taskName={'Название задачи, желательно длинное'}/>
        <TaskListItem id={Math.random()}assignedUser='Какой-то пользователь, с длинным именем' priority={'medium'} status={['test','Тестирование']} type='task' taskName={'Название задачи, желательно длинное'}/>
    </div>
  )
}

export {}