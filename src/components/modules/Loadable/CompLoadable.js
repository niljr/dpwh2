import React from 'react';
import Loadable from '@react-loadable/revised';
import LoadableVisibility from 'react-loadable-visibility/react-loadable';

export default function CompLoadable(opts, useVisibility = true) {
    const LoadableModule = useVisibility ? LoadableVisibility : Loadable;

    return LoadableModule(Object.assign({
        loading: () => <span className='sr-only'>Loading...</span>
    }, opts));
}
