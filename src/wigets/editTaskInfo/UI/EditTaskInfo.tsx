import React,{FC} from 'react'
import { ChangeTaskInfoItem } from 'entities/editTask'

interface ChangeTaskInfoProps{
    monitorableState:boolean,
}

export const EditTaskInfo:FC<ChangeTaskInfoProps> = ({monitorableState,...ChangeTaskInfoProps}) => {
    return (
        <div className='cardEditTaskPage_editTaskInfo editTaskInfo'>
            <ChangeTaskInfoItem defaultContent='Выберите исполнителя задания' monitorableState={monitorableState} dropdownItems={['Евгений Онегин','Евгений Онегин','Евгений Онегин','Евгений Онегин']} dropdownPurpose={'changeTaskInfo'} label='Исполнитель' key={Math.random()}/>
            <ChangeTaskInfoItem defaultContent='Выберите тип задания' monitorableState={monitorableState} dropdownItems={['Создание','Фикс']} dropdownPurpose={'changeTaskInfo'} label='Тип запроса' key={Math.random()}/>
            <ChangeTaskInfoItem defaultContent='Выберите приоритет задания' monitorableState={monitorableState} dropdownItems={['Высокий','Средний','Низкий']} dropdownPurpose={'changeTaskInfo'} label='Приоритет' key={Math.random()}/>
        </div>
    )
}

export {}