import React,{FC} from 'react'
import { Task, TaskInfoItem } from 'entities/task'
import { TaskInfoAddWorkTime } from 'features/addWorkTime'
import { useGetUserByIdQuery, useUserState } from 'entities/user'
import { convertTimeToHoursMinutes, getTaskRank, getTaskStatus, getTaskType, transformDate } from '../helpers/helper'

interface TaskInfoProps{
  taskData:Task
}

export const TaskInfo:FC<TaskInfoProps> = ({taskData,...TaskInfoProps}) => {
  const {status,type,rank,userId,assignedId,dateOfCreation,dateOfUpdate,timeInMinutes,id} = taskData;
  const {data:assignedUserData} = useGetUserByIdQuery(assignedId);
  const {data:taskCreatorUser} = useGetUserByIdQuery(userId);
  const currentUser = useUserState().currentUser?.id
  return (
    <div className="cardTaskPage_taskInfo taskInfoItems">
    <TaskInfoItem content={getTaskStatus(status)} label='Статус' key={1}/>
    <TaskInfoItem content={getTaskType(type)} label='Тип запроса' key={2}/>
    <TaskInfoItem content={getTaskRank(rank)} label='Приоритет' key={3}/>
    <TaskInfoItem content={taskCreatorUser && taskCreatorUser.username} label='Автор задачи' key={4}/>
    <TaskInfoItem content={assignedUserData && assignedUserData.username} label='Исполнитель задачи' key={5}/>
    <TaskInfoItem content={transformDate(dateOfCreation)} label='Дата создания' key={6}/>
    <TaskInfoItem content={transformDate(dateOfUpdate)} label='Дата изменения' key={7}/>

    <TaskInfoAddWorkTime taskId={id} currentUser={currentUser !== undefined?currentUser:'Загрузка...'} elapsedTimeForLib={timeInMinutes} elapsedTimeForView={convertTimeToHoursMinutes(timeInMinutes)}/>

  </div>
  )
}

export {}