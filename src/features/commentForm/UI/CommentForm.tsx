import React,{FC, useState} from 'react'
import { useAddNewCommentMutation } from 'entities/comment';
import { Button } from 'shared'
import { Textarea as TaskPageTextarea } from 'shared/UI/Textarea'
import { Textarea } from 'pages/test/UI/Textarea';

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

  const getTextareaData = (value:string) =>{
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
        <Textarea 
          placeholder='Введите текст комментария' 
          monitorableState={isCommentSended} 
          dataKey='text'
          callback={getTextareaData}
          />

        <Button callback={buttonClickHandler} color='success' content='Добавить' parentClass='commentsCardTaskPage'/>
    </>
  )
}

export {}