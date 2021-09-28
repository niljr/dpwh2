import React, { useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { clearFlashMessage } from 'redux/modules/flashNotification';
import './flash-notification.scss';

type Props = {
    className?: string
}

export default function FlashNotification({ className = '' }: Props): JSX.Element {
    const { message, isError, duration } = useAppSelector(({ flashNotification }) => flashNotification);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (message) {
            setTimeout(() => {
                dispatch(clearFlashMessage());
            }, duration);
        }
    }, [message, duration, dispatch]);

    return (
        <div className={`flash-notification${message ? ' is-visible' : ''}`} >
            <Alert variant={isError ? 'danger' : 'success'} className='flash-notification__alert animateOpen'>
                {message}
            </Alert>
        </div>
    );
}
