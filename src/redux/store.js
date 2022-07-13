import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/auth-slice';
import { contactsSlice } from './contactsSlice';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  PERSIST,
  PURGE,
  REGISTER,
  PAUSE,
  REHYDRATE,
} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import persistReducer from 'redux-persist/es/persistReducer';
import { contactsApi } from './contactsApi';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    auth: persistReducer(authPersistConfig, authSlice),
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
