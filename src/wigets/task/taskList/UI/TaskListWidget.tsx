import React,{FC, useEffect, useState} from 'react'
import { Task, TaskListItem } from 'entities/task'
import { Tasks } from 'entities/task'
import styled from '@emotion/styled';
import { colors } from 'shared';

interface TaskListWidgetProps{
  filteredData?:Tasks,
  fetchData:()=>void,
}

export const TaskList:FC<TaskListWidgetProps> = ({fetchData,filteredData,...TaskListWidgetProps}) => {
  const [taskList,setTaskList] = useState<Tasks>();
  
  useEffect(()=>{
    setTaskList(filteredData);
  },[filteredData])
  if(taskList?.data !== null){
    return (
      <StyledTaksListContainer>
        {
          taskList?.data.map((task:Task)=>{
            return <TaskListItem fetchData={fetchData} assignedId={task.assignedId} id={task.id} key={task.id}/>
          })
        }
      </StyledTaksListContainer>
    )
  }
  return (
    <StyledTaksListContainer/>
  )
}

const StyledTaksListContainer = styled.div`
    position: relative;
    width: 1240px;
    height: 512px;
    border: 1px solid ${colors.disabledColors.disabledElementColor};
    border-radius: 3px;
    margin-top: 20px;
    overflow: hidden;
    box-sizing: border-box;
    `

export {}