import React, { useEffect, useState } from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
// import { useAppSelector, useAppDispatch } from 'redux/hooks';
import Spinner from 'components/base/Spinner';
import Typography from 'components/base/Typography';

// TODO uncomment to setup checking authentication
// import Storage from 'utils/Storage';
// import { isTokenValid } from 'utils/Auth';
// import { STORAGE_KEY } from 'config/constants';
// import { updateUserToken, authUser } from 'redux/modules/authentication';
import './app-loading.scss';

type Props = {
    children: any
}

export default function AppLoading({
    children,
    ...props
}: Props): JSX.Element {
    // const dispatch = useAppDispatch();
    const location = useLocation();
    const history = useHistory();
    const { pathname } = location;

    // const { isAuthed } = useAppSelector(({ authentication }) => authentication);

    const [isAppReady, setAppReady] = useState(false);
    const [isErrorLoaded, setErrorLoaded] = useState(false);

    useEffect(() => {
        checkAuth();
    }, []);

    useEffect(() => {
        if (pathname === '/') {
            history.replace('/login');
        }
    }, [pathname]);

    const checkAuth = async () => {
        try {
            // TODO uncomment to setup checking authentication
            // const shouldLoggout = /\/login|\/sign-up|\/forgot-password/.test(location.pathname); // Add other unauthenticated routes here
            // const accessToken = Storage.getItem(STORAGE_KEY.ACCESS_TOKEN);
            // let token: Object = shouldLoggout ? null : accessToken ? JSON.parse(accessToken) : null;

            // // TODO: set right values
            // if (!token || (token && token.expiry && isTokenValid(token.expiry)) || !token.expiry) {
            //     let data = null;

            //     if ((token && token.refresh_token)) {
            //         data = await getRefreshToken(token.refresh_token);
            //     } else {
            //         data = await getAccessToken();
            //     }

            //     token = {
            //         ...data,
            //         expiry: moment().add(data.expires_in, 'seconds')
            //     };

            //     token = {
            //         accessToken: 'this-is-an-accesstoken'
            //     };
            // }

            // dispatch(updateUserToken(token));
            // Storage.setItem(STORAGE_KEY.ACCESS_TOKEN, JSON.stringify(token));

            // if ((token && token.refresh_token)) {
            //     // const profile = await getProfileData();

            //     dispatch(authUser({
            //         // TODO: uncomment this
            //         // profile
            //     }));
            // }

            setAppReady(true);
        } catch (err) {
            setAppReady(true);
            setErrorLoaded(true);
        }
    };

    if (isAppReady) {
        return isErrorLoaded
            ? <div className='app-loading__error'>
                <Typography size={20}>Oops! An Error Occurred!</Typography>
                <Typography>Please try reloading the page or you can go to the <Link to='/'>homepage</Link>.</Typography>
            </div>
            : children;
    }

    return (
        <div className='loading-container text-center'>
            <Spinner useDefaultColor={true} />
        </div>
    );
}
