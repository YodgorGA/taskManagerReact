import React,{FC, useState} from 'react'
import styled from '@emotion/styled'
import { Button, ContentWrapper, Divider, Dropdown, Label, Textarea, ValueDataKeyFunc, ValueFunc } from 'shared'
import { dataForTaskCreation, getTaskDropdownStaticArgument, useAddTaskMutation } from 'entities/task';
import { useGetUserByNicknameMutation, useGetUsersAllQuery, useUserState } from 'entities/user';

interface FormContainerProps{
    closeFormCallback:()=>void,
    fetchData:()=>void,
}


export const AddTaskForm:FC<FormContainerProps> = ({closeFormCallback,fetchData,...FormContainerProps}) => {
    
    const [isFormItemsClear,setIsFormItemsClear] = useState<boolean>(true);
    const [addTask] = useAddTaskMutation();
    const userState = useUserState()
    const [addedData,setAddedData] = useState<dataForTaskCreation>({
        userId:userState.currentUser?.id,
        assignedId:'',
        description:undefined,
        rank:undefined,
        title:undefined,
        type:undefined
    });
    
    const {data:userAllData} = useGetUsersAllQuery();
    const [userData] = useGetUserByNicknameMutation<{data:[]}>();

    const clearForm = ()=>{
        setIsFormItemsClear(false)
        setTimeout(()=>{setIsFormItemsClear(true)},0)
    }
    const saveChangesButtonClickHanler = ()=>{
        addTask({
            ...addedData,
            assignedId:addedData.assignedId,
            description:addedData.description,
            rank:addedData.rank,
            title:addedData.title,
            type:addedData.type 
        })
        fetchData()
        clearForm()
        closeFormCallback()
    }
    const denyChangesButtonClickHanler = ()=>{
        clearForm()
        closeFormCallback()
    }
    const getValueFromApi:ValueFunc = (value:string) => {
        userData(value).unwrap().then((result)=>{
            setAddedData({
                ...addedData,
                assignedId:result.data[0].id
            });
        });
    }
    const getValueFromProps:ValueDataKeyFunc = (value:string,dataKey:string)=>{
        setAddedData({
            ...addedData,
            [dataKey]:getTaskDropdownStaticArgument(dataKey,value)
        })
    }
    const getValueFromInput:ValueDataKeyFunc = (value:string,dataKey:string) =>{
        setAddedData({
            ...addedData,
            [dataKey]:value
        })
    }


    return (
        <ContentWrapper  
            flexDirection='column' 
            alignItems='center' 
            padding='100px 0px 0px 0px' 
            justifyContent='flex-start'
            height='fit-content'
        >
            <FormContainer closeFormCallback={closeFormCallback} fetchData={fetchData} {...FormContainerProps}>
                <FormTitle>
                    Создать задачу
                </FormTitle>
                <FormContent>
                    <FormLeft>
                        <Label key={Math.random()} content='Тип'/>
                        <Dropdown 
                            width='230px'
                            dataKey='type'
                            purpose='addTask'
                            returnValue={getValueFromProps}
                            monitorableState={isFormItemsClear} 
                            defaultContent='Выберите тип' 
                            dropdownItems={['Создание','Фикс']}
                            key={0}
                        />
                        <Label key={Math.random()} content='Пользователь'/>
                        <Dropdown
                            width='230px'
                            dataKey='assignedId'
                            purpose='addTask'
                            returnValue={getValueFromApi}
                            monitorableState={isFormItemsClear} 
                            defaultContent='Выберите исполнителя' 
                            dropdownItems={userAllData !== undefined?userAllData.map((user)=>{return user.username}):[]}
                            relatedData = {userAllData !== undefined?userAllData.map((user)=>{return user.id}):[]}
                            key={1}
                        />
                        <Label key={Math.random()} content='Приоритет'/>
                        <Dropdown 
                            width='230px'
                            dataKey='rank' 
                            purpose='addTask'
                            returnValue={getValueFromProps}
                            monitorableState={isFormItemsClear} 
                            defaultContent='Выберите приоритет' 
                            dropdownItems={['Низкий','Средний','Высокий']}
                            key={2}
                        />
                        <Label key={Math.random()} content='Название задачи'/>
                        <Textarea
                            dataKey='title'
                            callback={getValueFromInput}
                            monitorableState={isFormItemsClear} 
                            placeholder='Введите название задачи'
                            key={3}
                        />
                    </FormLeft>
                    <Divider height='280px'/>
                    <FormRight>
                        <Label key={Math.random()} content='Описание'/>
                        <Textarea
                            dataKey='description'
                            callback={getValueFromInput}
                            monitorableState={isFormItemsClear} 
                            placeholder='Введите описание задания'
                            height='255px'
                            key={4}
                        />
                    </FormRight>
                </FormContent>
                <FormButtons>
                    <Button key={5} variant='primary' content='Сохранить' callback={saveChangesButtonClickHanler}/>
                    <Button key={6} variant='white' content='Отмена' callback={denyChangesButtonClickHanler}/>
                </FormButtons>
            </FormContainer>
        </ContentWrapper>

    )
}

const FormContainer = styled.div<FormContainerProps>`
    box-sizing: border-box;
    width: 730px;
    background-color: #FFFFFF;
    min-height: 405px;
    display:flex;
    flex-direction:column;
    border-radius:10px;
`

const FormTitle = styled.div`
    width: inherit;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "Roboto";
    align-items:center;
    font-size: 20px;
    font-weight: 400;
    line-height: 171%;
`

const FormContent = styled.div`
    display:flex;
    flex-direction:row;
`

const FormLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-self: flex-start;
    height: inherit;
    padding: 0px 20px 0px 30px;
    width: 230px;
`

const FormRight = styled.div`
    width:400px;
`

const FormButtons = styled.div`
    padding: 40px 30px 10px 30px;
    box-sizing: border-box;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap:5px;
`
export {}

