import React,{FC} from 'react'
import { UserPageTaskListItem } from 'entities/user';
import { Label } from 'shared';
import { Paginator } from 'wigets/paginator'
import '../styles/userTaskList.scss';

interface UserTaskListProps{
    
}

export const UserTaskList:FC<UserTaskListProps> = ({...UserTaskListProps}) => {
    const fillerFunction = (page:number) =>{
        
    }
    return (
        <div className='userPage_taskList userPageTaskList'>
            <Label content='Задачи'/>
            <div className="userPageTaskList_taskListContainer userTaskListContainer">
                <UserPageTaskListItem id={Math.random()} type='task' taskName='Some task name' status={'process'} priority='medium'/>
                <UserPageTaskListItem id={Math.random()} type='bug' taskName='Some task name' status={'open'} priority='high'/>
                <UserPageTaskListItem id={Math.random()} type='task' taskName='Some task name' status={'process'} priority='medium'/>
                <UserPageTaskListItem id={Math.random()} type='bug' taskName='Some task name' status={'test'} priority='low'/>
                <UserPageTaskListItem id={Math.random()} type='task' taskName='Some task name' status={'done'} priority='medium'/>
                <UserPageTaskListItem id={Math.random()} type='bug' taskName='Some task name' status={'test'} priority='high'/>
                <UserPageTaskListItem id={Math.random()} type='task' taskName='Some task name' status={'process'} priority='medium'/>
                <UserPageTaskListItem id={Math.random()} type='bug' taskName='Some task name' status={'open'} priority='low'/>
            </div>
            <Paginator 
                
                showedItemCountTotal={5}
            />
        </div>
    )
}

export {}