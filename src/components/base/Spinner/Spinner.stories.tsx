import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SpinnerComponent from './Spinner';

export default {
    title: 'Components/Spinner',
    component: SpinnerComponent,
    argTypes: {
        className: {
            type: { required: false }
        },
        color: {
            description: 'useDefaultColor should be false in order for this to effect',
            control: { type: 'color' },
            type: { required: false }
        },
        size: {
            defaultValue: 50,
            control: { type: 'number' },
            type: { required: false }
        },
        useDefaultColor: {
            defaultValue: false,
            control: { type: 'boolean' },
            type: { required: false }
        }
    }
} as ComponentMeta<typeof SpinnerComponent>;

const Template: ComponentStory<typeof SpinnerComponent> = (args) => <SpinnerComponent {...args} />;

export const Spinner = Template.bind({});
Spinner.args = {
    color: '#37A187'
};
