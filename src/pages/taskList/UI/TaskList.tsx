import React,{FC, useEffect, useState} from 'react'
import { Button } from 'shared'
import { CardHeader } from 'shared'
import { TaskFilter } from 'wigets/task/taskFilter'
import { Paginator } from 'wigets/paginator'
import { TaskListWidget } from 'wigets/task/taskList'
import { AddTaskForm } from 'features/addTaskForm'
import { Task, Tasks } from 'entities/task'

export const TaskList:FC = () => {
    const parentClass = 'taskList'
    const [modalVisibility,setModalVisibility] = useState<string>('hidden');
    const [visibleTasks,setVisibleTasks] = useState<Tasks>();
    const toggleModalVisibilityButtonClickHandler = () =>{
        modalVisibility === 'hidden'?setModalVisibility('visible'):setModalVisibility('hidden');
    }
    const returnFilteredData = (tasks:Tasks) =>{
        setVisibleTasks(tasks);
    }
    useEffect(()=>{
        
    },[visibleTasks])
    return (
    <div className='taskList_container _container'>
        <div className="taskList_contentWrapper _contentWrapper">
            <CardHeader parentClass={parentClass} title='Задачи' childButtons={<Button callback={toggleModalVisibilityButtonClickHandler} color='primary' content='Добавить задачу' parentClass='_cardHeader' key={0}/>}/>
            <div className="taskList_card _card cardTaskList">
                <TaskFilter returnDataToTaskList={returnFilteredData}/>
                <TaskListWidget filteredData={visibleTasks}/>
            </div>
            <Paginator parentClass={parentClass} showedItemCountEnd='10' showedItemCountTotal='10' showedItemCountStart='1'/>
        </div>
        <div className={`${parentClass}_modal _modal__${modalVisibility}`}>
            <AddTaskForm closeFormCallback={toggleModalVisibilityButtonClickHandler}/>
        </div>
    </div>

  )
}

export {}