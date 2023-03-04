import React,{FC, useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, LinkButton } from 'shared'
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
            <CardHeader parentClass='taskPage' title={taskData?.title} 
            childButtons={[
                <Button callback={becomeTaskAssignedUserButtonClickHandler} color='white' content='Взять в работу' parentClass='_cardHeader' key={0}/>,
                <LinkButton to={`${location.pathname}/edit`} color='primary' content='Редактировать' parentClass='_cardHeader' key={1}/>,
                <Button callback={removeTaskButtonClickHandler} color='danger' content='Удалить' parentClass='_cardHeader' key={2}/>
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