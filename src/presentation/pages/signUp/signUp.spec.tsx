import {
  cleanup, fireEvent, render, RenderResult, waitFor,
} from '@testing-library/react';
import React from 'react';
import faker from 'faker';
import { AddAccountSpy, Helper, ValidationStub } from '@/presentation/test'
import SignUp from './signUp';

type SutTypes = {
  sut: RenderResult
  addAccountSpy: AddAccountSpy
}

type SutParams = {
  validationError: string
}

const populateField = (sut: RenderResult, fieldName: string, value = faker.random.word()) => {
  const input = sut.getByTestId('email');
  fireEvent.input(input, { target: { value } })
}

const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub();
  validationStub.errorMessage = params?.validationError;
  const addAccountSpy = new AddAccountSpy();
  const sut = render(
    <SignUp
      validation={validationStub}
      addAccount={addAccountSpy}
    />,
  );
  return {
    sut,
    addAccountSpy,
  };
};

const simulteValidSubmit = async (
  sut: RenderResult,
  name = faker.random.words(),
  email = faker.internet.email(),
  password = faker.internet.password(),
  passwordConfirmation = faker.internet.password(),
): Promise<void> => {
  Helper.populateField(sut, 'name', name);
  Helper.populateField(sut, 'email', email);
  Helper.populateField(sut, 'password', password);
  Helper.populateField(sut, 'passwordConfirmation', passwordConfirmation);
  const form = sut.getByTestId('form');
  fireEvent.submit(form);
  await waitFor(() => form);
};

describe('SignUp Component', () => {
  afterEach(cleanup)
  test('Should start with initial state', () => {
    const validationError = faker.random.words();
    const { sut } = makeSut({ validationError });
    Helper.testChildCount(sut, 'error-wrap', 0);
    Helper.testButtonIsDisabled(sut, 'submit', true);
    Helper.testStatusForField(sut, 'name', validationError);
    Helper.testStatusForField(sut, 'email', validationError);
    Helper.testStatusForField(sut, 'password', validationError);
    Helper.testStatusForField(sut, 'passwordConfirmation', validationError);
  });
  test('Should show name error if Validation fails', () => {
    const validationError = faker.random.words();
    const { sut } = makeSut({ validationError });
    populateField(sut, 'name');
    Helper.testStatusForField(sut, 'name', validationError);
  });
  test('Should show email error if Validation fails', () => {
    const validationError = faker.random.words();
    const { sut } = makeSut({ validationError });
    populateField(sut, 'email');
    Helper.testStatusForField(sut, 'email', validationError);
  });
  test('Should show password error if Validation fails', () => {
    const validationError = faker.random.words();
    const { sut } = makeSut({ validationError });
    populateField(sut, 'password');
    Helper.testStatusForField(sut, 'password', validationError);
  });
  test('Should show passwordConfirmation error if Validation fails', () => {
    const validationError = faker.random.words();
    const { sut } = makeSut({ validationError });
    populateField(sut, 'passwordConfirmation');
    Helper.testStatusForField(sut, 'passwordConfirmation', validationError);
  });
  test('Should show name state error if Validation fails', () => {
    const { sut } = makeSut();
    Helper.populateField(sut, 'name');
    Helper.testStatusForField(sut, 'name');
  });

  test('Should show email state error if Validation fails', () => {
    const { sut } = makeSut();
    Helper.populateField(sut, 'email');
    Helper.testStatusForField(sut, 'email');
  });
  test('Should show password state error if Validation fails', () => {
    const { sut } = makeSut();
    Helper.populateField(sut, 'password');
    Helper.testStatusForField(sut, 'password');
  });
  test('Should show passwordConfirmation state error if Validation fails', () => {
    const { sut } = makeSut();
    Helper.populateField(sut, 'passwordConfirmation');
    Helper.testStatusForField(sut, 'passwordConfirmation');
  });
  test('Should enable submit button if form is valid', () => {
    const { sut } = makeSut();
    Helper.populateField(sut, 'name');
    Helper.populateField(sut, 'email');
    Helper.populateField(sut, 'password');
    Helper.populateField(sut, 'passwordConfirmation');
    Helper.testButtonIsDisabled(sut, 'submit', false);
  });
  test('Should show spinner on submit', async () => {
    const { sut } = makeSut();
    await simulteValidSubmit(sut);
    Helper.testElementExists(sut, 'submit');
  });
  test('Should call AddAccount with correct values', async () => {
    const { sut, addAccountSpy } = makeSut();
    const name = faker.internet.email();
    const email = faker.internet.email();
    const password = faker.internet.password();
    await simulteValidSubmit(sut, name, email, password, password);
    expect(addAccountSpy.params).toEqual({
      name,
      email,
      password,
      passwordConfirmation: password,
    });
  });
  test('Should call AddAccount only once', async () => {
    const { sut, addAccountSpy } = makeSut();
    await simulteValidSubmit(sut);
    await simulteValidSubmit(sut);
    expect(addAccountSpy.callsCount).toBe(1);
  });
  test('Should not call AddAccount if form is invalid', async () => {
    const validationError = faker.random.words();
    const { sut, addAccountSpy } = makeSut({ validationError });
    Helper.populateField(sut, 'email');
    fireEvent.submit(sut.getByTestId('form'));
    expect(addAccountSpy.callsCount).toBe(0);
  });
});
