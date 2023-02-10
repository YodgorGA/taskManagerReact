import { PageHeader } from 'wigets/header';
import { HeaderUserProfile } from 'features/userProfile';
import { Routes ,Route } from 'react-router-dom';
import { Navbar as HeaderNavbar} from 'entities/navbar';
import { LoginPage } from 'pages/login';
import { TaskListPage } from 'pages/taskList';
import { TaskPage } from 'pages/taskPage';
import { TestPage } from 'pages/test';
import { UserListPage } from 'pages/userList';
import { EditTaskPage } from 'pages/editTaskPage';
import { UserPage } from 'pages/userPage';

export const Routing = () => {
    return (
        <>
        <PageHeader navBar={<HeaderNavbar/>} userProfile={<HeaderUserProfile userName='Get from API' userProfilePhoto='/img/pageHeader/userImage.png'/>}/>

        <Routes>
            <Route path='/' element={<TaskListPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/tasks' element={<TaskListPage/>}/>
            <Route path='/users' element={<UserListPage/>}/>
            <Route path='/tasks/:id' element={<TaskPage/>}/>
            <Route path='/test' element={<TestPage/>}/>
            <Route path='/tasks/:id/edit' element={<EditTaskPage/>}/>
            <Route path='/users/:id' element={<UserPage/>}/>
        </Routes>
        </>

    )
}