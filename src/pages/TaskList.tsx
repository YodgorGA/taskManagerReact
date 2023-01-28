import React,{FC} from 'react'
import { Button } from '../components/page/Button'
import { CardHeader } from '../components/page/CardHeader'
import { Filter } from '../components/page/filter/Filter'
import { Paginator } from '../components/page/paginator/Paginator'
import { TaskListItem } from '../components/taskList/TaskListItem'

export const TaskList:FC = () => {
    const parentClass = 'taskList'
    return (
    <div className='taskList_container _container'>
        <div className="taskList_contentWrapper _contentWrapper">
            <CardHeader parentClass={parentClass} title='Задачи' childButtons={<Button color='primary' content='Добавить задачу' parentClass='_cardHeader' key={0}/>}/>
            <div className="taskList_card _card cardTaskList">
                <Filter type='tasks'/>
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
                
            </div>
            <Paginator parentClass={parentClass} showedItemCountEnd='10' showedItemCountTotal='10' showedItemCountStart='1'/>
        </div>
    </div>

  )
}

export {}