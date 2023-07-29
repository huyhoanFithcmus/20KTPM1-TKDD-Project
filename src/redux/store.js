import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { spotify } from './services/spotify';

export const store = configureStore({
  reducer: {
    [spotify.reducerPath]: spotify.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spotify.middleware),
});
