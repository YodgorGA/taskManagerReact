import React,{FC} from 'react'
import { TaskInfoItem } from 'entities/task'
import { TaskInfoAddWorkTime } from 'features/addWorkTime'

interface TaskInfoProps{
    status:string,
    type:string,
    priority:string,
    assignedUser:string
}

export const TaskInfo:FC<TaskInfoProps> = ({assignedUser,priority,status,type,...TaskInfoProps}) => {
  return (
    <div className="cardTaskPage_taskInfo taskInfoItems">
    <TaskInfoItem purpose='status' content={status} label='Статус' key={1}/>
    <TaskInfoItem content={(type !== 'bug')?'Задача':'Исправление'} label='Тип запроса' key={2}/>
    <TaskInfoItem purpose='priority'content={priority} label='Приоритет' key={3}/>
    <TaskInfoItem content='C апишки получу'label='Автор задачи' key={4}/>
    <TaskInfoItem content={assignedUser} label='Исполнитель задачи' key={5}/>
    <TaskInfoItem content='C апишки получу'label='Дата создания' key={6}/>
    <TaskInfoItem content='C апишки получу'label='Дата изменения' key={7}/>

    <TaskInfoAddWorkTime/>

  </div>
  )
}

export {}