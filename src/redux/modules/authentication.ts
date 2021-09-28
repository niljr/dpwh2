import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AuthenticationState = {
    isAuthed: boolean,
    isLoggingOut: boolean,
    profileData: Object,
    userToken: null | string
}

const initialState: AuthenticationState = {
    isAuthed: false,
    isLoggingOut: false,
    profileData: {},
    userToken: null
};

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        updateUserToken: (state, action: PayloadAction<string>) => {
            state.isLoggingOut = false;
            state.userToken = action.payload;
        },
        authUser: (state, action: PayloadAction<Object>) => {
            state.profileData = action.payload;
            state.isAuthed = true;
        },
        updateProfileData: (state, action: PayloadAction<Object>) => {
            state.profileData = {
                ...state.profileData,
                ...action.payload
            };
        },
        setLoggingOut: (state) => {
            state.isLoggingOut = true;
        }
    }
});

export const { updateUserToken, authUser, updateProfileData, setLoggingOut } = authenticationSlice.actions;

export default authenticationSlice.reducer;
