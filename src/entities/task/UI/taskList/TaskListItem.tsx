import React,{FC, useState} from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../../styles/taskListItem.scss';

interface TaskListItemProps{
  type:string,
  taskName:string,
  assignedUser:string,
  status:string,
  priority:string,
  id:number
}

export const TaskListItem:FC<TaskListItemProps> = ({id,assignedUser,priority,status,type,taskName,...TaskListItemProps}) => {
  const location = useLocation();
  const [dropdownState,setDropdownState] = useState('closed');
  const [dropdownButtonState,setDropdownButtonState] = useState('stayed');
  const handleDropdownState = () =>{
    if (dropdownButtonState === 'stayed'){
      setDropdownButtonState('active');
      setDropdownState('open'); 
    }
    else{
      setDropdownButtonState('stayed');
      setDropdownState('closed'); 
    }
  }
  return (
    <div className="tasksCardTaskList_item taskListItem">
      <div className={`taskListItem_type__${type}`}></div>
      <div className="taskListItem_taskName"><p>{taskName}</p></div>
      <div className="taskListItem_assignedUser"><p>{assignedUser}</p></div>
      <div className={`taskListItem_status`}>
        <div className={`taskStatus__${status}`}></div>
      </div>
      <div className={`taskListItem_priority__${priority}`}></div>
      <div className="taskListItem_menuButton taskDropdown">
        <div className={`taskDropdown_button__${dropdownButtonState}`} onClick={handleDropdownState}></div>
        <div className={`taskDropdown_droppedField__${dropdownState} droppedFieldTaskDropdown`}>
            <div className="droppedFieldTaskDropdown_sendToTest">На тестирование</div>
            <Link 
              to={`/tasks/${id}`} state={{from:location.pathname,assignedUser,priority,status,type,taskName}}
              className="droppedFieldTaskDropdown_edit"
              >Редактировать</Link>
            <div className="droppedFieldTaskDropdown_reopen">Переоткрыть</div>
            <div className="droppedFieldTaskDropdown_delete">Удалить</div>
        </div>
      </div>
    </div>
  )
}

export {}