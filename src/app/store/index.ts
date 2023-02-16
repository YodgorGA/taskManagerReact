import { taskApi } from 'entities/task/model/taskAPI';
import { configureStore, ThunkAction, Action, } from '@reduxjs/toolkit';
import { authApi } from 'entities/user';
import { userSlice } from 'entities/user';
export const store = configureStore({
  reducer: {
    //====================================REDUCER INITIALIZING EXAMPLE====================================
      // user: userStore,
      [authApi.reducerPath]:authApi.reducer,
      [taskApi.reducerPath]:taskApi.reducer,
      user:userSlice.reducer,

    //====================================REDUCER INITIALIZING EXAMPLE====================================
  },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(taskApi.middleware,authApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,RootState,unknown,Action<string>>;
