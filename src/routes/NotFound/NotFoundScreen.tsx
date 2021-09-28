// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import Typography from 'components/base/Typography';
import './not-found.scss';

type Props = {
    // TODO add props here
}

export default function NotFoundScreen(_: Props): JSX.Element {
    return (
        <div className='not-found'>
            <div className='not-found__wrapper'>
                <Typography size={40}>404</Typography>
                <Typography size={26} className='my-4'>Page Not Found</Typography>
                <Typography>
                    The Page you are looking for doesn't exist.
                </Typography>
                <Link to='/'>Back to Home</Link>
            </div>
        </div>
    );
}
