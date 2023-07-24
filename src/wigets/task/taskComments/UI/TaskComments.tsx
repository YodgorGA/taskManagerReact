import React,{FC} from 'react'
import { CommentForm as TaskCommentForm } from 'features/commentForm'
import { TaskComments as TaskCommentsElem } from 'features/taskComments'
import { Task } from 'entities/task'
import { useGetAllCommentsQuery } from 'entities/comment'
import styled from '@emotion/styled'
import { ContentWrapper, Label } from 'shared'

interface TaskCommentsProps{
  task:Task,
  currentUser:string,
}

export const TaskComments:FC<TaskCommentsProps> = ({currentUser,task,...TaskCommentsProps}) => {
  const {id} = task
  const {data:taskCommentsData,isSuccess} = useGetAllCommentsQuery(id);
 
  return (
    <ContentWrapper width='460px' height='600px' flexDirection='column' justifyContent='flex-start' alignItems='flex-start'>
        <Label content={`Комментарии: ${taskCommentsData !== undefined?taskCommentsData.length:'0'}`}/>
        <TaskCommentForm taskId={id} currentUser={currentUser}/>
        <TaskCommentsElem currentUserId={currentUser} comments={taskCommentsData !== undefined?taskCommentsData:[]}/>
    </ContentWrapper>
  )
}

const StyledTaskComments = styled.div`
  
`

export{}