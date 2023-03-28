import React,{FC, useEffect, useState} from 'react'
import { useGetUserByNicknameMutation, useGetUsersAllQuery } from 'entities/user'
import { Dropdown as TaskFilterDropdown,Button,Input as TaskFilterInput} from 'shared'
import { getTaskDropdownStaticArgument, setTaskFilterParams, taskFilterParams } from 'entities/task'
import { FilterInput as TestFilterInput } from 'pages/test/UI/FilterInput';
import { useAppDispatch } from 'app/store/hooks'
import 'wigets/task/taskFilter/styles/filter.scss'
import { Dropdown as TestDropdown } from 'pages/test/UI/Dropdown'
import { Button as TestButton } from 'pages/test/UI/Button';

interface FilterProps{
  returnFilterParams:(filter:taskFilterParams)=>void,
}

export const Filter:FC<FilterProps> = ({returnFilterParams,...FilterProps}) => {
  const [isResetPressed,setIsResetPressed] = useState<boolean>(false);
  const [filterParams,setFilterParams] = useState({});

  const {data:userAllData} = useGetUsersAllQuery();
  const [userData] = useGetUserByNicknameMutation();

  const dispath = useAppDispatch();

  const setParamsByApi = (value:string)=>{
    userData(value).unwrap().then((result)=>{
      setFilterParams({
        ...filterParams,
        assignedUsers:result.data[0].id});
    });
  }
  const setParamsByProps = (value:string,arg:string)=>{
    setFilterParams({
      ...filterParams,
      [arg]:getTaskDropdownStaticArgument(arg,value)
    })
  }

  const setParamsByInput = (value:string)=>{
    setFilterParams({
      ...filterParams,
      query:value
    })
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
    console.log(filterParams);
    
  },[filterParams,isResetPressed])
  return (
    <div className="cardTaskList_filter _filter">
      <TestDropdown
        width={'96px'}
        key={0}
        dataKey='type'
        returnValue={setParamsByProps}
        monitorableState={isResetPressed}
        defaultContent='Тип'
        dropdownItems={['Создание','Фикс']} 
      />
      <TestFilterInput 
        key={1}
        width='527px'
        placeholder='Введите название задачи'
        dataSource='input'
        dataKey='title'
        callback={setParamsByInput}
        monitorableState={isResetPressed}
      />
      <TestDropdown 
        dataKey={'assignedUser'}
        width='180px'
        returnValue={setParamsByApi}
        key={2} 
        monitorableState={isResetPressed} 
        defaultContent='Пользователь' 
        dropdownItems={userAllData !== undefined?userAllData.map((user)=>{return user.username}):[]}
        relatedData = {userAllData !== undefined?userAllData.map((user)=>{return user.id}):[]}
      />
      <TestDropdown 
        dataKey={'status'}
        width='120px'
        returnValue={setParamsByProps}
        key={3} 
        monitorableState={isResetPressed} 
        defaultContent='Статус' 
        dropdownItems={['Завершено','Тестирование','В работе','Открыто']} 
      />
      <TestDropdown 
        dataKey={'rank'}
        width='120px'
        returnValue={setParamsByProps}
        key={4} 
        monitorableState={isResetPressed} 
        defaultContent='Приоритет' 
        dropdownItems={['Высокий','Средний','Низкий']} 
      />
      <TestButton 
        callback={buttonClickHanler}
        content='Поиск'
        variant='primary'
        key={5}
      />
      <div onMouseDown={resetParamsClickHandler} className='_filter_reset'></div>
    </div>
  )
}

export {}