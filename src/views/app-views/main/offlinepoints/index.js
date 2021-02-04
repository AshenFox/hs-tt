import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Apps = ({ match }) => (
  <Suspense fallback={<Loading cover='content' />}>
    <Switch>
      <Route
        path={`${match.url}/addresses`}
        component={lazy(() => import(`./addresses`))}
      />
      <Route
        path={`${match.url}/geozones`}
        component={lazy(() => import(`./geozones`))}
      />
      <Redirect from={`${match.url}`} to={`${match.url}/addresses`} />
    </Switch>
  </Suspense>
);

export default Apps;
