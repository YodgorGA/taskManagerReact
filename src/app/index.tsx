import React from 'react';
import { withProviders } from './providers';
import { Routing } from 'pages';
import './index.scss';

const App = () => {
  return (
    <div className='page_wrapper'>
      <Routing/>
    </div>
  );
}

export default withProviders(App);
