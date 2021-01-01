import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

type Props = {
  makeLogin: React.FC
}

const Router: React.FC<Props> = ({ makeLogin }: Props) => (
  <BrowserRouter>
    <Switch>
      <Route to="/" component={makeLogin} />
    </Switch>
  </BrowserRouter>
);

export default Router;
