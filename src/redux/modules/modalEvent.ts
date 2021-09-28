import { createSlice } from '@reduxjs/toolkit';
import { ModalSize } from '../../types';

export type ModalState = {
    title?: string,
    modalContent: string | JSX.Element,
    onToggle?: () => void,
    className?: string,
    size?: ModalSize,
}

const initialState: ModalState = {
    title: '',
    modalContent: '',
    className: '',
    size: 'md',
    onToggle: () => {}
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalContent: (state, action) => {
            state = {
                ...state,
                ...action
            };
        },
        clearModalContent: (state) => {
            state = initialState;
        }
    }
});

export const { setModalContent, clearModalContent } = modalSlice.actions;

export default modalSlice.reducer;
