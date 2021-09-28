import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'components/base/Form';
import Typography from 'components/base/Typography';
import formStructure from './loginForm';
import schema from './loginSchema';
import './login.scss';

type Props = {
    onSubmit: (data: Object) => void,
    isProcessing: boolean
}

export default function LoginScreen({ onSubmit, isProcessing }: Props): JSX.Element {
    return (
        <div className='login'>
            <div className='login__wrapper'>
                <Typography size={40} className='mb-5 text-center'>
                    {process.env.REACT_APP_SITE_TITLE}
                </Typography>
                <Form
                    className='login__form'
                    isShowLabels={false}
                    structure={formStructure}
                    onSubmitForm={onSubmit}
                    schema={schema}
                    submitLabel='Login'
                    isProcessing={isProcessing} />
                <Link to='/forgot-password'>Forgot your password?</Link>
            </div>
        </div>
    );
}
