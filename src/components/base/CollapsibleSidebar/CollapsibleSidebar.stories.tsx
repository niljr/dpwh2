import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MdDashboard, MdStar, MdSettings } from 'react-icons/md';
import CollapsibleSidebarComponent from './CollapsibleSidebarContainer';

export default {
    title: 'Components/Collapsible Sidebar',
    component: CollapsibleSidebarComponent
} as ComponentMeta<typeof CollapsibleSidebarComponent>;

const Template: ComponentStory<typeof CollapsibleSidebarComponent> = (args) => <CollapsibleSidebarComponent {...args} />;

export const CollapsibleSidebar = Template.bind({});
CollapsibleSidebar.args = {
    menu: [{
        label: 'Dashboard',
        onClick: () => {},
        icon: MdDashboard,
        key: 'dashboard'
    }, {
        label: 'Charts',
        onClick: () => {},
        icon: MdStar,
        key: 'charts'
    }, {
        label: 'Settings',
        icon: MdSettings,
        key: 'settings',
        subMenu: [{
            label: 'One',
            key: 'one'
        }, {
            label: 'Two',
            key: 'two'
        }, {
            label: 'Three',
            key: 'three'
        }]
    }]
};
