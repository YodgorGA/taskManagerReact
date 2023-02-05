import React,{FC, useState} from 'react'
import { Button } from 'shared'
import { Dropdown as TaskFilterDropdown} from 'shared'
import { Input as TaskFilterInput } from 'shared'

interface FilterProps{
}

export const Filter:FC<FilterProps> = ({...FilterProps}) => {
  const [isSeacrhPressed,setIsSearchPressed] = useState<boolean>(false);
  const buttonClickHanler = () =>{
    setIsSearchPressed(true);
    setTimeout(()=>{
      setIsSearchPressed(false)
    },0)
  }
  return (
    <div className="cardTaskList_filter _filter">
      <TaskFilterDropdown monitorableState={isSeacrhPressed} defaultContent='Тип' dropdownItems={['Создание','Фикс']} purpose='type'/>
      <TaskFilterInput monitorableState={isSeacrhPressed} placeholder='Введите название задачи' type='text' parentClass='_filter'/>
      <TaskFilterDropdown monitorableState={isSeacrhPressed} defaultContent='Пользователь' dropdownItems={['Шерлок Хоумс','Шерлок Хоумс','Шерлок Хоумс','Шерлок Хоумс']} purpose={'user'}/>
      <TaskFilterDropdown monitorableState={isSeacrhPressed} defaultContent='Статус' dropdownItems={['Завершено','Тестирование','В работе','Открыто']} purpose={'status'}/>
      <TaskFilterDropdown monitorableState={isSeacrhPressed} defaultContent='Приоритет' dropdownItems={['Высокий','Средний','Низкий']} purpose={'priority'}/>
      <Button callback={buttonClickHanler}color='primary' content='Применить' parentClass='_filter' key={0}/>
    </div>
  )
}

export {}