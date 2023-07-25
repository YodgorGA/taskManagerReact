import React,{FC, useState} from 'react'
import { Button, Input, Label, Textarea } from 'shared'
import '../styles/editUserInfo.scss'

interface EditUserInfoProps{
    closeFormCallback:()=>void,
    
}

export const EditUserInfo:FC<EditUserInfoProps> = ({closeFormCallback,...EditUserInfoProps}) => {
    const [isFormItemsClear,setIsFormItemsClear] = useState<boolean>(true);
    const clearForm = ()=>{
        setIsFormItemsClear(false)
        setTimeout(()=>{setIsFormItemsClear(true)},0)
    }
    const saveChangesButtonClickHanler = ()=>{
        closeFormCallback()
        clearForm()
    }
    const denyChangesButtonClickHanler = ()=>{
        closeFormCallback()
        clearForm()
    }
    return (
        <div className='editUserInfo'>
            <div className="editUserInfo_form editUserInfoForm">
                <div className="editUserInfoForm_title"><p>Редактирование пользователя</p></div>
                <div className="editUserInfoForm_formItems">
                    <Label content='Имя пользователя'/>
                    <Input variant='primary' placeholder='Введите имя пользователя' type='text' monitorableState={isFormItemsClear}/>
                    <Label content='URL фотографии'/>
                    <Input variant='primary' placeholder='Введите URL изображения' type='text' monitorableState={isFormItemsClear}/>
                    <Label content='О себе'/>
                    <Textarea placeholder='Введите описание' monitorableState={isFormItemsClear}/>
                </div>
                <div className="editUserInfoForm_buttons">
                    <Button variant='primary' content='Сохранить' callback={saveChangesButtonClickHanler}/>
                    <Button variant='white' content='Отмена' callback={denyChangesButtonClickHanler}/>
                </div>
            </div>
        </div>
    )
}

export {}