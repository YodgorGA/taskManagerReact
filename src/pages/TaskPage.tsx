import React,{FC, useState} from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from '../components/page/Button'
import { CardHeader } from '../components/page/CardHeader'
import { CommentItem } from '../components/taskPage/CommentItem'

interface TaskPageProps{

}

export const TaskPage:FC<TaskPageProps> = ({...TaskPageProps}) => {
  const location = useLocation()
  const {assignedUser,priority,status,taskName,type} = location.state;
  const getPriorityName = (priority:string) =>{
    switch(priority){
      case 'low':
        return 'Низкий';
      case 'medium':
        return 'Средний';
      case 'high':
        return 'Высокий';
    }
  }
  const [addWorkTimeFormState,setAddWorkTimeFormState] = useState<string>('visible');
  const addWorkTimeButtonClickHandler = () =>{
    (addWorkTimeFormState !== "hidden")?setAddWorkTimeFormState("hidden"):setAddWorkTimeFormState("visible")
  }
  return (
    <div className='taskPage_container _container'>
        <div className="taskPage_contentWrapper _contentWrapper">
            <CardHeader parentClass='taskPage' title={taskName} 
            childButtons={[
                <Button color='white' content='Взять в работу' parentClass='_cardHeader' key={0}/>,
                <Button color='primary' content='Редактировать' parentClass='_cardHeader' key={1}/>,
                <Button color='danger' content='Удалить' parentClass='_cardHeader' key={2}/>
            ]}
            />
            <div className="taskPage_card _card cardTaskPage">
                <div className="cardTaskPage_taskInfo taskInfoItems">
                  <div className="taskInfoItems_item">
                    <label>Статус</label>
                    <p>{status[1]}</p>
                  </div>
                  <div className="taskInfoItems_item">
                    <label>Тип запроса</label>
                    <p>{(type !== 'bug')?'Задача':'Исправление'}</p>
                  </div>
                  <div className="taskInfoItems_item">
                    <label>Приоритет</label>
                    <p>{getPriorityName(priority)}</p>
                  </div>
                  <div className="taskInfoItems_item">
                    <label>Исполнитель задачи</label>
                    <p>{assignedUser}</p>
                  </div>
                  <div className="taskInfoItems_item">
                    <label>Автор задачи</label>
                    <p>С апишки получу</p>
                  </div>
                  <div className="taskInfoItems_item">
                    <label>Дата создания</label>
                    <p>С Апишки получу</p>
                  </div>
                  <div className="taskInfoItems_item__inWorkTime workTimeItem">
                    <label>
                      Затраченное время
                      <div onMouseDown={addWorkTimeButtonClickHandler} className="workTimeItem_button addWorkTime">
                        <div className="addWorkTime_icon"></div>
                        Добавить
                      </div>
                    </label>
                    <p>С апишки получу</p>
                  </div>
                  <div className={`taskInfoItems_item__addWorkTimeForm addTimeForm__${addWorkTimeFormState}`}>

                  </div>
                </div>
                <div className="cardTaskPage_divider"></div>
                <div className="cardTaskPage_taskDescr">
                  <label>Описание</label>
                  <p>Какой-то текст задачи, например, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet consectetur dolor, nec consectetur nisl mattis ut. Proin ac sapien at elit lacinia semper. Nullam vestibulum rutrum efficitur. Sed et egestas ante, id ullamcorper ante. Maecenas porta sem ultrices libero tempus, eu laoreet turpis bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed laoreet est et nisi tristique, ut hendrerit tellus pulvinar. Proin eget elit a mauris convallis molestie nec vel nisi. Etiam accumsan porta velit et convallis. Maecenas euismod scelerisque lectus, non varius velit condimentum non. Vestibulum luctus risus et metus volutpat, at sodales massa gravida.</p>
                  <p>Praesent finibus, velit ut luctus dictum, felis nibh sodales dui, nec aliquam ipsum arcu tempor ante. Aliquam gravida lorem quis egestas varius. Quisque cursus est vitae ipsum iaculis, sed convallis massa efficitur. In vestibulum, sapien et consequat luctus, arcu neque pretium justo, nec ullamcorper tortor nulla id nunc. Suspendisse eleifend gravida tortor, sit amet porta lorem posuere sed. Vivamus est neque, varius id sagittis sit amet, blandit eget odio. Fusce egestas elit nec arcu mollis mattis. In porta dapibus lectus in elementum. Nunc non varius ante. Suspendisse sit amet purus ex. Phasellus aliquet ac tortor eu mattis. Suspendisse eget lectus et massa ultricies feugiat.</p>
                </div>
                <div className="cardTaskPage_divider"></div>
                <div className="cardTaskPage_comments commentsCardTaskPage">
                  <label>
                    {`Комментарии (commentCountFromAPI)`}
                  </label>
                  <textarea placeholder={'Текст комментария'}className="commentsCardTaskPage_textarea"></textarea>
                  <Button color='success' content='Добавить комментарий' parentClass='commentsCardTaskPage'/>
                  <div className="commentsCardTaskPage_postedComments postedComments">
                    <CommentItem ownerName='Еще не полученный из при пользователь' commentDate={new Date().toDateString()} content={'Еще не полученный из апи контент, желательно очень длиииииииииииииииииииииииииииииииииииииbbbbbbsagsgasgsgasgasgasииииииинный'} key={Math.random()} />
                    <CommentItem ownerName='Еще не полученный из при пользователь' commentDate={new Date().toDateString()} content={'Еще не полученный из апи контент, желательно очень длиииииииииииииииииииииииииииииииииииииbbbbbbsagsgasgsgasgasgasииииииинный'} key={Math.random()} />
                    <CommentItem ownerName='Еще не полученный из при пользователь' commentDate={new Date().toDateString()} content={'Еще не полученный из апи контент, желательно очень длиииииииииииииииииииииииииииииииииииииbbbbbbsagsgasgsgasgasgasииииииинный'} key={Math.random()} />
                    <CommentItem ownerName='Еще не полученный из при пользователь' commentDate={new Date().toDateString()} content={'Еще не полученный из апи контент, желательно очень длиииииииииииииииииииииииииииииииииииииbbbbbbsagsgasgsgasgasgasииииииинный'} key={Math.random()} />
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export {}