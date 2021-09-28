import React, { useState } from 'react';
import ForgotPasswordScreen from './ForgotPasswordScreen';

export default function ForgotPasswordContainer(): JSX.Element {
    const [isProcessing, setIsProcessing] = useState(false);

    const onSubmit = (data: Object) => {
        setIsProcessing(true);

        try {
            // TODO:
            // call api to authenticate user and redirect to dashboard
            setTimeout(() => {
                setIsProcessing(false);
            }, 500);
        } catch (err) {
            // TODO handle error
        }
    };

    return <ForgotPasswordScreen
        isProcessing={isProcessing}
        onSubmit={onSubmit} />;
}
