import { makeRemoteAuthentication } from '@/main/usecases/authentication/remote-authentication-factory';
import { makeLocalSaveAccessToken } from '@/main/usecases/save-access-token/local-save-access-token-factory';
import { Login } from '@/presentation/pages';
import React from 'react';
import { makeLoginValidation } from './login-validation-factory';

export const makeLogin: React.FC = () => (
  <Login
    saveAccessToken={makeLocalSaveAccessToken()}
    authentication={makeRemoteAuthentication()}
    validation={makeLoginValidation()}
  />
);
