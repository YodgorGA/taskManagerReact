import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import './sass/index.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <StoreProvider store={store}>
      <App/>
    </StoreProvider>
);