import React,{FC, useEffect, useState} from 'react'
import styled from '@emotion/styled'
import { Dropdown as TestDropdown } from 'shared/UI/Dropdown'
import { Button as TestButton } from 'shared/UI/Button';
import { FilterInput as TestFilterInput } from 'shared/UI/FilterInput';
import { useGetUserByNicknameMutation, useGetUsersAllQuery } from 'entities/user';
import { useAppDispatch } from 'app/store/hooks';
import { getTaskDropdownStaticArgument, setTaskFilterParams, taskFilterParams } from 'entities/task';
import { ResetButton } from '../../../../shared/UI/ResetButton';

interface TaskFilterProps{
    returnFilterParams:(filter:taskFilterParams)=>void,
}

const StyledTaskFilter = styled.div<TaskFilterProps>`
    height: 24px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 10;
`
export const TaskFilter:FC<TaskFilterProps> = ({returnFilterParams,...TaskFilterProps}) => {
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
        <StyledTaskFilter returnFilterParams={returnFilterParams}{...TaskFilterProps}>
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
            <ResetButton callback={resetParamsClickHandler}/>
        </StyledTaskFilter>
    )
}
export {}