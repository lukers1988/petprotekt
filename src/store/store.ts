import { combineReducers, configureStore } from '@reduxjs/toolkit';
import UserReducer from './UserReducer';
import NotificationReducer from './NotificationReducer';
import PetsReducer from './PetsReducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  user: UserReducer,
  notifications: NotificationReducer,
  petList: PetsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
});

export type RootStateType = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
