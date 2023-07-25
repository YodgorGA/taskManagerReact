import React,{FC, useEffect, useState} from 'react'
import styled from '@emotion/styled'
import { colors, VoidFunc } from 'shared'
import { useGetTaskByIdQuery } from 'entities/task/model/taskAPI'
import { useGetUserByIdQuery } from 'entities/user'
import { TaskListButton } from './TaskListButton'

interface TestTaskListItemProps{
    id:string,
    assignedId:string,
    fetchData?:VoidFunc,
    isOpen?:boolean
}

interface ColumnProps{
    variant?:"opened"|"testing"|"inProgress"|"complete"
    type?:"task"|"bug"
}


export const TestTaskListItem:FC<TestTaskListItemProps> = ({fetchData,id,assignedId,...TestTaskListItemProps}) => {
    const {data:taskData} = useGetTaskByIdQuery(id);
    const {data:userData} = useGetUserByIdQuery(assignedId);
    const [taskStatus,setTaskStatus] = useState<"opened"|"testing"|"inProgress"|"complete">('opened')
    
    
    useEffect(()=>{
        if(taskData !== undefined){
            setTaskStatus(taskData.status)
        }
    },[taskData])
    return (
        <StyledTestTaskListItem assignedId={assignedId} id={id}{...TestTaskListItemProps}>
            <ItemType>{taskData?.type}</ItemType>
            <ItemTaskName>{taskData?.title}</ItemTaskName>
            <ItemAssignedUser>{userData?.username}</ItemAssignedUser>
            <ItemStatus variant={taskStatus}></ItemStatus>
            <ItemPriority>{taskData?.rank}</ItemPriority>
            
            <TaskListButton assignedId={assignedId} id={id && id} taskDataStatus={taskData && taskData.status}/>
        </StyledTestTaskListItem>
    )
}

const StyledTestTaskListItem = styled.div<TestTaskListItemProps>`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    height: 64px;
    padding: 20px 30px;
    box-sizing: border-box;
    &:nth-child(odd) {
        background-color: ${colors.listRowColors.whiteRow};
    }
    &:nth-child(even) {
        background-color: ${colors.listRowColors.grayRow};
    }
    &:first-child{
        border-radius: 5px 5px 0px 0px;
    }
    &:last-child{
        border-radius: 0px 0px 5px 5px;
    }
`
const ItemType = styled.div<ColumnProps>`
    width: 24px;
    height: 24px;
    background-size: contain;
    background-image: ${({type})=> type === 'task'
    ?`url('img/taskList/taskIcon.png')`
    :`url('img/taskList/bugIcon.png')`
    };
`
const ItemTaskName = styled.div`
    
`
const ItemAssignedUser = styled.div`
    
`
const ItemStatus = styled.div<ColumnProps>`
    
`
const ItemPriority = styled.div`
    
`

export {}