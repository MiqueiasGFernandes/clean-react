import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from '@/presentation/pages/login/login';

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route to="/" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Router;
