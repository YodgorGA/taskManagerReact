import React,{FC, useState} from 'react'
import { Link } from 'react-router-dom';

interface TaskListItemProps{
  type:string,
  taskName:string,
  assignedUser:string,
  status:string[],
  priority:string,
  id:number
}

export const TaskListItem:FC<TaskListItemProps> = ({id,assignedUser,priority,status,type,taskName,...TaskListItemProps}) => {
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
    <div className="tasksCardTaskList_item itemTasksCardTaskList">
      <div className={`itemTasksCardTaskList_type__${type}`}></div>
      <div className="itemTasksCardTaskList_taskName"><p>{taskName}</p></div>
      <div className="itemTasksCardTaskList_assignedUser"><p>{assignedUser}</p></div>
      <div className={`itemTasksCardTaskList_status`}>
        <div className={`taskStatus__${status[0]}`}></div>
      </div>
      <div className={`itemTasksCardTaskList_priority__${priority}`}></div>
      <div className="itemTasksCardTaskList_menuButton taskDropdown">
        <div className={`taskDropdown_button__${dropdownButtonState}`} onClick={handleDropdownState}></div>
        <div className={`taskDropdown_droppedField__${dropdownState} droppedFieldTaskDropdown`}>
            <div className="droppedFieldTaskDropdown_sendToTest">На тестирование</div>
            <Link 
              to={`/tasks/${id}`} state={{assignedUser,priority,status,type,taskName}}
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