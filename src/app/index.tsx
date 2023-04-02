import React from 'react';
import { withProviders } from './providers';
import { Routing } from 'pages';
import './index.scss';
import { ContentWrapper } from 'shared';

const App = () => {
  return (
      <ContentWrapper flexDirection='column' alignItems='center'>
        <Routing/>
      </ContentWrapper>
  );
}


export default withProviders(App);
