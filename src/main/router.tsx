import { SignUp } from '@/presentation/pages';
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

type Props = {
  makeLogin: React.FC<Props>;
}

const Router: React.FC<Props> = ({ makeLogin }: Props) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={makeLogin} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  </BrowserRouter>
);

export default Router;
