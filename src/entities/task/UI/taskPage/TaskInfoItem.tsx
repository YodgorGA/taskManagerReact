import React,{FC, useEffect} from 'react'

interface TaskInfoItemProps{
label:string,
content:string | undefined,
monitorableState?:string
}

export const TaskInfoItem:FC<TaskInfoItemProps> = ({monitorableState,label,content,...TaskInfoItemProps}) => {
  useEffect(()=>{},[monitorableState])
  return (
    <div className="taskInfoItems_item">
    <label>{label}</label>
    <p>{content}</p>
  </div>
  )
}

export {}