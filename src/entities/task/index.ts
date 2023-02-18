import { TaskInfoItem } from './UI/taskPage/TaskInfoItem' 
import { ApplyEditing } from "./UI/taskPage/ApplyEditing";
import { DenyEditing } from "./UI/taskPage/DenyEditing";

import { TaskListItem } from './UI/taskList/TaskListItem';

import { taskSlice } from './model/taskSlice';
import { taskApi } from './model/taskAPI';

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
        //slices
        taskSlice,
        //selector
        useTasks,
}
