import React,{FC, useEffect, useState} from 'react'
import { useGetUserByIdQuery } from 'entities/user';
import { useChangeTaskStausMutation, useGetTaskByIdQuery, useRemoveTaskMutation } from 'entities/task';
import { Link } from 'react-router-dom';
import { getListItemButtonItemsState } from 'entities/task';
import 'entities/task/styles/taskListItem.scss';

interface TaskListItemProps{
  id:string,
  assignedId:string,
  fetchData:()=>void
}

export const TaskListItem:FC<TaskListItemProps> = ({fetchData,id,assignedId,...TaskListItemProps}) => {
  const [dropdownState,setDropdownState] = useState('closed');
  const [dropdownButtonState,setDropdownButtonState] = useState('stayed');
  const [buttonItemState,setButtonItemState] = useState<{test:string,reopen:string}>()

  
  const {data:taskData,isFetching:isTaskFetching} = useGetTaskByIdQuery(id);
  const {data:userData} = useGetUserByIdQuery(assignedId);
  const [removeTask] = useRemoveTaskMutation();

  const [changeTaskStatus] = useChangeTaskStausMutation();
  
  const dropdownStateHandler = () =>{
    if (dropdownButtonState === 'stayed'){
      setDropdownButtonState('active');
      setDropdownState('open'); 
    }
    else{
      setDropdownButtonState('stayed');
      setDropdownState('closed'); 
    }
  }
  const toTestButtonClickHandler = () =>{
    changeTaskStatus({id:id,status:'testing'})
  }
  const reopenButtonClickHandler = () =>{
    changeTaskStatus({id:id,status:'opened'})
  }
  const removeButtonClickHandler = () =>{
    removeTask(id).then(()=>{
      fetchData()
    })
  }

  useEffect(()=>{
    if(isTaskFetching === false){
      setButtonItemState(getListItemButtonItemsState(taskData?.status))
    }
  },[taskData?.status,isTaskFetching])
  return (
    <div className="tasksCardTaskList_item taskListItem">
      <div className={`taskListItem_type__${taskData?.type}`}></div>
      <div className="taskListItem_taskName"><p>{taskData?.title}</p></div>
      <div className="taskListItem_assignedUser"><p>{userData?.username}</p></div>
      <div className={`taskListItem_status`}>
        <div className={`taskStatus__${taskData?.status}`}></div>
      </div>
      <div className={`taskListItem_priority__${taskData?.rank}`}></div>
      <div className="taskListItem_menuButton taskDropdown">
        <div className={`taskDropdown_button__${dropdownButtonState}`} onClick={dropdownStateHandler}></div>
        <div className={`taskDropdown_droppedField__${dropdownState} droppedFieldTaskDropdown`}>
            <div 
            className={`droppedFieldTaskDropdown_sendToTest${
              (buttonItemState?.test !== '')?'__'+buttonItemState?.test:buttonItemState.test
            }`}
            onClick={toTestButtonClickHandler}>На тестирование</div>
            <Link to={`/tasks/${id}`} className="droppedFieldTaskDropdown_edit">Редактировать</Link>
            <div className={`droppedFieldTaskDropdown_reopen${
              (buttonItemState?.reopen !=='')?'__'+buttonItemState?.reopen:buttonItemState.reopen
            }`}
            onClick={reopenButtonClickHandler}>Переоткрыть</div>
            <div onMouseDown={removeButtonClickHandler} className="droppedFieldTaskDropdown_delete">Удалить</div>
        </div>
      </div>
    </div>
  )
}

export {}