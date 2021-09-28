// @flow
import React from 'react';
import CollapsibleSidebar from 'components/base/CollapsibleSidebar/CollapsibleSidebarContainer';
import Typography from 'components/base/Typography/Typography';
import { Menu } from 'types';
import './dashboard.scss';
import Table from 'components/base/Table';

type Props = {
    dashboardMenu: Array<Menu>,
    isLoading: boolean
}

export default function DashboardScreen({ dashboardMenu }: Props): JSX.Element {
    return (
        <div className='dashboard'>
            <CollapsibleSidebar
                menu={dashboardMenu} />

            <div className='p-3'>
                <Typography size={22}>
                    Dashboard
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique posuere ligula ac facilisis. Ut gravida est nec tincidunt imperdiet. Donec sed venenatis libero. Nam id accumsan lectus. Integer ut lacus dolor. Aliquam consequat risus porta, egestas urna non, posuere nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam laoreet, ante non lacinia sagittis, nibh felis fringilla libero, sit amet fermentum sem nunc non magna. Proin commodo faucibus velit. Praesent volutpat orci in elit blandit, ut molestie nulla venenatis. Sed pharetra aliquam lobortis.
                </Typography>

                <Table
                    isHover={true}
                    headers={[
                        { key: 'vendor_id', label: 'Vendor #' },
                        { key: 'client', label: 'Client' },
                        { key: 'status', label: 'Status' },
                        { key: 'updated_at', label: 'Last Updated' }
                    ]}
                    list={[
                        {
                            vendor_id: '0001',
                            client: 'Comfirm',
                            updated_at: '2020/03/02 11:16 am',
                            status: 'dead'
                        },
                        {
                            vendor_id: '0002',
                            client: 'Musanpoly',
                            updated_at: '2020/09/15 11:13 pm',
                            status: 'dead'
                        },
                        {
                            vendor_id: '0003',
                            client: 'Isoplex',
                            updated_at: '2020/03/15 05:52 pm',
                            status: 'dead'
                        },
                        {
                            vendor_id: '0004',
                            client: 'Prosure',
                            updated_at: '2021/06/12 06:47 am',
                            status: 'sent'
                        },
                        {
                            vendor_id: '0005',
                            client: 'Kaggle',
                            updated_at: '2020/01/28 03:39 pm',
                            status: 'dead'
                        },
                        {
                            vendor_id: '0006',
                            client: 'Sonique',
                            updated_at: '2021/03/30 08:54 pm',
                            status: 'signed'
                        },
                        {
                            vendor_id: '0007',
                            client: 'Zentime',
                            updated_at: '2020/10/10 04:19 am',
                            status: 'live'
                        },
                        {
                            vendor_id: '0008',
                            client: 'Buzzopia',
                            updated_at: '2020/04/16 05:22 pm',
                            status: 'signed'
                        },
                        {
                            vendor_id: '0009',
                            client: 'Ronbert',
                            updated_at: '2020/04/24 09:53 am',
                            status: 'sent'
                        },
                        {
                            vendor_id: '0010',
                            client: 'Ecratic',
                            updated_at: '2020/06/06 06:49 am',
                            status: 'dead'
                        },
                        {
                            vendor_id: '0011',
                            client: 'Providco',
                            updated_at: '2021/06/14 10:40 am',
                            status: 'dead'
                        },
                        {
                            vendor_id: '0012',
                            client: 'Viagrand',
                            updated_at: '2020/06/29 02:33 am',
                            status: 'dead'
                        },
                        {
                            vendor_id: '0013',
                            client: 'Enomen',
                            updated_at: '2021/04/14 07:52 pm',
                            status: 'dead'
                        },
                        {
                            vendor_id: '0014',
                            client: 'Crustatia',
                            updated_at: '2021/03/17 03:57 am',
                            status: 'signed'
                        },
                        {
                            vendor_id: '0015',
                            client: 'Orbean',
                            updated_at: '2020/12/20 03:55 pm',
                            status: 'signed'
                        },
                        {
                            vendor_id: '0016',
                            client: 'Musix',
                            updated_at: '2020/09/16 09:36 pm',
                            status: 'live'
                        },
                        {
                            vendor_id: '0017',
                            client: 'Inventure',
                            updated_at: '2020/05/26 02:09 pm',
                            status: 'live'
                        },
                        {
                            vendor_id: '0018',
                            client: 'Sultraxin',
                            updated_at: '2020/11/02 07:32 am',
                            status: 'live'
                        },
                        {
                            vendor_id: '0019',
                            client: 'Biohab',
                            updated_at: '2020/10/13 04:38 am',
                            status: 'dead'
                        },
                        {
                            vendor_id: '0020',
                            client: 'Amtap',
                            updated_at: '2021/05/06 08:53 am',
                            status: 'live'
                        },
                        {
                            vendor_id: '0021',
                            client: 'Suretech',
                            updated_at: '2020/01/08 03:45 am',
                            status: 'signed'
                        },
                        {
                            vendor_id: '0022',
                            client: 'Enaut',
                            updated_at: '2020/02/05 12:05 am',
                            status: 'live'
                        },
                        {
                            vendor_id: '0023',
                            client: 'Scenty',
                            updated_at: '2020/09/17 12:26 am',
                            status: 'signed'
                        },
                        {
                            vendor_id: '0024',
                            client: 'Ezentia',
                            updated_at: '2020/02/22 02:13 pm',
                            status: 'live'
                        },
                        {
                            vendor_id: '0025',
                            client: 'Vurbo',
                            updated_at: '2020/03/24 08:07 pm',
                            status: 'signed'
                        },
                        {
                            vendor_id: '0026',
                            client: 'Kongene',
                            updated_at: '2021/02/03 12:49 am',
                            status: 'live'
                        },
                        {
                            vendor_id: '0027',
                            client: 'Voratak',
                            updated_at: '2021/06/06 03:36 am',
                            status: 'signed'
                        },
                        {
                            vendor_id: '0028',
                            client: 'Vinch',
                            updated_at: '2020/08/16 07:35 am',
                            status: 'dead'
                        },
                        {
                            vendor_id: '0029',
                            client: 'Multiflex',
                            updated_at: '2020/10/15 03:16 pm',
                            status: 'signed'
                        }
                    ]} />
            </div>
        </div>
    );
}
