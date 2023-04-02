import React,{FC, useState} from 'react'
import { dataForTaskCreation, getTaskDropdownStaticArgument, useAddTaskMutation } from 'entities/task'
import { useGetUserByNicknameMutation, useGetUsersAllQuery, useUserState } from 'entities/user'
import { Button, Dropdown as AddTaskDropdown, Label, Textarea as AddTaskTextarea, Divider as AddTaskDivider, ValueFunc, ValueDataKeyFunc } from 'shared'
import 'features/addTaskForm/styles/addTask.scss';
import { Dropdown } from 'shared/UI/Dropdown';

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
    const getValueFromApi:ValueFunc = (value:string) => {
        userData(value).unwrap().then((result)=>{
            setAddedData({
                ...addedData,
                assignedId:result.data[0].id
            });
        });
    }
    const getValueFromProps:ValueDataKeyFunc = (value:string,dataKey:string)=>{
        setAddedData({
            ...addedData,
            [dataKey]:getTaskDropdownStaticArgument(dataKey,value)
        })
    }
    const getValueFromInput:ValueDataKeyFunc = (value:string,dataKey:string) =>{
        setAddedData({
            ...addedData,
            [dataKey]:value
        })
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
                            <Dropdown 
                                width='230px'
                                dataKey='type'
                                purpose='addTask'
                                returnValue={getValueFromProps}
                                monitorableState={isFormItemsClear} 
                                defaultContent='Выберите тип' 
                                dropdownItems={['Создание','Фикс']}
                            />
                            <Label content='Пользователь'/>
                            <Dropdown
                                width='230px'
                                dataKey='assignedId'
                                purpose='addTask'
                                returnValue={getValueFromApi}
                                monitorableState={isFormItemsClear} 
                                defaultContent='Выберите исполнителя' 
                                dropdownItems={userAllData !== undefined?userAllData.map((user)=>{return user.username}):[]}
                                relatedData = {userAllData !== undefined?userAllData.map((user)=>{return user.id}):[]}
                            />
                            <Label content='Приоритет'/>
                            <Dropdown 
                                width='230px'
                                dataKey='rank' 
                                purpose='addTask'
                                returnValue={getValueFromProps}
                                monitorableState={isFormItemsClear} 
                                defaultContent='Выберите приоритет' 
                                dropdownItems={['Низкий','Средний','Высокий']}
                            />
                            <Label content='Название задачи'/>
                            <AddTaskTextarea
                                dataKey='title'
                                callback={getValueFromInput}
                                monitorableState={isFormItemsClear} 
                                placeholder='Введите название задачи' 
                            />
                        </div>
                    </div>
                    <AddTaskDivider />
                    <div className="addTaskForm_right">
                        <Label content='Описание'/>
                        <AddTaskTextarea
                            dataKey='description'
                            callback={getValueFromInput}
                            monitorableState={isFormItemsClear} 
                            placeholder='Введите описание задания' 
                        />
                    </div>
                </div>
                <div className="addTaskForm_buttons">
                    <Button variant='primary' content='Сохранить' callback={saveChangesButtonClickHanler}/>
                    <Button variant='white' content='Отмена' callback={denyChangesButtonClickHanler}/>
                </div>
            </div>
        </div>
    )
}

export {}