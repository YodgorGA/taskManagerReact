import React,{FC} from 'react'
import { useLocation } from 'react-router-dom'
import { Button, LinkButton } from 'shared'
import { CardHeader } from 'shared' 
import { Divider as TaskPageDivider} from 'shared'
import { TaskInfoWidget } from 'wigets/taskInfo'
import { TaskDescription } from 'wigets/taskDescription'
import { TaskCommentsWidget } from 'wigets/taskComments'
import { getIdFromLocation } from '../index';

export const TaskPage:FC = ({...TaskPageProps}) => {
  const location = useLocation()
  const id = getIdFromLocation(location);
  const {assignedUser,priority,status,taskName,type} = location.state;
  return (
    <div className='taskPage_container _container'>
        <div className="taskPage_contentWrapper _contentWrapper">
            <CardHeader parentClass='taskPage' title={taskName} 
            childButtons={[
                <Button color='white' content='Взять в работу' parentClass='_cardHeader' key={0}/>,
                <LinkButton to={`${location.pathname}/edit`} state={{id,assignedUser,type,priority,taskName}} color='primary' content='Редактировать' parentClass='_cardHeader' key={1}/>,
                <Button color='danger' content='Удалить' parentClass='_cardHeader' key={2}/>
            ]}
            />
            <div className="taskPage_card _card cardTaskPage">
                <TaskInfoWidget assignedUser={assignedUser} priority={priority} status={status} type={type}/>
                <TaskPageDivider/>
                <TaskDescription content='Какой-то текст задачи, например, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet consectetur dolor, nec consectetur nisl mattis ut. Proin ac sapien at elit lacinia semper. Nullam vestibulum rutrum efficitur. Sed et egestas ante, id ullamcorper ante. Maecenas porta sem ultrices libero tempus, eu laoreet turpis bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed laoreet est et nisi tristique, ut hendrerit tellus pulvinar. Proin eget elit a mauris convallis molestie nec vel nisi. Etiam accumsan porta velit et convallis. Maecenas euismod scelerisque lectus, non varius velit condimentum non. Vestibulum luctus risus et metus volutpat, at sodales massa gravida.'/>
                <TaskPageDivider/>
                <TaskCommentsWidget/>
            </div>
        </div>
    </div>
  )
}

export {}