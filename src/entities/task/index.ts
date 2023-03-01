import { TaskInfoItem } from './UI/taskPage/TaskInfoItem' 
import { ApplyEditing } from "./UI/taskPage/ApplyEditing";
import { DenyEditing } from "./UI/taskPage/DenyEditing";

import { TaskListItem } from './UI/taskList/TaskListItem';

import { taskSlice, type taskSliceState, setTaskFilterParams } from './model/taskSlice';
import { taskApi,useChangeTaskStausMutation,useGetTaskByIdQuery,type Tasks, useGetTaskListMutation,useAddTaskMutation, useAddWorkTimeMutation} from './model/taskAPI';

import { getListItemButtonItemsState, getTaskFilterInitialState, getTaskFilterStaticArgument } from './lib/helpers/helpers';

import type { Task, taskFilterParams,taskFilterBody, dataForTaskCreation, addWorkTimeResponce, addWorkTimeQueryParams, addWorkTimeBody} from './lib/types';

import { useTasks } from './model/selectors';



export {
    //UI
    TaskInfoItem,
    ApplyEditing,
    DenyEditing,
    TaskListItem,
    //model
        //api
        taskApi,
        //apiReducers
        useChangeTaskStausMutation,useGetTaskByIdQuery,useGetTaskListMutation,useAddTaskMutation,useAddWorkTimeMutation,
        //slice
        taskSlice,
        //sliceReducers
        setTaskFilterParams,
        //selector
        useTasks,
        //interfaces
        taskSliceState,
        //types
        Task,Tasks,taskFilterParams,taskFilterBody,dataForTaskCreation,addWorkTimeResponce,addWorkTimeQueryParams,addWorkTimeBody,
        //heplers
        getListItemButtonItemsState,getTaskFilterInitialState,getTaskFilterStaticArgument,

}
