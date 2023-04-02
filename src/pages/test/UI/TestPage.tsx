import { Tasks } from 'entities/task';
import React, { useState } from 'react'
import { Paginator } from 'wigets/paginator';
import { TaskFilter } from 'wigets/task/taskFilter';
import { TaskListWidget } from 'wigets/task/taskList';
import { Button } from '../../../shared/UI/Button';
import { CardHeader } from '../../../shared/UI/CardHeader';
import { ContentWrapper } from '../../../shared/UI/ContentWrapper';
import { Dropdown } from '../../../shared/UI/Dropdown';
import { Input } from '../../../shared/UI/Input';
import { PageCard } from '../../../shared/UI/PageCard';
import { PageContainer } from '../../../shared/UI/PageContainer';


export const TestPage = () => {
  const [loginValidation,setLoginValidation] = useState<'red'|'primary'|'green'>('primary');
  const getData = () =>{

  }
  const [visibleTasks,setVisibleTasks] = useState<Tasks>();
  //написать onChange посмотреть как валидируется форма
  return (
    <PageContainer>
      <ContentWrapper padding='24px 0px 0px 0px' width='1280px' flexDirection='column' alignItems='flex-start'>
        <CardHeader
          title='Задачи' 
          childButtons={[
            <Button variant={'primary'} content={'Добавить задачу'} />,
            <Button variant={'red'} content={'Удалить задачу'} />
          ]}
        />
        <PageCard>
          <TaskFilter returnFilterParams={()=>{}}/>
          <TaskListWidget fetchData={()=>{}} filteredData={visibleTasks}/>
        </PageCard>
        <Paginator handlePageChangeFetchCallback={()=>{}} parentClass={'taskList'} showedItemCountTotal={40}/>
      </ContentWrapper>
    </PageContainer>
  )
}

export {}