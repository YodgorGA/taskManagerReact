import React,{FC} from 'react'
import { useGetUserByIdQuery } from 'entities/user';
import { transformDate } from 'shared';
import { Button } from 'shared/UI/Button'
import { useDeleteCommentMutation } from '../model/commentApi';
import styled from '@emotion/styled';

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
    <StyledCommentItem >
        <CommentOwner >
            <p>{`${author?.username} (${transformDate(commentDate)})`}</p>
            {
              currentUserId === ownerId? <Button callback={deleteComment} variant='red' content='Удалить'></Button>:<div style={{position:"absolute"}}></div>
            } 
            
        </CommentOwner>
        <CommentContent><p>{content}</p></CommentContent>
    </StyledCommentItem>
  )
}

const StyledCommentItem = styled.div`
  min-height: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom:15px;
`

const CommentOwner = styled.div`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 171%;
  color: #CCCCCC;
  overflow: hidden;
  max-height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
const CommentContent = styled.div`
  margin-top: 5px;
  overflow: hidden;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 171%;
  color: #000000;
  word-break: normal;
`

export {}