import React,{FC, useEffect, useState} from 'react'
import { useGetUserByNicknameMutation, useGetUsersAllQuery } from 'entities/user'
import { Button } from 'shared'
import { Dropdown as TaskFilterDropdown} from 'shared'
import { Input as TaskFilterInput } from 'shared'
import { getTaskFilterStaticArgument, Tasks, useGetTaskListByFilterMutation } from 'entities/task'
import '../styles/filter.scss'

interface FilterProps{
  returnDataToTaskList:(tasks:Tasks) =>void
}

export const Filter:FC<FilterProps> = ({returnDataToTaskList,...FilterProps}) => {
  const [isSeacrhPressed,setIsSearchPressed] = useState<boolean>(false);
  const {data:userAllData} = useGetUsersAllQuery();
  const [filterParams,setFilterParams] = useState({});
  const [filteredTaskList] = useGetTaskListByFilterMutation();
  const [userData] = useGetUserByNicknameMutation<{data:[]}>();
  
  const setParamByFilter = (dataSource:string,arg:string,value:string) =>{
    if(dataSource === 'props'){
      setFilterParams({
        ...filterParams,
        [arg]:getTaskFilterStaticArgument(arg,value)
      })
    }
    else if(dataSource === 'api'){
      userData(value).unwrap().then((result)=>{
        setFilterParams({
          ...filterParams,
          arg:result.data[0].id});
      });
    }
    else if(dataSource === 'user'){
      setFilterParams({
        ...filterParams,
        [arg]:value
      })
    }
    //Декомпозировать при помощи этой функции, передавая пропсом в дропдауе
    //только ключ, который будет использоваться этой функцией
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
        dataSource={'props'}
        parentClass={'type'}
        returnValue={setParamByFilter} 
        purpose={'_filter'} 
        key={0} 
        monitorableState={isSeacrhPressed} 
        defaultContent='Тип' 
        dropdownItems={['Создание','Фикс']} 
      />
      <TaskFilterInput
        dataSource={'user'}
        parentClass='title'
        returnDataForFilterCallback={setParamByFilter}
        purpose='filter'
        key={1}
        monitorableState={isSeacrhPressed}
        type='text'
        placeholder='Введите название задачи'
      />
      <TaskFilterDropdown 
        dataSource={'api'}
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
        dataSource={'props'}
        parentClass={'status'}
        returnValue={setParamByFilter}
        purpose={'_filter'} 
        key={3} 
        monitorableState={isSeacrhPressed} 
        defaultContent='Статус' 
        dropdownItems={['Завершено','Тестирование','В работе','Открыто']} 
      />
      <TaskFilterDropdown 
        dataSource={'props'}
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