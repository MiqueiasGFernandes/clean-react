import { makeRemoteAuthentication } from '@/main/usecases/authentication/remote-authentication-factory';
import { Login } from '@/presentation/pages';
import React from 'react';
import { makeLoginValidation } from './login-validation-factory';

export const makeLogin: React.FC = () => (
  <Login
    authentication={makeRemoteAuthentication()}
    validation={makeLoginValidation()}
  />
);
