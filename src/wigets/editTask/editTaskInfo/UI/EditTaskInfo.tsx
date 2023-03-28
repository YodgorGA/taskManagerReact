import React,{FC} from 'react'
import { Task } from 'entities/task'
import { useGetUserByIdQuery } from 'entities/user'
import { Label,Dropdown as EditTaskInfoDropdown } from 'shared'
import { getUserFriendlyRankValue, getUserFriendlyStatusValue, getUserFriendlyTypeValue } from '../lib/helpers/helpler'
import { ValueDataKeyFunc,ValueFunc } from 'shared'

interface ChangeTaskInfoProps{
    monitorableState:boolean,
    returnEditParamsByApi: ValueFunc,
    returnEditParamsByProps: ValueDataKeyFunc,
    returnEditParamsByInput: ValueDataKeyFunc
    assignedUserDropdownData:string[],
    assignedUserDropdownRelatedData:string[],
    taskData:Task,
}

export const EditTaskInfo:FC<ChangeTaskInfoProps> = ({returnEditParamsByApi,returnEditParamsByInput,returnEditParamsByProps,taskData,assignedUserDropdownRelatedData,assignedUserDropdownData,monitorableState,...ChangeTaskInfoProps}) => {
    const {data:assingedUserData} = useGetUserByIdQuery(taskData.assignedId)
    return (
        <div className='cardEditTaskPage_editTaskInfo editTaskInfo'>
            <div className='editTaskInfo_item'>
                <Label content={"Статус"}/>
                <EditTaskInfoDropdown 
                    dataKey={'status'}
                    returnValue={returnEditParamsByProps} 
                    monitorableState={monitorableState} 
                    purpose={'changeTaskInfo'} 
                    defaultContent={'Выберите состояние задания'} 
                    dropdownItems={['Открыто','В работе','Тестирование','Завершено']}
                    propsValue={getUserFriendlyStatusValue(taskData.status)}
                />
            </div>
            <div className='editTaskInfo_item'>
                <Label content={"Исполнитель"}/>
                <EditTaskInfoDropdown 
                    dataKey={'assignedId'}
                    returnValue={returnEditParamsByApi} 
                    monitorableState={monitorableState} 
                    purpose={'changeTaskInfo'} 
                    defaultContent={'Выберите исполнителя задания'} 
                    dropdownItems={assignedUserDropdownData}
                    relatedData={assignedUserDropdownRelatedData}
                    propsValue={assingedUserData?.username}
                />
            </div>
            <div className='editTaskInfo_item'>
                <Label content={"Тип запроса"}/>
                <EditTaskInfoDropdown 
                    dataKey={'type'}
                    returnValue={returnEditParamsByProps} 
                    purpose={'changeTaskInfo'} 
                    defaultContent={'Выберите тип задания'} 
                    monitorableState={monitorableState} 
                    dropdownItems={['Создание','Фикс']}
                    propsValue={getUserFriendlyTypeValue(taskData.type)}
                />
            </div>
            <div className='editTaskInfo_item'>
                <Label content={"Приоритет"}/>
                <EditTaskInfoDropdown 
                    dataKey={'rank'}
                    returnValue={returnEditParamsByInput} 
                    monitorableState={monitorableState} 
                    purpose={'changeTaskInfo'} 
                    defaultContent={'Выберите приоритет задания'} 
                    dropdownItems={['Высокий','Средний','Низкий']}
                    propsValue={getUserFriendlyRankValue(taskData.rank)}
                />
            </div>
        </div>
    )
}

export {}