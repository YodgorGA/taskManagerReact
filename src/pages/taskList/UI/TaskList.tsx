import React,{FC, useEffect, useState} from 'react'
import { TaskListWidget } from 'wigets/task/taskList'
import { TaskFilter } from 'wigets/task/taskFilter'
import { Paginator } from 'wigets/paginator'
import { AddTaskForm } from 'features/addTaskForm'
import { taskFilterParams, Tasks, useGetTaskListMutation } from 'entities/task'
import { PageContainer } from 'pages/test/UI/PageContainer'
import { ContentWrapper } from 'pages/test/UI/ContentWrapper'
import { CardHeader as TestCardHeader } from 'pages/test/UI/CardHeader'
import { PageCard } from 'pages/test/UI/PageCard'
import { Button as TestButton } from 'pages/test/UI/Button'
import { PageModal } from 'pages/test/UI/PageModal'

export const TaskList:FC = () => {
    const parentClass = 'taskList'
    const [modalVisibility,setModalVisibility] = useState<boolean>(false);
    const [visibleTasks,setVisibleTasks] = useState<Tasks>();
    const [fetchTaskListDataBody,setFetchTaskListDataBody] = useState({filter:{},page:0,limit:8})
    const [taskListTotal,setTaskListTotal] = useState<number>(0);
    const [getTaskList] = useGetTaskListMutation();
    const [isDataChangedFromButton,setIsDataChangedFromButton] = useState(false);

    const toggleModalVisability = () =>{
        modalVisibility === false?setModalVisibility(true):setModalVisibility(false);
    }

    const returnFilterParams = (params:taskFilterParams) =>{
        setFetchTaskListDataBody({
            ...fetchTaskListDataBody,
            filter:params,
            page:0
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

    useEffect(()=>{
        if(fetchTaskListDataBody.page > 0){
            setFetchTaskListDataBody({
                ...fetchTaskListDataBody,
                page:(taskListTotal % 8 > 0)? Math.floor(taskListTotal / 8):taskListTotal/8 -1
            })
        }
        console.log(fetchTaskListDataBody.page)
    },[modalVisibility])

    return (
    <PageContainer>
        <ContentWrapper padding='24px 0px 0px 0px' width='1280px' flexDirection='column' alignItems='flex-start'>
            <TestCardHeader title='Задачи' 
                childButtons={
                    <TestButton callback={toggleModalVisability} variant='primary' content='Добавить задачу' key={0}/>
                }
            />
            <PageCard>
                <TaskFilter returnFilterParams={returnFilterParams}/>
                <TaskListWidget fetchData={fetchData} filteredData={visibleTasks}/>
            </PageCard>
            <Paginator handlePageChangeFetchCallback={returnPageNumber} parentClass={parentClass} showedItemCountTotal={taskListTotal}/>
        </ContentWrapper>
        <PageModal visible={modalVisibility}>
            <AddTaskForm fetchData={fetchData} closeFormCallback={toggleModalVisability}/>
        </PageModal>
    </PageContainer>

  )
}

export {}