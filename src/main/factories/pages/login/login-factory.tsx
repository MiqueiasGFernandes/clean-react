import React from 'react';
import RemoteAuthentication from '@/data/usecase/authentication/remote-authentication';
import { AxiosHttpClient } from '@/infra/http/axios-http-client/axios-http-client';
import { Login } from '@/presentation/pages';
import ValidationBuilder from '@/validation/validators/builder/validation-builder';
import { ValidationComposite } from '@/validation/validators';

export const makeLogin: React.FC = () => {
  const url = 'http://fordevs.herokuapp.com/api/login';
  const axiosHttpClient = new AxiosHttpClient();
  const remoteAuthentication = new RemoteAuthentication(url, axiosHttpClient);
  const validationComposite = ValidationComposite.build([
    ...ValidationBuilder.field('email').email().required().build(),
    ...ValidationBuilder.field('email').min(6).required().build(),
  ]);

  return (
    <Login
      authentication={remoteAuthentication}
      validation={validationComposite}
    />
  );
};
