import React,{FC} from 'react'
import { Task } from 'entities/task'
import { Input as EditTaskDesctriptionInput, Label, Textarea as EditTaskTextarea, ValueDataKeyFunc} from 'shared'


interface EditTaskDescriptionProps{
    returnEditParams:ValueDataKeyFunc,
    taskData:Task
}

export const EditTaskDescription:FC<EditTaskDescriptionProps> = ({taskData,returnEditParams,...EditTaskDescriptionProps}) => {    return (
        <div className='cardEditTaskPage_editTaskDescription editTaskDescription'>
            <Label content='Название'/>
            <EditTaskDesctriptionInput
                returnDataForApiCallback={returnEditParams}
                parentClass='title'
                type='text' 
                key={0} 
                placeholder='Введите название задания' 
                propsValue={taskData.title}
            />
            <Label content='Описание'/>
            <EditTaskTextarea
                callback={returnEditParams}
                dataKey='description'
                placeholder='Введите описание задания' 
                purpose='editTaskPageDescription' 
                propsValue={taskData.description}
            />
        </div>
    )
}

export {}