import React from 'react';
import Typography from '../Typography/Typography';
import './navbar.scss';

type Props = {
    className?: string
}

const appName = process.env.REACT_APP_SITE_TITLE;

export default function Navbar({ className = '' }: Props): JSX.Element {
    return (
        <div className={`navbar ${className}`} >
            <Typography size={24}>{appName}</Typography>
        </div>
    );
}
