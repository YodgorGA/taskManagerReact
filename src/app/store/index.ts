import { configureStore, ThunkAction, Action, } from '@reduxjs/toolkit';
// import userStore from '../../features/userReducer';
// import { authAPI } from '../../features/api/authAPI';
import {authSlice} from './slices/authSlice';
export const store = configureStore({
  reducer: {
    //====================================REDUCER INITIALIZING EXAMPLE====================================
      // user: userStore,
      // [authAPI.reducerPath]:authAPI.reducer
      auth:authSlice.reducer
    //====================================REDUCER INITIALIZING EXAMPLE====================================
  },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authAPI.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,RootState,unknown,Action<string>>;
