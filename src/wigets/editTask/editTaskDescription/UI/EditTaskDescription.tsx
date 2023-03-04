import { Task } from 'entities/task'
import React,{FC} from 'react'
import { Input as EditTaskDesctriptionInput, Label, Textarea as EditTaskTextarea} from 'shared'


interface EditTaskDescriptionProps{
    returnEditParams:(dataSource:string,arg:string,value:string)=>void,
    taskData:Task
}

export const EditTaskDescription:FC<EditTaskDescriptionProps> = ({taskData,returnEditParams,...EditTaskDescriptionProps}) => {    return (
        <div className='cardEditTaskPage_editTaskDescription editTaskDescription'>
            <Label content='Название'/>
            <EditTaskDesctriptionInput
                returnDataForApiCallback={returnEditParams}
                parentClass='title'
                dataSource='input'
                type='text' 
                key={0} 
                placeholder='Введите название задания' 
                propsValue={taskData.title}
            />
            <Label content='Описание'/>
            <EditTaskTextarea
                returnDataForApiCallback={returnEditParams}
                dataSource='input'
                parentClass='description'
                placeholder='Введите описание задания' 
                purpose='editTaskPageDescription' 
                propsValue={taskData.description}
            />
        </div>
    )
}

export {}