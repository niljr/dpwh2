const form = [
    [
        { label: 'Project Description', name: 'product_description', portion: 6 },
        { label: 'Website', name: 'website', portion: 6 }
    ],
    [
        {
            label: 'Primary sales channel',
            name: 'primary_sales_channel',
            inputType: 'select',
            portion: 6,
            options: [
                { label: 'Amazon', value: 1 }
            ]
        },
        {
            label: 'Primary fulfillment facility',
            name: 'primary_fulfillment_facility',
            inputType: 'select',
            portion: 6,
            options: [
                { label: 'One', value: 1 },
                { label: 'Two', value: 2 },
                { label: 'Three', value: 3 }
            ]
        }
    ],
    [
        {
            label: 'Currency',
            name: 'currency',
            inputType: 'select',
            portion: 2,
            options: [
                { label: 'USD', value: 1 },
                { label: 'EUR', value: 2 },
                { label: 'PHP', value: 3 }
            ]
        },
        { label: 'Cost Per Unit', name: 'cost_per_unit', portion: 4 },
        {
            label: 'Currency',
            name: 'currency',
            inputType: 'select',
            portion: 2,
            options: [
                { label: 'USD', value: 1 },
                { label: 'EUR', value: 2 },
                { label: 'PHP', value: 3 }
            ]
        },
        { label: 'Retail Price Unit', name: 'retail_price_per_unit', portion: 4 }
    ],
    [
        { label: 'Projected monthly sales (units) for this SKU', name: 'projected_monthly_sales', portion: 6 },
        { label: 'Website', name: 'website', portion: 6 }
    ],
    [
        { label: 'Project Description', name: 'product_description', portion: 6 },
        {
            label: 'Sales Seasonality',
            name: 'sales_seasonality',
            inputType: 'select',
            portion: 6,
            options: []
        }
    ],
    [{
        label: 'Selling History',
        name: 'selling_history',
        inputType: 'select',
        portion: 12,
        options: [
            { label: 'Over 24 months', value: 1 }
        ]
    }],
    [{ label: 'How much inventory of this SKU do you have on hand? (units)', name: 'count_on_hand', portion: 12 }],
    [
        { label: 'How many units of this SKU are currently in production or in transit from your supplier?', name: 'count_production', portion: 6 },
        { label: 'Shipping and Freight Per Unit (optional)', name: 'shipping_fee', portion: 6 }
    ],
    [{ label: 'What day is your in-transit inventory expected to arrive at your warehouse?', name: 'expected_day_of_arrival', portion: 12 }],
    [{
        label: 'Is your product sold through any additional sales channel?',
        name: 'additional_channels',
        inputType: 'select',
        portion: 12,
        options: [
            { label: 'Amazon', value: 1 }
        ]
    }],
    [{
        label: 'What is the shelf life of your product?',
        name: 'product_shelf_life',
        inputType: 'select',
        portion: 12,
        options: [
            { label: '18+ months', value: 1 }
        ]
    }],
    [{
        label: 'Does the selling of your product require any licenses or certifications?',
        name: 'licenses_required',
        inputType: 'select',
        portion: 12,
        options: [
            { label: 'Yes', value: 1 },
            { label: 'No', value: 2 }
        ]
    }],
    [{ label: 'Import Duties per unit (optional)', name: 'import_duties', portion: 12 }],
    [{
        label: 'ASIN',
        name: 'asin',
        inputType: 'select',
        portion: 12,
        options: []
    }],
    [{
        label: 'Other Sales Channel',
        name: 'other_sales_channel',
        inputType: 'select',
        portion: 12,
        options: []
    }],
    [{
        label: 'Other Fulfillment/Third Party Facility:',
        name: 'other_fulfillment',
        inputType: 'select',
        portion: 12,
        options: []
    }]
];

export default form;
