import React,{FC} from 'react'
import { Button } from 'shared'
import { CardHeader } from 'shared'
import { TaskFilter } from 'wigets/taskFilter'
import { Paginator } from 'wigets/paginator'
import { TaskListWidget } from 'wigets/taskList'

export const TaskList:FC = () => {
    const parentClass = 'taskList'
    return (
    <div className='taskList_container _container'>
        <div className="taskList_contentWrapper _contentWrapper">
            <CardHeader parentClass={parentClass} title='Задачи' childButtons={<Button color='primary' content='Добавить задачу' parentClass='_cardHeader' key={0}/>}/>
            <div className="taskList_card _card cardTaskList">
                <TaskFilter/>
                <TaskListWidget/>
            </div>
            <Paginator parentClass={parentClass} showedItemCountEnd='10' showedItemCountTotal='10' showedItemCountStart='1'/>
        </div>
    </div>

  )
}

export {}