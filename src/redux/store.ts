import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import userStore from '../features/userStore';
export const store = configureStore({
  reducer: {
    //====================================REDUCER INITIALIZING EXAMPLE====================================
    user: userStore,
    //====================================REDUCER INITIALIZING EXAMPLE====================================
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,RootState,unknown,Action<string>>;
