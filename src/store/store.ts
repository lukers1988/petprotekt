import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './UserReducer';
import NotificationReducer from './NotificationReducer';

const store = configureStore({
    reducer: {
        user: UserReducer,
        notifications: NotificationReducer
    }
});

export default store;
