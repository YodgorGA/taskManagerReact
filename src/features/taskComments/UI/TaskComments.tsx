import React, { FC, useEffect } from 'react'
import { comment, TaskCommentItem } from 'entities/comment'

interface TaskCommentsProps{
  comments:[comment] | [],
  currentUserId:string,
}

export const TaskComments:FC<TaskCommentsProps> = ({currentUserId,comments,...TaskCommentsProps}) => {
  return (
    <div className="commentsCardTaskPage_postedComments postedComments">
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
    </div>
  )
}

export {}