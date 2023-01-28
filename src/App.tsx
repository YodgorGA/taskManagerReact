import React from 'react';
import {BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import { UserProfile } from './components/page/UserProfile';
import { PageHeader } from './components/page/PageHeader';
import {LoginPage} from './pages/LoginPage';
import { TaskList } from './pages/TaskList';
import { TaskPage } from './pages/TaskPage';
import { TestPage } from './pages/TestPage';
import { UserList } from './pages/UserList';

function App() {
  return (
    <div className='page_wrapper'>
    <Router>
    <PageHeader userProfile={<UserProfile userName='Get from API' userProfilePhoto='/img/pageHeader/userImage.png'/>}/>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/tasks' element={<TaskList/>}/>
        <Route path='/users' element={<UserList/>}/>
        <Route path='/tasks/:id' element={<TaskPage/>}/>
        <Route path='/test' element={<TestPage/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
