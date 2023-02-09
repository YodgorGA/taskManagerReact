import React,{FC, useState} from 'react'
import { useLocation } from 'react-router-dom'
import { Button, CardHeader, LinkButton, Divider as EditTaskPageDivider } from 'shared'
import { EditTaskDescriptionWidget } from 'wigets/editTaskDescription';
import { EditTaskInfoWidget } from 'wigets/editTaskInfo';

export const EditTaskPage = () => {
    const [isChangesSaved,setIsChangesSaved] = useState<boolean>(false);
    const saveChangesButtonHandler = () =>{
        setIsChangesSaved(true);
        setTimeout(()=>{setIsChangesSaved(false)},0)
    }
    return (
    <div className='editTaskPage_container _container'>
        <div className="editTaskPage_contentWrapper _contentWrapper">
            <CardHeader parentClass='editTaskPage' title='Редактирование'
            childButtons={[
                <Button callback={saveChangesButtonHandler} color='primary' content='Сохранить' parentClass='editTaskPage' key={0}/>,
                <Button color='white' content='Отмена' parentClass='editTaskPage' key={1}/>
            ]}/>
            <div className="editTaskPage_card _card cardEditTaskPage">
                <EditTaskInfoWidget monitorableState={isChangesSaved}/>
                <EditTaskPageDivider/>
                <EditTaskDescriptionWidget monitorableState={isChangesSaved}/>
            </div>
        </div>
    </div>
  )
}

export {}