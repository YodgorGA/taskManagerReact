import React,{FC} from 'react'
import { Input as EditTaskDesctriptionInput, Label, Textarea as EditTaskTextarea} from 'shared'


interface EditTaskDescriptionProps{
    monitorableState:boolean
}

export const EditTaskDescription:FC<EditTaskDescriptionProps> = ({monitorableState,...EditTaskDescriptionProps}) => {    return (
        <div className='cardEditTaskPage_editTaskDescription editTaskDescription'>
            <Label content='Название'/>
            <EditTaskDesctriptionInput placeholder='Введите название задания' type='text' key={0} monitorableState={monitorableState}/>
            <Label content='Описание'/>
            <EditTaskTextarea placeholder='Введите описание задания' purpose='editTaskPageDescription' monitorableState={monitorableState}/>
        </div>
    )
}

export {}