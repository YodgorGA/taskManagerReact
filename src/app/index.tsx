import React from 'react';
import { withProviders } from './providers';
import { Routing } from 'pages';
import { ContentWrapper } from 'shared/UI/ContentWrapper';
import { fonts, globalStyles } from './styles/globals';
import { Global } from '@emotion/react';
import  './index.scss';


const App = () => {
  return (
    <>
      <Global styles={globalStyles}/>
      <Global styles={fonts}/>
      <ContentWrapper flexDirection='column' alignItems='center' justifyContent='flex-start'>
        <Routing/>
      </ContentWrapper>
    </>  
  );
}

export default withProviders(App);
