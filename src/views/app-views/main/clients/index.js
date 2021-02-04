import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Apps = ({ match }) => (
  <Suspense fallback={<Loading cover='content' />}>
    <Switch>
      <Route
        path={`${match.url}/clientlist`}
        component={lazy(() => import(`./clientlist`))}
      />
      <Route
        path={`${match.url}/clientgroups`}
        component={lazy(() => import(`./clientgroups`))}
      />
      <Redirect from={`${match.url}`} to={`${match.url}/clientlist`} />
    </Switch>
  </Suspense>
);

export default Apps;
