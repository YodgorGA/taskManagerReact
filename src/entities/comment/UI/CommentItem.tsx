import React,{FC} from 'react'
import { useGetUserByIdQuery } from 'entities/user';
import { transformDate } from 'shared';
import { Button } from 'shared/UI/Button'
import { useDeleteCommentMutation } from '../model/commentApi';

interface CommentItemProps{
    ownerId:string,
    commentDate:string,
    content:string,
    currentUserId:string,
    commentId:string,
}

export const CommentItem:FC<CommentItemProps> = ({commentId,currentUserId,ownerId,commentDate,content,...CommentItemProps}) => {
  const {data:author} = useGetUserByIdQuery(ownerId);
  const [deleteCommentById] = useDeleteCommentMutation();
  const deleteComment = () =>{
    deleteCommentById(commentId)
  }
  return (
    <div className="postedComments_item">
        <div className="postedComments_owner">
            <p>{`${author?.username} (${transformDate(commentDate)})`}</p>
            {
              currentUserId === ownerId? <Button callback={deleteComment} variant='red' content='Удалить'></Button>:<div style={{position:"absolute"}}></div>
            } 
            
        </div>
        <div className="postedComments_content"><p>{content}</p></div>
    </div>
  )
}

export {}