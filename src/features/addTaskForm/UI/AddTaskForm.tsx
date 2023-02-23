import React,{FC, useState} from 'react'
import { Button, Dropdown as AddTaskDropdown, Label, Textarea as AddTaskTextarea, Divider as AddTaskDivider } from 'shared'
import '../styles/addTask.scss'

interface AddTaskFormProps{
    closeFormCallback:()=>void
}

export const AddTaskForm:FC<AddTaskFormProps> = ({closeFormCallback,...AddTaskFormProps}) => {
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
    const getDropdownValue = (arg:string,value:string) =>{

    }
    return (
        <div className='taskList_addTask addTask'>
            <div className="addTask_form addTaskForm">
                <div className="addTaskForm_title">
                    <p>Создание запроса</p>
                </div>
                <div className="addTaskForm_content">
                    <div className="addTaskForm_left">
                        <div className="addTaskForm_formItems addTaskFormFormItems">
                            <Label content='Тип'/>
                            <AddTaskDropdown returnValue={getDropdownValue}monitorableState={isFormItemsClear} parentClass='addTaskFormFormItems' defaultContent='Выберите тип' dropdownItems={['Создание','Фикс'] }/>
                            <Label content='Пользователь'/>
                            <AddTaskDropdown returnValue={getDropdownValue}monitorableState={isFormItemsClear} parentClass='addTaskFormFormItems' defaultContent='Выберите исполнителя' dropdownItems={['Шерлок Хоумс','Шерлок Хоумс','Шерлок Хоумс','Шерлок Хоумс']}/>
                            <Label content='Статус'/>
                            <AddTaskDropdown returnValue={getDropdownValue}monitorableState={isFormItemsClear} parentClass='addTaskFormFormItems' defaultContent='Выберите статус' dropdownItems={['Открыто','В работе','Тестирование','Завершено']}/>
                            <Label content='Приоритет'/>
                            <AddTaskDropdown returnValue={getDropdownValue}monitorableState={isFormItemsClear} parentClass='addTaskFormFormItems' defaultContent='Выберите приоритет' dropdownItems={['Низкий','Средний','Высокий']}/>
                            <Label content='Название задачи'/>
                            <AddTaskTextarea placeholder='Введите название задачи' purpose='addTaskFormFormTaskName' monitorableState={isFormItemsClear}/>
                        </div>
                    </div>
                    <AddTaskDivider purpose='addTaskForm'/>
                    <div className="addTaskForm_right">
                        <Label content='Описание'/>
                        <AddTaskTextarea placeholder='Введите описание задания' monitorableState={isFormItemsClear} purpose={'addTaskFormFormDescription'}/>
                    </div>
                </div>
                <div className="addTaskForm_buttons">
                    <Button color='primary' content='Сохранить' callback={saveChangesButtonClickHanler} parentClass={'addTaskForm'}/>
                    <Button color='white' content='Отмена' callback={denyChangesButtonClickHanler} parentClass={'addTaskForm'}/>
                </div>
            </div>
        </div>
    )
}

export {}