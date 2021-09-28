import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NavbarComponent from './Navbar';

export default {
    title: 'Components/Navbar',
    component: NavbarComponent
} as ComponentMeta<typeof NavbarComponent>;

const Template: ComponentStory<typeof NavbarComponent> = (args) => <NavbarComponent {...args} />;

export const Navbar = Template.bind({});
Navbar.args = {
    // TODO add args
};
