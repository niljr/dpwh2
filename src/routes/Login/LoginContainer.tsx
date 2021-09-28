import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from 'redux/hooks';
import LoginScreen from './LoginScreen';
import { authUser } from '../../redux/modules/authentication';
import { setFlashNotification } from '../../redux/modules/flashNotification';

export default function LoginContainer(): JSX.Element {
    const dispatch = useAppDispatch();
    const history = useHistory();

    const [isProcessing, setIsProcessing] = useState(false);

    const onSubmit = (data: Object) => {
        setIsProcessing(true);

        try {
            // TODO:
            // call api to authenticate user and redirect to dashboard

            setTimeout(() => {
                setIsProcessing(false);
                dispatch(authUser(data));
                history.replace('/dashboard');
            }, 500);
        } catch (err) {
            dispatch(setFlashNotification({
                message: 'ERROR',
                isError: true
            }));
        }
    };

    return <LoginScreen
        onSubmit={onSubmit}
        isProcessing={isProcessing} />;
}
