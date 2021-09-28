// @flow
import * as React from 'react';
import CollapsibleSidebar from './CollapsibleSidebar';
import { usePathname } from 'hooks/usePathname';
import Storage from 'utils/Storage';
import { STORAGE_KEY } from 'config/constants';
import type { Menu } from 'types';

type Props = {
    className?: string,
    children?: any,
    menu?: Array<Menu>
}

export default function CollapsibleSidebarContainer(props: Props): JSX.Element {
    const pathName = usePathname();

    const [isOpen, setToggleOpen] = React.useState(true);

    const handleToggleSidebar = () => {
        const updateState = !isOpen;

        setToggleOpen(updateState);
        Storage.setItem(STORAGE_KEY.SIDEBAR_STATE, JSON.stringify(updateState));
    };

    return (
        <CollapsibleSidebar
            {...props}
            pathName={pathName}
            handleToggleSidebar={handleToggleSidebar}
            isOpen={isOpen} />
    );
}
