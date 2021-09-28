import React from 'react';
import * as yup from 'yup';
import Form from 'components/base/Form';
import Typography from 'components/base/Typography';
import './forgot-password.scss';

type Props = {
    onSubmit: (data: Object) => void,
    isProcessing: boolean
}

const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required')
});

const formStructure = [[
    { label: 'Email', placeholder: 'Email', name: 'email', portion: 12, inputType: 'email' }
]];

export default function ForgotPasswordScreen({ onSubmit, isProcessing }: Props): JSX.Element {
    return (
        <div className='forgot-password'>
            <div className='forgot-password__wrapper'>
                <Typography size={26} className='mb-5 text-center'>
                    Forgot Password
                </Typography>

                <Form
                    className='forgot-password__form'
                    isShowLabels={false}
                    structure={formStructure}
                    onSubmitForm={onSubmit}
                    schema={schema}
                    submitLabel='Submit'
                    isProcessing={isProcessing} />
            </div>
        </div>
    );
}
