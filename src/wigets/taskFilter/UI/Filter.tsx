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
      <TaskFilterDropdown key={0} monitorableState={isSeacrhPressed} parentClass={'_filter'}defaultContent='Тип' dropdownItems={['Создание','Фикс']} purpose='type'/>
      <TaskFilterInput key={1}monitorableState={isSeacrhPressed} placeholder='Введите название задачи' type='text' parentClass='_filter'/>
      <TaskFilterDropdown parentClass={'_filter'} key={2} monitorableState={isSeacrhPressed} defaultContent='Пользователь' dropdownItems={['Шерлок Хоумс','Шерлок Хоумс','Шерлок Хоумс','Шерлок Хоумс']} purpose={'user'}/>
      <TaskFilterDropdown parentClass={'_filter'} key={3} monitorableState={isSeacrhPressed} defaultContent='Статус' dropdownItems={['Завершено','Тестирование','В работе','Открыто']} purpose={'status'}/>
      <TaskFilterDropdown parentClass={'_filter'} key={4} monitorableState={isSeacrhPressed} defaultContent='Приоритет' dropdownItems={['Высокий','Средний','Низкий']} purpose={'priority'}/>
      <Button callback={buttonClickHanler}color='primary' content='Применить' parentClass='_filter' key={5}/>
    </div>
  )
}

export {}