import React from 'react';
import {BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import { PageHeader } from './components/page/PageHeader';
import {LoginPage} from './pages/LoginPage';

function App() {
  return (
    <div className='page_wrapper'>
    <Router>
    <PageHeader/>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/tasks' element={<LoginPage/>}/>
        <Route path='/users' element={<LoginPage/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
