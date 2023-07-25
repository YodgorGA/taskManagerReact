import React,{FC, useState} from 'react'
import { useAddNewCommentMutation } from 'entities/comment';
import { Button, ContentWrapper } from 'shared'
import { Textarea } from 'shared/UI/Textarea';

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
    <ContentWrapper margin='0px 0px 10px 0px' height='fit-content' flexDirection='column' justifyContent='flex-start'>  
        <Textarea 
          placeholder='Введите текст комментария' 
          monitorableState={isCommentSended} 
          dataKey='text'
          callback={getTextareaData}
          height='150px'
          />
        <Button margin={'10px 0px 0px 0px'} callback={buttonClickHandler} variant='green' content='Добавить'/>
    </ContentWrapper>
  )
}

export {}