import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Apps = ({ match }) => (
  <Suspense fallback={<Loading cover='content' />}>
    <Switch>
      <Route
        path={`${match.url}/categories`}
        component={lazy(() => import(`./categories`))}
      />
      <Route
        path={`${match.url}/collections`}
        component={lazy(() => import(`./collections`))}
      />
      <Route path={`${match.url}/combo`} component={lazy(() => import(`./combo`))} />
      <Route path={`${match.url}/goods`} component={lazy(() => import(`./goods`))} />
      <Redirect from={`${match.url}`} to={`${match.url}/goods`} />
    </Switch>
  </Suspense>
);

export default Apps;
