import React,{FC, useState} from 'react'
import { dataForTaskCreation, getTaskDropdownStaticArgument, useAddTaskMutation } from 'entities/task'
import { useGetUserByNicknameMutation, useGetUsersAllQuery, useUserState } from 'entities/user'
import { Button, Dropdown as AddTaskDropdown, Label, Textarea as AddTaskTextarea, Divider as AddTaskDivider } from 'shared'
import 'features/addTaskForm/styles/addTask.scss';

interface AddTaskFormProps{
    closeFormCallback:()=>void,
    fetchData:()=>void,
}

export const AddTaskForm:FC<AddTaskFormProps> = ({fetchData,closeFormCallback,...AddTaskFormProps}) => {
    const [isFormItemsClear,setIsFormItemsClear] = useState<boolean>(true);
    const [addTask] = useAddTaskMutation();
    const userState = useUserState()
    const [addedData,setAddedData] = useState<dataForTaskCreation>({
        userId:userState.currentUser?.id,
        assignedId:'',
        description:undefined,
        rank:undefined,
        title:undefined,
        type:undefined
    });
    
    const {data:userAllData} = useGetUsersAllQuery();
    const [userData] = useGetUserByNicknameMutation<{data:[]}>();

    const clearForm = ()=>{
        setIsFormItemsClear(false)
        setTimeout(()=>{setIsFormItemsClear(true)},0)
    }
    const saveChangesButtonClickHanler = ()=>{
        addTask({
            ...addedData,
            assignedId:addedData.assignedId,
            description:addedData.description,
            rank:addedData.rank,
            title:addedData.title,
            type:addedData.type 
        })
        fetchData()
        clearForm()
        closeFormCallback()
    }
    const denyChangesButtonClickHanler = ()=>{
        clearForm()
        closeFormCallback()
    }
    const getFieldValue = (dataSource:string,arg:string,value:string) =>{
        if(dataSource === 'props'){
            setAddedData({
              ...addedData,
              [arg]:getTaskDropdownStaticArgument(arg,value)
            })
            }
            else if(dataSource === 'api'){
            userData(value).unwrap().then((result)=>{
              setAddedData({
                ...addedData,
                assignedId:result.data[0].id});
            });
            }
            else if(dataSource === 'input'){
            setAddedData({
              ...addedData,
              [arg]:value
            })
        }
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
                            <AddTaskDropdown 
                                dataSource='props' 
                                parentClass='type'
                                purpose='addTask'
                                returnValue={getFieldValue}
                                monitorableState={isFormItemsClear} 
                                defaultContent='Выберите тип' 
                                dropdownItems={['Создание','Фикс']}
                            />
                            <Label content='Пользователь'/>
                            <AddTaskDropdown 
                                dataSource='api' 
                                parentClass='assignedId'
                                purpose='addTask'
                                returnValue={getFieldValue}
                                monitorableState={isFormItemsClear} 
                                defaultContent='Выберите исполнителя' 
                                dropdownItems={userAllData !== undefined?userAllData.map((user)=>{return user.username}):[]}
                                relatedData = {userAllData !== undefined?userAllData.map((user)=>{return user.id}):[]}
                            />
                            <Label content='Приоритет'/>
                            <AddTaskDropdown 
                                dataSource='props'
                                parentClass='rank' 
                                purpose='addTask'
                                returnValue={getFieldValue}
                                monitorableState={isFormItemsClear} 
                                defaultContent='Выберите приоритет' 
                                dropdownItems={['Низкий','Средний','Высокий']}
                            />
                            <Label content='Название задачи'/>
                            <AddTaskTextarea
                                dataSource='input'
                                parentClass='title'
                                purpose='addTaskTitle' 
                                returnDataForApiCallback={getFieldValue}
                                monitorableState={isFormItemsClear} 
                                placeholder='Введите название задачи' 
                                />
                        </div>
                    </div>
                    <AddTaskDivider purpose='addTaskForm'/>
                    <div className="addTaskForm_right">
                        <Label content='Описание'/>
                        <AddTaskTextarea
                            dataSource='input'
                            parentClass='description'
                            purpose='addTaskDescription' 
                            returnDataForApiCallback={getFieldValue}
                            monitorableState={isFormItemsClear} 
                            placeholder='Введите описание задания' 
                            />
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