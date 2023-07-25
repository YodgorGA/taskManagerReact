import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react'
import { persistedStore, store } from 'app/store';
import App from 'app/index';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <App/>
      </PersistGate>
    </StoreProvider>
);