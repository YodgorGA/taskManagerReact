import { configureStore, ThunkAction, Action, } from '@reduxjs/toolkit';
import { userApi, userSlice } from 'entities/user';
import { taskSlice } from 'entities/task';
import { taskApi } from 'entities/task';

export const store = configureStore({
  reducer: {
    //====================================REDUCER INITIALIZING EXAMPLE====================================
    [userApi.reducerPath]:userApi.reducer,
    [taskApi.reducerPath]:taskApi.reducer,
    task:taskSlice.reducer,
    user:userSlice.reducer,

    //====================================REDUCER INITIALIZING EXAMPLE====================================
  },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(taskApi.middleware,userApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,RootState,unknown,Action<string>>;
