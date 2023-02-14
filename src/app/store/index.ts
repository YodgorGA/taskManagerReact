import { configureStore, ThunkAction, Action, } from '@reduxjs/toolkit';
import { authApi } from 'wigets/loginForm/lib/api/authApi';
import {userSlice} from 'entities/user/model/userSlice';
export const store = configureStore({
  reducer: {
    //====================================REDUCER INITIALIZING EXAMPLE====================================
      // user: userStore,
      [authApi.reducerPath]:authApi.reducer,
      user:userSlice.reducer,

    //====================================REDUCER INITIALIZING EXAMPLE====================================
  },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,RootState,unknown,Action<string>>;
