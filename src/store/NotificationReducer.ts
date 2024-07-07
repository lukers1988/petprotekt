import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import NotificationInterface from '@appInterfaces/NotificationInterface';

const initialState: { list: NotificationInterface[] } = { list: [] };

const notificationSlice = createSlice({
    name: 'notifications',
    initialState: initialState,
    reducers: {
        showNotification: (state, action: PayloadAction<NotificationInterface>) => {
            const newId = action.payload.id || uuidv4();
            const updatedList = [...state.list, { ...action.payload, id: newId }];
            state.list = updatedList;
        },
        deleteNotification: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter(
                (notification: NotificationInterface) => notification.id !== action.payload
            );
        }
    }
});

export const { showNotification, deleteNotification } = notificationSlice.actions;

export const showNotificationWithDuration =
    (notification: NotificationInterface) => (dispatch: Dispatch) => {
        const id = uuidv4();
        dispatch(showNotification({ ...notification, id }));

        if (notification.duration) {
            setTimeout(() => {
                dispatch(deleteNotification(id));
            }, notification.duration);
        }
    };

export default notificationSlice.reducer;
