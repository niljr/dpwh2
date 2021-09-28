import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TypographyComponent from './Typography';

export default {
    title: 'Components/Typography',
    component: TypographyComponent
} as ComponentMeta<typeof TypographyComponent>;

const Template: ComponentStory<typeof TypographyComponent> = (args) => <TypographyComponent {...args} />;

export const Typography = Template.bind({});
Typography.args = {
    color: 'dark',
    children: 'The quick brown fox jumps over the lazy dog.'
};
