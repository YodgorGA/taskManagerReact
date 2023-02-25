import React,{FC, useEffect, useState} from 'react'
import { useGetUserByNicknameMutation, useGetUsersAllQuery } from 'entities/user'
import { Dropdown as TaskFilterDropdown,Button,Input as TaskFilterInput} from 'shared'
import { getTaskFilterStaticArgument, setTaskFilterParams, taskFilterParams } from 'entities/task'
import { useAppDispatch } from 'app/store/hooks'
import '../styles/filter.scss'

interface FilterProps{
  returnFilterParams:(filter:taskFilterParams)=>void,
}

export const Filter:FC<FilterProps> = ({returnFilterParams,...FilterProps}) => {
  const [isResetPressed,setIsResetPressed] = useState<boolean>(false);
  const [filterParams,setFilterParams] = useState({});

  const {data:userAllData} = useGetUsersAllQuery();
  const [userData] = useGetUserByNicknameMutation<{data:[]}>();

  const dispath = useAppDispatch();
  
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
          assignedUsers:result.data[0].id});
      });
    }
    else if(dataSource === 'input'){
      setFilterParams({
        ...filterParams,
        query:value
      })
    }
  }

  const buttonClickHanler = () =>{
    returnFilterParams(filterParams);
    dispath(setTaskFilterParams(filterParams));
  }

  const resetParamsClickHandler = ()=>{
    setIsResetPressed(true);
    setTimeout(()=>{
      setFilterParams({})
      returnFilterParams({});
      setIsResetPressed(false)
    },0)
  }
  useEffect(()=>{
    
  },[filterParams,isResetPressed])
  return (
    <div className="cardTaskList_filter _filter">
      <TaskFilterDropdown
        dataSource={'props'}
        parentClass={'type'}
        returnValue={setParamByFilter} 
        purpose={'_filter'} 
        key={0} 
        monitorableState={isResetPressed} 
        defaultContent='Тип' 
        dropdownItems={['Создание','Фикс']} 
      />
      <TaskFilterInput
        dataSource={'input'}
        parentClass='title'
        returnDataForFilterCallback={setParamByFilter}
        purpose='filter'
        key={1}
        monitorableState={isResetPressed}
        type='text'
        placeholder='Введите название задачи'
      />
      <TaskFilterDropdown 
        dataSource={'api'}
        parentClass={'assignedUser'}
        returnValue={setParamByFilter}
        purpose={'_filter'} 
        key={2} 
        monitorableState={isResetPressed} 
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
        monitorableState={isResetPressed} 
        defaultContent='Статус' 
        dropdownItems={['Завершено','Тестирование','В работе','Открыто']} 
      />
      <TaskFilterDropdown 
        dataSource={'props'}
        parentClass={'rank'}
        returnValue={setParamByFilter}
        purpose={'_filter'} 
        key={4} 
        monitorableState={isResetPressed} 
        defaultContent='Приоритет' 
        dropdownItems={['Высокий','Средний','Низкий']} 
      />
      <Button 
        callback={buttonClickHanler}
        color='primary' 
        content='Поиск' 
        parentClass={'_filter'} 
        key={5}
      />
      <div onMouseDown={resetParamsClickHandler} className='_filter_reset'></div>
    </div>
  )
}

export {}