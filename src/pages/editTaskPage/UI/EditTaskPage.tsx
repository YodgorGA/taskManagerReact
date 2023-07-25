import React,{useEffect, useState} from 'react'
import { getIdFromLocation, resetField } from 'shared';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, CardHeader, Divider as EditTaskPageDivider } from 'shared'
import { EditTaskDescriptionWidget } from 'wigets/editTask/editTaskDescription';
import { EditTaskInfoWidget } from 'wigets/editTask/editTaskInfo';
import { dataForTaskEdit, getTaskDropdownStaticArgument, useChangeTaskStausMutation, useEditTaskMutation, useGetTaskByIdQuery } from 'entities/task';
import { useGetUserByNicknameMutation, useGetUsersAllQuery } from 'entities/user';
import { taskFiller } from 'pages/taskPage';

export const EditTaskPage = () => {
    const [isChangesSaved,setIsChangesSaved] = useState<boolean>(false);

    const location = useLocation()
    const navigate = useNavigate();
    const id = getIdFromLocation(location);
    const {data:taskData} = useGetTaskByIdQuery(id)
    const {data:userAllData} = useGetUsersAllQuery();
    const [userData] = useGetUserByNicknameMutation();

    const [editParams,setEditParams] = useState<dataForTaskEdit>({
        id:id,
        assignedId:undefined,
        description:undefined,
        rank:undefined,
        title:undefined,
        type:undefined,
        userId:undefined,
        status:undefined,
    })

    const [editTask] = useEditTaskMutation();
    const [changeTaskStatus] = useChangeTaskStausMutation();

    const saveChangesButtonHandler = () =>{
        editTask(editParams).then(()=>{
            navigate(location.pathname.substring(0,location.pathname.length -5), {state:{isUpdated:true}})
        })
        resetField(setIsChangesSaved)
    }
    const denyChangesButtonClickHandler = () =>{        
        navigate(location.pathname.substring(0,location.pathname.length -5), {state:{isUpdated:false}})
    }

    const setParamsByApi = (value:string)=>{
      userData(value).unwrap().then((result)=>{
        setEditParams({
          ...editParams,
          assignedId:result.data[0].id,
          });
      });
    }
    const setParamsByProps = (value:string,arg:string)=>{
      if(arg === 'status'){
        changeTaskStatus({id:id,status:getTaskDropdownStaticArgument(arg,value)})
      }
      setEditParams({
        ...editParams,
        [arg]:getTaskDropdownStaticArgument(arg,value)
      })
    }
  
    const setParamsByInput = (value:string,arg:string)=>{
      setEditParams({
        ...editParams,
        [arg]:value
      })
    }
    
    useEffect(()=>{
        if(taskData?.userId !== undefined){
            setEditParams({
                id:id,
                assignedId:taskData.assignedId,
                userId:taskData.userId,
                description:taskData.description,
                rank:taskData.rank,
                status:taskData.status,
                title:taskData.title,
                type:taskData.type
            });
        }
    },[taskData,id])
    return (
    <div className='editTaskPage_container _container'>
        <div className="editTaskPage_contentWrapper _contentWrapper">
            <CardHeader title='Редактирование'
            childButtons={[
                <Button callback={saveChangesButtonHandler} variant='primary' content='Сохранить' key={0}/>,
                <Button callback={denyChangesButtonClickHandler} variant='white' content='Отмена' key={1}/>
            ]}/>
            <div className="editTaskPage_card _card cardEditTaskPage">
                <EditTaskInfoWidget
                    taskData={taskData !== undefined? taskData:taskFiller}
                    assignedUserDropdownData={userAllData !== undefined?userAllData.map((user)=>{return user.username}):[]}
                    assignedUserDropdownRelatedData={userAllData !== undefined?userAllData.map((user)=>{return user.id}):[]}
                    returnEditParamsByApi={setParamsByApi}
                    returnEditParamsByInput={setParamsByInput}
                    returnEditParamsByProps={setParamsByProps} 
                    monitorableState={isChangesSaved}
                />
                <EditTaskPageDivider/>
                <EditTaskDescriptionWidget 
                    taskData={taskData !== undefined?taskData:taskFiller}
                    returnEditParams={setParamsByInput} 
                />
            </div>
        </div>
    </div>
  )
}

export {}