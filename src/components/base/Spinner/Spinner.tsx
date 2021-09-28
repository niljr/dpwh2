import React from 'react';
import { colorBrandGreen } from 'config/constants';
import './spinner.scss';

const DEFAULT_COLOR = colorBrandGreen;

type Props = {
    className?: string,
    color?: string,
    size?: number,
    useDefaultColor?: boolean
}

export default function Spinner({ className, useDefaultColor = false, color = colorBrandGreen, size = 50 }: Props): JSX.Element {
    const strokeColor = useDefaultColor
        ? DEFAULT_COLOR
        : (color || 'currentColor');

    return (
        <span className={className}>
            <svg
                className='spinner'
                fill='currentColor'
                width={`${size}px`}
                height={`${size}px`}
                viewBox='0 0 66 66'
                xmlns='http://www.w3.org/2000/svg'>
                <circle
                    className='path'
                    fill='none'
                    stroke={strokeColor}
                    strokeWidth='6'
                    strokeLinecap='round'
                    cx='33'
                    cy='33'
                    r='30' />
            </svg>
        </span>
    );
}
