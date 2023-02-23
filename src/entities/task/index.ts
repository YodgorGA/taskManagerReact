import type { Task, taskFilterParams } from './lib/types';
import { TaskInfoItem } from './UI/taskPage/TaskInfoItem' 
import { ApplyEditing } from "./UI/taskPage/ApplyEditing";
import { DenyEditing } from "./UI/taskPage/DenyEditing";

import { TaskListItem } from './UI/taskList/TaskListItem';

import { taskSlice, type taskSliceState } from './model/taskSlice';
import { taskApi,useChangeTaskStausMutation,useGetTasksAllMutation,useGetTaskByIdQuery,type Tasks, useGetTaskListByFilterMutation} from './model/taskAPI';

import { getListItemButtonItemsState, getTaskFilterInitialState, getTaskFilterStaticArgument } from './lib/helpers/helpers';

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
        useChangeTaskStausMutation,useGetTasksAllMutation,useGetTaskByIdQuery,useGetTaskListByFilterMutation,
        //slices
        taskSlice,
        //selector
        useTasks,
        //interfaces
        taskSliceState,
        //types
        Task,Tasks,taskFilterParams,
        //heplers
        getListItemButtonItemsState,getTaskFilterInitialState,getTaskFilterStaticArgument,

}
