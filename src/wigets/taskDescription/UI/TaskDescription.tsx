import React,{FC} from 'react'

interface TaskDescriptionProps{
    content:string
}

export const TaskDescription:FC<TaskDescriptionProps> = ({content,...TaskDescriptionProps}) => {
  return (
    <div className="cardTaskPage_taskDescr">
        <label>Описание</label>
        <p>{content}</p>
    </div>
  )
}

export {}