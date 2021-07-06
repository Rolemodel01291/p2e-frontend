import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './reducers/ui';
import gamesReducer from '../blockchain/games/gamesSlice';
export const store = configureStore({
  reducer: {
    ui: uiReducer,
    games: gamesReducer
  },
});
