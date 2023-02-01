import React,{FC} from 'react'
import { CommentForm as TaskCommentForm } from 'features/commentForm'
import { TaskComments as TaskCommentsElem } from 'features/taskComments'

export const TaskComments:FC = () => {
  return (
    <div className="cardTaskPage_comments commentsCardTaskPage">
        <label>
        {`Комментарии (commentCountFromAPI)`}
        </label>
        <TaskCommentForm/>
        <TaskCommentsElem/>
    </div>
  )
}

export{}