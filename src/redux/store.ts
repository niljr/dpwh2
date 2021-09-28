import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import * as rootReducer from './reducers';

export const history = createBrowserHistory();

export const store = configureStore({
    reducer: {
        router: connectRouter(history),
        ...rootReducer
    },
    middleware: [routerMiddleware(history), ...getDefaultMiddleware({ serializableCheck: false })],
    devTools: process.env.NODE_ENV !== 'production'
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
