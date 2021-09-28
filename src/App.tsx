import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppLoading from 'components/modules/AppLoading';
import Modal from 'components/base/Modal';
import FlashNotification from 'components/modules/FlashNotification';
import Navbar from 'components/base/Navbar';
import ROUTES from 'routes';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { clearModalContent } from 'redux/modules/modalEvent';

function App() {
    const dispatch = useAppDispatch();
    const { modalContent, onToggle, ...modalEvent } = useAppSelector(({ modalEvent }) => modalEvent);
    const { isAuthed } = useAppSelector(({ authentication }) => authentication);

    const handleCloseModal = () => {
        dispatch(clearModalContent());
        onToggle && onToggle();

        // To show modal, do this something like this:
        // dispatch(setModalContent({
        //     modalContent: <LoginContainer />,
        //     title: 'Login'
        // }));
    };

    return (
        <AppLoading>
            <div id='outer-container'>
                {isAuthed && <Navbar />}
                <Switch>
                    {Object.values(ROUTES).map((route, i) => (
                        route.authedRoute
                            ? <PrivateRoute key={i} {...route} isAuthed={isAuthed} />
                            : <RouteWithSubRoutes key={i} {...route} />
                    ))}
                </Switch>
            </div>

            <FlashNotification/>
            <Modal
                {...modalEvent}
                isShow={!!modalContent}
                onToggle={handleCloseModal}>
                {modalContent}
            </Modal>
        </AppLoading>
    );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes({ component: Component, ...rest }: {component: any}) {
    return (
        <Route
            {...rest}
            render={props => (
                // pass the sub-routes down to keep nesting
                <Component {...props} />
            )} />
    );
}

function PrivateRoute({ component: Component, isAuthed, ...rest }: {component: any, isAuthed: boolean}) {
    return (
        <Route {...rest} render={(routeProps) => (
            isAuthed
                ? <Component {...routeProps} />
                : <Redirect to={{
                    pathname: '/login',
                    state: { from: routeProps.location }
                }}/>
        )}/>
    );
}

export default App;
