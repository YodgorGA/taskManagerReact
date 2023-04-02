import React,{FC, useEffect, useState} from 'react'
import { useGetUserByIdQuery } from 'entities/user';
import { useGetTaskByIdQuery } from 'entities/task';
import { TaskListButton } from './TaskListButton';
import { colors, VoidFunc } from 'shared';
import styled from '@emotion/styled';

interface TaskListItemProps{
  id:string,
  assignedId:string,
  fetchData?:VoidFunc,
  isOpen?:boolean
}

interface ColumnProps{
  status?:"opened"|"testing"|"inProgress"|"complete"
  type?:"task"|"bug"
  priority?:'low'|'medium'|'high'
}

export const TaskListItem:FC<TaskListItemProps> = ({isOpen,fetchData,id,assignedId,...TaskListItemProps}) => {
  const {data:taskData} = useGetTaskByIdQuery(id);
  const {data:userData} = useGetUserByIdQuery(assignedId);

  const [taskStatus,setTaskStatus] = useState<"opened"|"testing"|"inProgress"|"complete">('opened')

  useEffect(()=>{
    if(taskData !== undefined){
        setTaskStatus(taskData.status)
    }
  },[taskData])
  return (
    <StyledTaskListItem assignedId={assignedId} id={id} {...TaskListItemProps}>
      <ItemType type={taskData?.type}></ItemType>
      <ItemTaskName>{taskData?.title}</ItemTaskName>
      <ItemAssignedUser>{userData?.username}</ItemAssignedUser>
      <ItemStatus status={taskStatus}><div></div></ItemStatus>
      <ItemPriority priority={taskData?.rank}></ItemPriority>
      <TaskListButton assignedId={assignedId} id={id && id} taskDataStatus={taskData && taskData.status}/>
    </StyledTaskListItem>
  )
}

const StyledTaskListItem = styled.div<TaskListItemProps>`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    height: 64px;
    padding: 20px 30px;
    box-sizing: border-box;
    font-family:'Roboto';
    font-size:16px;
    font-weight:400;
    line-height:171%;
    &:nth-of-type(odd) {
        background-color: ${colors.listRowColors.whiteRow};
    }
    &:nth-of-type(even) {
        background-color: ${colors.listRowColors.grayRow};
    }
    &:first-of-type{
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
    margin-left: 60px;
    width: 527px;
    max-height: 54px;
    overflow: hidden;
`
const ItemAssignedUser = styled.div`
    width: 180px;
    margin-left: 20px;
    height: 27px;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
`

const ItemStatus = styled.div<ColumnProps>`
    width: 120px;
    margin-left: 13px;
    height: 40px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    
    & div{
      width: 90px;
      height: 26px;
      background-position: bottom;
      background-size: contain;
      background-repeat: no-repeat;
      background-image: ${({status})=>`url(img/taskList/taskStatus/${status}.svg)`};
    }
`

const ItemPriority = styled.div<ColumnProps>`
    width: 80px;
    height: 25px;
    margin-left: 35px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: ${({priority})=>`url(img/taskList/priority/${priority}.svg)`};
`
export {}