import React,{FC} from 'react'
import { Formitem } from '../../login/Formitem'
import { Button } from '../Button'
import { FilterDropdown } from './FilterDropdown'

interface FilterProps{
type:string
}

export const Filter:FC<FilterProps> = ({type,...FilterProps}) => {
  return (
    <div className="cardTaskList_filter _filter">
      <FilterDropdown placeholder='Тип' items={['Создание','Исправление']} purpose={'type'}/>
      <Formitem placeholder='Название задачи' isLabelNeed={false} parentClass='_filter' additionalClass='filter' purpose='usersearch' type='text'/> 
      <FilterDropdown placeholder='Пользователь' items={['Шерлок Хоумс','Шерлок Хоумс','Шерлок Хоумс','Шерлок Хоумс']} purpose={'user'}/>
      <FilterDropdown placeholder='Статус' items={['Завершено','Тестирование','В работе','Открыто']} purpose={'status'}/>
      <FilterDropdown placeholder='Приоритет' items={['Высокий','Средний','Низкий']} purpose={'priority'}/>
      <Button color='primary' content='Применить' parentClass='_filter' key={0}/>

    </div>
  )
}

export {}