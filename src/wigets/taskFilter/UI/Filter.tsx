import React,{FC} from 'react'
import { Button } from 'shared'
import { TaskFilterDropdown } from 'features/taskFilter'
import { TaskFilterInput } from 'features/taskFilter'

interface FilterProps{
}

export const Filter:FC<FilterProps> = ({...FilterProps}) => {
  return (
    <div className="cardTaskList_filter _filter">
      <TaskFilterDropdown placeholder='Тип' items={['Создание','Фикс']} purpose={'type'}/>
      <TaskFilterInput placeholder='Введите название задачи'/>
      <TaskFilterDropdown placeholder='Пользователь' items={['Шерлок Хоумс','Шерлок Хоумс','Шерлок Хоумс','Шерлок Хоумс']} purpose={'user'}/>
      <TaskFilterDropdown placeholder='Статус' items={['Завершено','Тестирование','В работе','Открыто']} purpose={'status'}/>
      <TaskFilterDropdown placeholder='Приоритет' items={['Высокий','Средний','Низкий']} purpose={'priority'}/>
      <Button color='primary' content='Применить' parentClass='_filter' key={0}/>
    </div>
  )
}

export {}