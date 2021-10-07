import React from 'react';
import { Switch, Route } from 'react-router-dom';

/** Util(s) */
import { ROUTE_URLS } from './RouteUrls';

/* Dashboard Page(s) */
import Index from '../pages/index';

/** Other Page(s) */
import NotFound from '../pages/errors/NotFound';

const App = () => {
  return (
    <Switch>
      <Route path={ROUTE_URLS.HOME_PAGE} component={Index} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default App;
