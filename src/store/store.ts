import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './UserReducer';
import NotificationReducer from './NotificationReducer';
import PetsReducer from './PetsReducer';

const store = configureStore({
  reducer: {
    user: UserReducer,
    notifications: NotificationReducer,
    petList: PetsReducer
  }
});

export type RootStateType = ReturnType<typeof store.getState>;
export default store;
