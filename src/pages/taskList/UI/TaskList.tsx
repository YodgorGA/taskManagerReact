import React,{FC, useEffect, useState} from 'react'
import { TaskListWidget } from 'wigets/task/taskList'
import { TaskFilter } from 'wigets/task/taskFilter'
import { Paginator } from 'wigets/paginator'
import { AddTaskForm } from 'features/addTaskForm'
import { taskFilterParams, Tasks, useGetTaskListMutation } from 'entities/task'
import { Button,CardHeader } from 'shared'

export const TaskList:FC = () => {
    const parentClass = 'taskList'
    const [modalVisibility,setModalVisibility] = useState<string>('hidden');
    const [visibleTasks,setVisibleTasks] = useState<Tasks>();
    const [fetchTaskListDataBody,setFetchTaskListDataBody] = useState({filter:{},page:0,limit:8})
    const [taskListTotal,setTaskListTotal] = useState<number>(0);
    const [getTaskList] = useGetTaskListMutation();
    const [isDataChangedFromButton,setIsDataChangedFromButton] = useState(false);

    const toggleModalVisibilityButtonClickHandler = () =>{
        modalVisibility === 'hidden'?setModalVisibility('visible'):setModalVisibility('hidden');
    }

    const returnFilterParams = (params:taskFilterParams) =>{
        setFetchTaskListDataBody({
            ...fetchTaskListDataBody,
            filter:params,
        })
    }

    const returnPageNumber = (page:number) =>{
        setFetchTaskListDataBody({
            ...fetchTaskListDataBody,
            page:page,
        })
    }

    const fetchData = () =>{
        setIsDataChangedFromButton(true);
        setTimeout(()=>{
            setIsDataChangedFromButton(false);
        },0)
    }

    useEffect(()=>{
        getTaskList(fetchTaskListDataBody).unwrap().then((response)=>{
            setVisibleTasks(response);
            setTaskListTotal(response.total);     
        })
        
         
    },[fetchTaskListDataBody,isDataChangedFromButton,getTaskList])

    return (
    <div className='taskList_container _container'>
        <div className="taskList_contentWrapper _contentWrapper">
            <CardHeader parentClass={parentClass} title='Задачи' childButtons={<Button callback={toggleModalVisibilityButtonClickHandler} color='primary' content='Добавить задачу' parentClass='_cardHeader' key={0}/>}/>
            <div className="taskList_card _card cardTaskList">
                <TaskFilter returnFilterParams={returnFilterParams}/>
                <TaskListWidget fetchData={fetchData} filteredData={visibleTasks}/>
            </div>
            <Paginator handlePageChangeFetchCallback={returnPageNumber} parentClass={parentClass} showedItemCountTotal={taskListTotal}/>
        </div>
        <div className={`${parentClass}_modal _modal__${modalVisibility}`}>
            <AddTaskForm fetchData={fetchData} closeFormCallback={toggleModalVisibilityButtonClickHandler}/>
        </div>
    </div>

  )
}

export {}