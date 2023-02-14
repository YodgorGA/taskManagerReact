import { PageHeader } from 'wigets/header';
import { HeaderUserProfile } from 'features/userProfile';
import { Routes ,Route, useLocation } from 'react-router-dom';
import { Navbar as HeaderNavbar} from 'entities/navbar';
import { LoginPage } from 'pages/login';
import { TaskListPage } from 'pages/taskList';
import { TaskPage } from 'pages/taskPage';
import { TestPage } from 'pages/test';
import { UserListPage } from 'pages/userList';
import { EditTaskPage } from 'pages/editTaskPage';
import { UserPage } from 'pages/userPage';
import { useUser } from 'entities/user/model/selectors';

export const Routing = () => {
    const location = useLocation();
    const {id} = useUser();
    return (
        <>
        
        {
            (location.pathname !== '/login')?
            <PageHeader 
                navBar={<HeaderNavbar/>} 
                userProfile={<HeaderUserProfile 
                userName='Get from API' 
                userProfilePhoto='/img/pageHeader/userImage.png'/>}
            />
            :<PageHeader/>
        }
        

        <Routes>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/' element={<TaskListPage/>}/>
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