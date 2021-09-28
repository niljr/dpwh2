import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import Spinner from 'react-bootstrap/Spinner';
import './with-loading.scss';

export default function withLoading(
    Component
) {
    function LoadingComponent(props) {
        if (props.isLoading) {
            return (
                <main>
                    <div className='with-loading text-center'>
                        <Spinner animation='border' role='status' />
                    </div>
                </main>
            );
        }

        return <Component {...props} />;
    }

    LoadingComponent.displayName = `withLoading(${Component.displayName || Component.name})`;

    return hoistNonReactStatic(LoadingComponent, Component);
}
