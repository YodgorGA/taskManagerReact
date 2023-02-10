import React,{FC, useState} from 'react'
import { Button } from 'shared'
import { Textarea as TaskPageTextarea } from 'shared/UI/Textarea'

export const CommentForm:FC = () => {
  const [isCommentSended,setIsCommentSended] = useState<boolean>(false);
  const buttonClickHandler = ()=>{
    setIsCommentSended(true);
    setTimeout(()=>{
      setIsCommentSended(false);
    },0)
  }
  return (
    <>  
        <TaskPageTextarea placeholder='Введите текст комментария' monitorableState={isCommentSended} purpose='taskPageComment'/>
        <Button callback={buttonClickHandler} color='success' content='Добавить комментарий' parentClass='commentsCardTaskPage'/>
    </>
  )
}

export {}