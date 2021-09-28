import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FlashNotificationState = {
    message?: string,
    isError?: boolean,
    duration?: number
}

const initialState: FlashNotificationState = {
    message: '',
    isError: false,
    duration: 3000
};

export const flashNotificationSlice = createSlice({
    name: 'flashNotification',
    initialState,
    reducers: {
        setFlashNotification: (state, action: PayloadAction<FlashNotificationState>) => ({
            ...state,
            ...action.payload
        }),
        clearFlashMessage: (state) => ({
            ...initialState
        })
    }
});

export const { setFlashNotification, clearFlashMessage } = flashNotificationSlice.actions;

export default flashNotificationSlice.reducer;
