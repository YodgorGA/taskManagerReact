import { Tasks } from 'entities/task';
import { AddTaskForm } from 'features/addTaskForm';
import React, { useState } from 'react'
import { PageModal } from 'shared';
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
      <PageModal visible={true}>
          {/* <TestAddTaskForm /> */}
      </PageModal>
    </PageContainer>
  )
}

export {}