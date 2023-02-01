import React,{FC} from 'react'
import {getPriorityName} from 'entities/taskPage'

interface TaskInfoItemProps{
label:string,
content:string,
purpose?:string
}

export const TaskInfoItem:FC<TaskInfoItemProps> = ({purpose,label,content,...TaskInfoItemProps}) => {
  if (purpose === 'priority'){content = getPriorityName(content)}
  if (purpose === 'status'){content = content[1]}
  return (
    <div className="taskInfoItems_item">
    <label>{label}</label>
    <p>{content}</p>
  </div>
  )
}

export {}