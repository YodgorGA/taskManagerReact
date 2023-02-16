import React,{FC} from 'react'
import { getPriorityName } from '../../lib/helpers/helpers'
import { getStatusName } from '../../lib/helpers/helpers'

interface TaskInfoItemProps{
label:string,
content:string,
purpose?:string
}

export const TaskInfoItem:FC<TaskInfoItemProps> = ({purpose,label,content,...TaskInfoItemProps}) => {
  if (purpose === 'priority'){content = getPriorityName(content)}
  if (purpose === 'status'){content = getStatusName(content)}
  return (
    <div className="taskInfoItems_item">
    <label>{label}</label>
    <p>{content}</p>
  </div>
  )
}

export {}