import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Apps = ({ match }) => (
  <Suspense fallback={<Loading cover='content' />}>
    <Switch>
      <Route path={`${match.url}/banners`} component={lazy(() => import(`./banners`))} />
      <Route path={`${match.url}/catalog`} component={lazy(() => import(`./catalog`))} />
      <Route path={`${match.url}/clients`} component={lazy(() => import(`./clients`))} />
      <Route
        path={`${match.url}/dashboard`}
        component={lazy(() => import(`./dashboard`))}
      />
      <Route
        path={`${match.url}/distributions`}
        component={lazy(() => import(`./distributions`))}
      />
      <Route
        path={`${match.url}/offlinepoints`}
        component={lazy(() => import(`./offlinepoints`))}
      />
      <Route path={`${match.url}/orders`} component={lazy(() => import(`./orders`))} />
      <Route
        path={`${match.url}/promocodes`}
        component={lazy(() => import(`./promocodes`))}
      />
      <Route path={`${match.url}/staff`} component={lazy(() => import(`./staff`))} />
      <Redirect from={`${match.url}`} to={`${match.url}/clients`} />
    </Switch>
  </Suspense>
);

export default Apps;
