import React from 'react';
import * as yup from 'yup';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import formStructure from './structure';
import FormComponent from './Form';
import './form.scss';

export default {
    title: 'Components/Form',
    component: FormComponent
} as ComponentMeta<typeof FormComponent>;

const Template: ComponentStory<typeof FormComponent> = (args) => <FormComponent {...args} />;
const schema = yup.object().shape({
    // approval_level: yup.string().required('Approval level is required').nullable(),
    // reason_for_extension: yup.string().test({
    //     name: 'reason_for_extension',
    //     message: 'Reason for Time Extension is required',
    //     test: (value) => value !== null
    // }).nullable(),
    // approved_by: yup.string().nullable(),
    // designation: yup.string().nullable(),
    // date_approved: yup.string(),
    // duration: yup.number(),
    // additional_duration: yup.number().typeError('Invalid number'),
    // status: yup.string().test({
    //     name: 'status',
    //     message: 'Status is required',
    //     test: (value) => value !== null
    // }).nullable(),
    // with_suspension_order: yup.string()
});

export const Form = Template.bind({});
Form.args = {
    structure: formStructure,
    schema
};
