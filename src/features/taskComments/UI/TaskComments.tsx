import React from 'react'
import { TaskCommentItem } from 'entities/comment'

export const TaskComments = () => {
  return (
    <div className="commentsCardTaskPage_postedComments postedComments">
        <TaskCommentItem ownerName='Еще не полученный из api пользователь' commentDate={new Date().toDateString()} content={'Еще не полученный из апи контент, желательно очень длиииииииииииииииииииииииииииииииииииииbbbbbbsagsgasgsgasgasgasииииииинный'} key={Math.random()} />
        <TaskCommentItem ownerName='Еще не полученный из api пользователь' commentDate={new Date().toDateString()} content={'Еще не полученный из апи контент, желательно очень длиииииииииииииииииииииииииииииииииииииbbbbbbsagsgasgsgasgasgasииииииинный'} key={Math.random()} />
        <TaskCommentItem ownerName='Еще не полученный из api пользователь' commentDate={new Date().toDateString()} content={'Еще не полученный из апи контент, желательно очень длиииииииииииииииииииииииииииииииииииииbbbbbbsagsgasgsgasgasgasииииииинный'} key={Math.random()} />
        <TaskCommentItem ownerName='Еще не полученный из api пользователь' commentDate={new Date().toDateString()} content={'Еще не полученный из апи контент, желательно очень длиииииииииииииииииииииииииииииииииииииbbbbbbsagsgasgsgasgasgasииииииинный'} key={Math.random()} />
        <TaskCommentItem ownerName='Еще не полученный из api пользователь' commentDate={new Date().toDateString()} content={'Еще не полученный из апи контент, желательно очень длиииииииииииииииииииииииииииииииииииииbbbbbbsagsgasgsgasgasgasииииииинный'} key={Math.random()} />

    </div>
  )
}

export {}