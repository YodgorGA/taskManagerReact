import React,{FC} from 'react'
import { CommentForm as TaskCommentForm } from 'features/commentForm'
import { TaskComments as TaskCommentsElem } from 'features/taskComments'
import { Task } from 'entities/task'
import { useGetAllCommentsQuery } from 'entities/comment'

interface TaskCommentsProps{
  task:Task,
  currentUser:string,
}

export const TaskComments:FC<TaskCommentsProps> = ({currentUser,task,...TaskCommentsProps}) => {
  const {id} = task
  const {data:taskCommentsData,isSuccess} = useGetAllCommentsQuery(id);
 
  return (
    <div className="cardTaskPage_comments commentsCardTaskPage">
        <label>
        {`Комментарии: ${taskCommentsData !== undefined?taskCommentsData.length:'0'}`}
        </label>
        <TaskCommentForm taskId={id} currentUser={currentUser}/>
        <TaskCommentsElem currentUserId={currentUser} comments={taskCommentsData !== undefined?taskCommentsData:[]}/>
    </div>
  )
}

export{}