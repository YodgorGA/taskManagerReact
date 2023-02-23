import React,{FC, useEffect, useState} from 'react'
import { useGetUsersAllQuery, UserInfo } from 'entities/user'
import { Button } from 'shared'
import { Dropdown as TaskFilterDropdown} from 'shared'
import { Input as TaskFilterInput } from 'shared'
import '../styles/filter.scss'
import { getTaskFilterInitialState, Task, taskFilterParams, Tasks, useGetTaskListByFilterMutation } from 'entities/task'

interface FilterProps{
  returnDataCallback:(tasks:Tasks) =>void
}

export const Filter:FC<FilterProps> = ({returnDataCallback,...FilterProps}) => {
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
      returnDataCallback(tasks)
      console.log(tasks);
      
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
      <TaskFilterDropdown returnValue={setParamByFilter}key={0} purpose={'_filter'} monitorableState={isSeacrhPressed} defaultContent='Тип' dropdownItems={['Создание','Фикс']} parentClass='type'/>
      <TaskFilterInput purpose='title' returnValueCallback={setParamByFilter} key={1}placeholder='Введите название задачи' monitorableState={isSeacrhPressed} type='text' parentClass='_filter'/>
      <TaskFilterDropdown returnValue={setParamByFilter}purpose={'_filter'} key={2} monitorableState={isSeacrhPressed} defaultContent='Пользователь' dropdownItems={userAllData !== undefined?userAllData.map((user)=>{return user.username}):[]} parentClass={'user'}/>
      <TaskFilterDropdown returnValue={setParamByFilter}purpose={'_filter'} key={3} monitorableState={isSeacrhPressed} defaultContent='Статус' dropdownItems={['Завершено','Тестирование','В работе','Открыто']} parentClass={'status'}/>
      <TaskFilterDropdown returnValue={setParamByFilter}purpose={'_filter'} key={4} monitorableState={isSeacrhPressed} defaultContent='Приоритет' dropdownItems={['Высокий','Средний','Низкий']} parentClass={'rank'}/>
      <Button callback={buttonClickHanler}color='primary' content='Применить' parentClass={'_filter'} key={5}/>
    </div>
  )
}

export {}