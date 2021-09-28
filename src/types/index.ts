// Typography
export type TypographySize = 40 | 26 | 24 | 22 | 20 | 18 | 16 | 14 | 12 | 11;
export type Color = 'green' | 'dark' | 'light' | 'error';
export type Weight = 'light' | 'regular' | 'semi-bold' | 'bold';

// Button
export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'danger' | 'light' | 'dark' | 'link' |
    'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-warning' | 'outline-info' | 'outline-danger' | 'outline-light' | 'outline-dark';

// ModalContainer
export type ModalSize = 'sm' | 'md' | 'lg';

// Collapsible sidebar menu
export type Menu = {
    label: string,
    onClick?: () => void,
    icon: any,
    key: string,
    subMenu?: Array<{
        key: string,
        label: string,
        onClick?: () => void
    }>
}

// Form input
export type Input = {
    label: string,
    name: string,
    inputType?: 'text' | 'password' | 'number' | 'datetime' | 'datetime-local' | 'date' | 'month' | 'time' | 'week' | 'email' | 'url' | 'search' | 'tel' | 'color',
    formControl?: 'input' | 'textarea' | 'select' | 'datePicker',
    placeholder?: string,
    portion: number,
    options?: Array<{
        value: string | number,
        label: string
    }>,
    prepend?: string,
    append?: string,
    isReadOnly?: boolean
}
