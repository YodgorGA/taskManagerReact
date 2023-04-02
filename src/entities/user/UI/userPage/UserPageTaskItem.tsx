import React,{FC} from 'react'
import 'entities/task/styles/taskListItem.scss';

interface UserPageTaskItemProps{
    type:string,
    taskName:string,
    status:string,
    priority:string,
    id:number
}

export const UserPageTaskItem:FC<UserPageTaskItemProps> = ({id,priority,status,taskName,type,...UserPageTaskItemProps}) => {
    return (
        <div className='userTaskListContainer_item taskListItem'>
            <div className={`taskListItem_type__${type}`}></div>
            <div className="taskListItem_taskName"><p>{taskName}</p></div>
            <div className={`taskListItem_status`}>
                <div className={`taskStatus__${status}`}></div>
            </div>
            <div className={`taskListItem_priority__${priority}`}></div>
        </div>
    )
}

export {}