import React,{FC} from 'react'
import { Button } from 'shared'

export const CommentForm:FC = () => {
  return (
    <>
        <textarea placeholder={'Текст комментария'}className="commentsCardTaskPage_textarea"></textarea>
        <Button color='success' content='Добавить комментарий' parentClass='commentsCardTaskPage'/>
    </>
  )
}

export {}