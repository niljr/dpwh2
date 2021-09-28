import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PaginateComponent from './Paginate';

export default {
    title: 'Components/Paginate',
    component: PaginateComponent
} as ComponentMeta<typeof PaginateComponent>;

const Template: ComponentStory<typeof PaginateComponent> = (args) => <PaginateComponent {...args} />;

export const Paginate = Template.bind({});
Paginate.args = {
    totalPerPage: 10,
    totalItems: 53,
    currentPage: 1
};
