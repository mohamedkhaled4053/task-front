import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import dataReducer from './features/dataSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    data: dataReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
