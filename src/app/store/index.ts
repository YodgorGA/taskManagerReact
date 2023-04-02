import { configureStore, ThunkAction, Action, combineReducers, } from '@reduxjs/toolkit';
import { persistStore,persistReducer,FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';

import { userApi, userSlice } from 'entities/user';
import { taskSlice, taskSliceState } from 'entities/task';
import { taskApi } from 'entities/task';
import { userSliceState } from 'entities/user/model/userSlice';
import { commentApi } from 'entities/comment';

const persistConfig = {
  key:'root',
  storage,
  whiteList:[userSlice]
}


export const store = configureStore({
  reducer: {
    [commentApi.reducerPath]:commentApi.reducer,
    [userApi.reducerPath]:userApi.reducer,
    [taskApi.reducerPath]:taskApi.reducer,
    task: taskSlice.reducer,
    user: persistReducer<userSliceState,any>(persistConfig,userSlice.reducer),
  },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER
        ],
      },
    }).concat(taskApi.middleware,userApi.middleware,commentApi.middleware)
});

export const persistedStore = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,RootState,unknown,Action<string>>;
