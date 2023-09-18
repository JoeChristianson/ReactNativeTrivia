import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import currentQuizReducer from "./features/currentQuiz/currentQuizSlice"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    currentQuiz:currentQuizReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;