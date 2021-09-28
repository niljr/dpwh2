import * as React from 'react';
import { Modal as BootstrapModal } from 'react-bootstrap';
import Button from '../Button/Button';
import './modal.scss';

type Props = {
    className?: string,
    title?: string,
    children?: JSX.Element | string,
    onToggle: Function,
    isDemo?: boolean,
    isShow: boolean,
    footer?: JSX.Element | string
}

export default function Modal({ className = '', title, children, onToggle, footer, isDemo, isShow }: Props): JSX.Element {
    const [show, setShow] = React.useState(isShow);

    const handleClose = () => {
        onToggle && onToggle();

        setShow(!show);
    };

    return (
        <React.Fragment>
            {isDemo && <Button label='Show modal' onClick={handleClose}/>}

            <BootstrapModal show={isDemo ? show : isShow} centered={true} onHide={handleClose}>
                {title && (
                    <BootstrapModal.Header closeButton={true}>
                        <BootstrapModal.Title>{title}</BootstrapModal.Title>
                    </BootstrapModal.Header>
                )}

                <BootstrapModal.Body>
                    {children}
                </BootstrapModal.Body>

                {footer && (
                    <BootstrapModal.Footer>
                        {footer}
                    </BootstrapModal.Footer>
                )}
            </BootstrapModal>
        </React.Fragment>
    );
}
