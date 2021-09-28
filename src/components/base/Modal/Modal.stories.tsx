import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ModalComponent from './Modal';

export default {
    title: 'Components/Modal',
    component: ModalComponent
} as ComponentMeta<typeof ModalComponent>;

const Template: ComponentStory<typeof ModalComponent> = (args) => <ModalComponent {...args} />;

export const Modal = Template.bind({});
Modal.args = {
    isDemo: true,
    title: 'Sample modal',
    children: 'Content'
};
