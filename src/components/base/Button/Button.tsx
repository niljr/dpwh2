import React from 'react';
import { Button as BootstrapButton, ButtonProps } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { ButtonVariant } from '../../../types';
import './button.scss';

type Props = {
    variant?: ButtonVariant,
    label: string,
    className?: string,
    onClick?: () => void,
    children?: JSX.Element | string,
    iconLeft?: any,
    iconRight?: any,
    isProcessing?: boolean
}

export default function Button({
    variant = 'primary', label, className = '', onClick, iconLeft: IconLeft, iconRight: IconRight, children, isProcessing, ...rest
}: Props & ButtonProps): JSX.Element {
    return (
        <BootstrapButton
            variant={variant || 'primary'}
            className={`button ${className}`}
            onClick={onClick}
            {...rest}>
            {isProcessing && (
                <Spinner
                    animation='border'
                    role='status'
                    variant={/light|link/.test(variant || '') ? 'dark' : 'light'}
                    className='button__spinner'
                    size='sm'/>
            )}
            {IconLeft && (
                <IconLeft className='mr-2'/>
            )}
            {label}
            {children}
            {IconRight && (
                <IconRight className='ml-2'/>
            )}
        </BootstrapButton>
    );
}
