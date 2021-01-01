import React from 'react';
import ReactDOM from 'react-dom';
import { makeLogin } from './factories/pages/login/login-factory';
import Router from './router';

ReactDOM.render(
  <Router makeLogin={makeLogin} />,
  document.getElementById('main'),
);
