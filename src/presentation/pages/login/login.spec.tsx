import {
  cleanup, fireEvent, render,
  RenderResult,
} from '@testing-library/react';
import React from 'react';
import ValidationStub from '@/presentation/test/mock-validation';
import faker from 'faker';
import Login from './login';

type SutTypes = {
  sut: RenderResult;
  validationSpy: ValidationStub;
};

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationStub();
  validationSpy.errorMessage = faker.random.words();
  const sut = render(<Login validation={validationSpy} />);
  return {
    sut,
    validationSpy,
  };
};

describe('Login Component', () => {
  afterEach(cleanup);
  test('Should start with initial state', () => {
    const { sut, validationSpy } = makeSut();
    const errorWrap = sut.getByTestId('error-wrap');
    expect(errorWrap.childElementCount).toBe(0);
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement;
    expect(submitButton.disabled).toBe(true);
    const emailStatus = sut.getByTestId('email-status');
    expect(emailStatus.title).toBe(validationSpy.errorMessage);
    expect(emailStatus.textContent).toBe('🔴');
    const passwordStatus = sut.getByTestId('password-status');
    expect(passwordStatus.title).toBe(validationSpy.errorMessage);
    expect(passwordStatus.textContent).toBe('🔴');
  });

  test('Should show email error if Validation fails', () => {
    const { sut, validationSpy } = makeSut();
    const errorMessage = faker.random.words();
    validationSpy.errorMessage = errorMessage;
    const emailInput = sut.getByTestId('email');
    fireEvent.input(emailInput, { target: { value: faker.internet.email() } });
    const emailStatus = sut.getByTestId('email-status');
    expect(emailStatus.title).toBe(errorMessage);
    expect(emailStatus.textContent).toBe('🔴');
  });
  test('Should show password error if Validation fails', () => {
    const { sut, validationSpy } = makeSut();
    const errorMessage = faker.random.words();
    validationSpy.errorMessage = errorMessage;
    const passwordInput = sut.getByTestId('password');
    fireEvent.input(passwordInput, { target: { value: faker.internet.password() } });
    const passwordStatus = sut.getByTestId('password-status');
    expect(passwordStatus.title).toBe(errorMessage);
    expect(passwordStatus.textContent).toBe('🔴');
  });
});
