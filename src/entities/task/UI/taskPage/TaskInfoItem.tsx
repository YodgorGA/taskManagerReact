import React,{FC} from 'react'

interface TaskInfoItemProps{
label:string,
content:string | undefined,
}

export const TaskInfoItem:FC<TaskInfoItemProps> = ({label,content,...TaskInfoItemProps}) => {
  return (
    <div className="taskInfoItems_item">
    <label>{label}</label>
    <p>{content}</p>
  </div>
  )
}

export {}