import React,{FC, useState} from 'react'
import { useAddNewCommentMutation } from 'entities/comment';
import { Button } from 'shared'
import { Textarea as TaskPageTextarea } from 'shared/UI/Textarea'

interface CommentFormProps{
  currentUser:string,
  taskId:string,
}

export const CommentForm:FC<CommentFormProps> = ({taskId,currentUser,...CommentFormProps}) => {
  const [isCommentSended,setIsCommentSended] = useState<boolean>(false);
  const [addNewComment] = useAddNewCommentMutation();
  const [text,setText] = useState<string>(''); 

  const resetCommentForm = () =>{
    setIsCommentSended(true);
    setTimeout(()=>{
      setIsCommentSended(false);
    },0)
  }

  const getTextareaData = (dataSource:string,key:string,value:string) =>{
    setText(value)
  }

  const buttonClickHandler = ()=>{
    addNewComment({
      taskId:taskId,
      text:text,
      userId:currentUser
    })
    resetCommentForm()
  }
  return (
    <>  
        <TaskPageTextarea 
          placeholder='Введите текст комментария' 
          monitorableState={isCommentSended} 
          purpose='taskPageComment'
          dataSource='input'
          parentClass='text'
          returnDataForApiCallback={getTextareaData}
          />

        <Button callback={buttonClickHandler} color='success' content='Добавить комментарий' parentClass='commentsCardTaskPage'/>
    </>
  )
}

export {}