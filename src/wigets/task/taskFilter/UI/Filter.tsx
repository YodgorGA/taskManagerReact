import React,{FC, useEffect, useState} from 'react'
import { useGetUsersAllQuery } from 'entities/user'
import { Button } from 'shared'
import { Dropdown as TaskFilterDropdown} from 'shared'
import { Input as TaskFilterInput } from 'shared'
import { Tasks, useGetTaskListByFilterMutation } from 'entities/task'
import '../styles/filter.scss'

interface FilterProps{
  returnDataToTaskList:(tasks:Tasks) =>void
}

export const Filter:FC<FilterProps> = ({returnDataToTaskList,...FilterProps}) => {
  const [isSeacrhPressed,setIsSearchPressed] = useState<boolean>(false);
  const {data:userAllData} = useGetUsersAllQuery();
  const [filterParams,setFilterParams] = useState({});
  const [filteredTaskList,{isError}] = useGetTaskListByFilterMutation();

  const setParamByFilter = (arg:string,value:string) =>{
    setFilterParams({
      ...filterParams,
      [arg]:value
    })
  }

  const buttonClickHanler = () =>{
    filteredTaskList(filterParams).unwrap().then((tasks) =>{
      returnDataToTaskList(tasks)
    });
    setIsSearchPressed(true);
    setTimeout(()=>{
      setFilterParams({})
      setIsSearchPressed(false)
    },0)
  }
  useEffect(()=>{
    console.log(filterParams)
  },[filterParams,isSeacrhPressed])
  return (
    <div className="cardTaskList_filter _filter">
      <TaskFilterDropdown 
        parentClass={'type'}
        returnValue={setParamByFilter} 
        purpose={'_filter'} 
        key={0} 
        monitorableState={isSeacrhPressed} 
        defaultContent='Тип' 
        dropdownItems={['Создание','Фикс']} 
      />
      <TaskFilterInput 
        parentClass={'title'}
        returnValueCallback={setParamByFilter} 
        purpose={'filter'} 
        key={1} 
        monitorableState={isSeacrhPressed} 
        placeholder='Введите название задачи' 
        type='text' 
      />
      <TaskFilterDropdown 
        parentClass={'assignedUser'}
        returnValue={setParamByFilter}
        purpose={'_filter'} 
        key={2} 
        monitorableState={isSeacrhPressed} 
        defaultContent='Пользователь' 
        dropdownItems={userAllData !== undefined?userAllData.map((user)=>{return user.username}):[]}
        relatedData = {userAllData !== undefined?userAllData.map((user)=>{return user.id}):[]}
      />
      <TaskFilterDropdown 
        parentClass={'status'}
        returnValue={setParamByFilter}
        purpose={'_filter'} 
        key={3} 
        monitorableState={isSeacrhPressed} 
        defaultContent='Статус' 
        dropdownItems={['Завершено','Тестирование','В работе','Открыто']} 
      />
      <TaskFilterDropdown 
        parentClass={'rank'}
        returnValue={setParamByFilter}
        purpose={'_filter'} 
        key={4} 
        monitorableState={isSeacrhPressed} 
        defaultContent='Приоритет' 
        dropdownItems={['Высокий','Средний','Низкий']} 
      />
      <Button 
        callback={buttonClickHanler}
        color='primary' 
        content='Применить' 
        parentClass={'_filter'} 
        key={5}
      />
    </div>
  )
}

export {}