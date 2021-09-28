import React from 'react';
import { TypographySize, Color, Weight } from '../../../types/index';
import './typography.scss';

type Props = {
    className?: string,
    component?: string,
    children: any,
    color?: Color,
    size?: TypographySize,
    weight?: Weight,
    props?: any
}

export default function Typography({
    component,
    className = '',
    color = 'dark',
    size = 16,
    weight = 'regular',
    children,
    ...props
}: Props): JSX.Element {
    const Component = component ? 'span' : 'p';

    return (
        <Component {...props} className={`typography size-${size} color-${color} weight-${weight} ${className}`} >
            {children}
        </Component>
    );
}
