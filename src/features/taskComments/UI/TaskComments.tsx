import React, { FC, useEffect } from 'react'
import { comment, TaskCommentItem } from 'entities/comment'
import styled from '@emotion/styled'

interface TaskCommentsProps{
  comments:[comment] | [],
  currentUserId:string,
}

export const TaskComments:FC<TaskCommentsProps> = ({currentUserId,comments,...TaskCommentsProps}) => {
  return (
    <StyledTaskPageComentsWrapper>
        {
          comments.map((comment)=>{
              return (
              <TaskCommentItem 
                ownerId={comment.userId} 
                commentDate={comment.dateOfCreation} 
                content={comment.text} 
                key={comment.id}
                currentUserId={currentUserId} 
                commentId={comment.id}
              />)
          })
        }
    </StyledTaskPageComentsWrapper>
  )
}

const StyledTaskPageComentsWrapper = styled.div`
  width: 100%;
  max-height: 450px;
  overflow: auto;
  display:flex;
  flex-direction:column-reverse;
  &::-webkit-scrollbar{
    width: 0px;
    height: 0px;
  }
`

export {}