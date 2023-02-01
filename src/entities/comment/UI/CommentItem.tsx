import React,{FC} from 'react'
import { Button } from 'shared/UI/Button'

interface CommentItemProps{
    ownerName:string,
    commentDate:string,
    content:string
}

export const CommentItem:FC<CommentItemProps> = ({ownerName,commentDate,content,...CommentItemProps}) => {
  return (
    <div className="postedComments_item">
        <div className="postedComments_owner">
            <p>{`${ownerName} (${commentDate})`}</p>
            {/* Отрисовывать кнопку удаления комментария только если пользователь сам оставил комментарий */}
            <Button color='delete' content='Удалить' parentClass='postedComments'></Button>
        </div>
        <div className="postedComments_content"><p>{content}</p></div>
    </div>
  )
}

export {}