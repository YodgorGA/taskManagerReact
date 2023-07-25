import React,{FC, useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from 'shared'
import { CardHeader } from 'shared' 
import { Divider as TaskPageDivider} from 'shared'
import { TaskInfoWidget } from 'wigets/task/taskInfo'
import { TaskDescription } from 'wigets/task/taskDescription'
import { TaskCommentsWidget } from 'wigets/task/taskComments'
import { getIdFromLocation } from 'shared';
import { useEditTaskMutation, useGetTaskByIdQuery, useRemoveTaskMutation } from 'entities/task'
import { taskFiller } from 'pages/taskPage'
import { useUserState } from 'entities/user'

export const TaskPage:FC = ({...TaskPageProps}) => {
  const location = useLocation()
  const id = getIdFromLocation(location);
  const navigate = useNavigate();
  const {data:taskData,refetch} = useGetTaskByIdQuery(id)
  const currenUserId = useUserState().currentUser?.id;
  const [editTask] = useEditTaskMutation();
  const [removeTask] = useRemoveTaskMutation();
  
  const [isBecomeAssignedButtonClicked,setIsBecomeAssignedButtonClicked] = useState(false);

  const navigateToEditTaskPage = (state:{[key:string]:any}) =>{
    navigate(`${location.pathname}/edit`,state);
  }

  const becomeTaskAssignedUserButtonClickHandler = () =>{
  if(taskData !== undefined){
      editTask({
        ...taskData,
        assignedId:currenUserId
      }).then(()=>{setIsBecomeAssignedButtonClicked(true);});
    }
  }

  const removeTaskButtonClickHandler = () =>{
    removeTask(id).then(()=>{
      navigate('/tasks');
    })
  }
  useEffect(()=>{
    refetch();
    setIsBecomeAssignedButtonClicked(false);
  },[taskData,refetch,isBecomeAssignedButtonClicked,editTask,removeTask])
  return (
    <div className='taskPage_container _container'>
        <div className="taskPage_contentWrapper _contentWrapper">
            <CardHeader title={taskData?.title} 
            childButtons={[
                <Button callback={becomeTaskAssignedUserButtonClickHandler} variant='white' content='Взять в работу' key={0}/>,
                <Button callback={navigateToEditTaskPage} variant='primary' content='Редактировать' key={1}/>,
                <Button callback={removeTaskButtonClickHandler} variant='red' content='Удалить' key={2}/>
            ]}
            />
            <div className="taskPage_card _card cardTaskPage">
                <TaskInfoWidget  taskData={taskData !== undefined? taskData:taskFiller} />
                <TaskPageDivider/>
                <TaskDescription content={taskData !== undefined?taskData.description:''}/>
                <TaskPageDivider/>
                <TaskCommentsWidget currentUser={currenUserId !== undefined?currenUserId:''} task={taskData !== undefined?taskData:taskFiller}/>
            </div>
        </div>
    </div>
  )
}

export {}