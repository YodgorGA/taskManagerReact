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
                    <Input placeholder='Введите имя пользователя' type='text' monitorableState={isFormItemsClear}/>
                    <Label content='URL фотографии'/>
                    <Input placeholder='Введите URL изображения' type='text' monitorableState={isFormItemsClear}/>
                    <Label content='О себе'/>
                    <Textarea placeholder='Введите описание' purpose='editUserInfoForm' monitorableState={isFormItemsClear}/>
                </div>
                <div className="editUserInfoForm_buttons">
                    <Button color='primary' content='Сохранить' callback={saveChangesButtonClickHanler} parentClass={'editUserInfoForm'}/>
                    <Button color='white' content='Отмена' callback={denyChangesButtonClickHanler} parentClass={'editUserInfoForm'}/>
                </div>
            </div>
        </div>
    )
}

export {}