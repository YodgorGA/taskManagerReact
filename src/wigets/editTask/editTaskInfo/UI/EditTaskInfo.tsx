import React,{FC} from 'react'
import { Task } from 'entities/task'
import { useGetUserByIdQuery } from 'entities/user'
import { Label,Dropdown as EditTaskInfoDropdown } from 'shared'
import { getUserFriendlyRankValue, getUserFriendlyStatusValue, getUserFriendlyTypeValue } from '../lib/helpers/helpler'

interface ChangeTaskInfoProps{
    monitorableState:boolean,
    returnEditParams:(dataSource:string,arg:string,value:string)=>void,
    assignedUserDropdownData:string[],
    assignedUserDropdownRelatedData:string[],
    taskData:Task,
}

export const EditTaskInfo:FC<ChangeTaskInfoProps> = ({taskData,assignedUserDropdownRelatedData,assignedUserDropdownData,returnEditParams,monitorableState,...ChangeTaskInfoProps}) => {
    const {data:assingedUserData} = useGetUserByIdQuery(taskData.assignedId)
    return (
        <div className='cardEditTaskPage_editTaskInfo editTaskInfo'>
            <div className='editTaskInfo_item'>
                <Label content={"Статус"}/>
                <EditTaskInfoDropdown 
                    dataSource={'props'}
                    parentClass={'status'}
                    returnValue={returnEditParams} 
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
                    dataSource={'api'}
                    parentClass={'assignedId'}
                    returnValue={returnEditParams} 
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
                    dataSource={'props'}
                    parentClass={'type'}
                    returnValue={returnEditParams} 
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
                    dataSource={'props'}
                    parentClass={'rank'}
                    returnValue={returnEditParams} 
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