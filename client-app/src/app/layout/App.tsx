import React, { Fragment, useContext, useEffect } from 'react';
import { Container } from 'semantic-ui-react';

import { observer } from 'mobx-react-lite';
import {
  Route,
  withRouter,
  RouteComponentProps,
  Switch
} from 'react-router-dom';

import {ToastContainer} from 'react-toastify';
import NavBar from '../../features/nav/NavBar';
import HomePage from '../../features/home/HomePage';


const App: React.FC<RouteComponentProps> = ({ location }) => {
  // const rootStore = useContext(RootStoreContext);
  // const {setAppLoaded, token, appLoaded} = rootStore.commonStore;
  // const {getUser} = rootStore.userStore;

  // useEffect(() => {
  //   if (token) {
  //     getUser().finally(() => setAppLoaded())
  //   } else {
  //     setAppLoaded()
  //   }
  // }, [getUser, setAppLoaded, token])

  // if (!appLoaded) return <LoadingComponent content='Loading app...'/>

  return (
    <Fragment>
      {/* <ModalContainer /> */}
      <ToastContainer position='bottom-right' />
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <Fragment>
            <NavBar />
            <Container style={{ marginTop: '7em' }}>
              <Switch>
                {/* <Route exact path='/activities' component={<NavBar />} /> */}
                {/* 
                <Route path='/activities/:id' component={ActivityDetails} />
                <Route
                  key={location.key}
                  path={['/createActivity', '/manage/:id']}
                  component={ActivityForm}
                />
                <Route path='/profile/:username' component={ProfilePage} />
                <Route component={NotFound} /> */}
              </Switch>
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default withRouter(observer(App));