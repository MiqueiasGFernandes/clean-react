import Context from '@/presentation/context/form/form-context';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import React from 'react';
import faker from 'faker';
import Input from './input';

const makeSut = (fieldName: string): RenderResult => render(
  <Context.Provider value={{ state: {} }}>
    <Input name={fieldName} />
  </Context.Provider>,
);

describe('Input Component', () => {
  test('Should begin with readOnly', () => {
    const field = faker.database.column();
    const sut = makeSut(field);
    const input = sut.getByTestId(field) as HTMLInputElement;
    expect(input.readOnly).toBe(true);
  });
  test('Should begin with readOnly', () => {
    const field = faker.database.column();
    const sut = makeSut(field);
    const input = sut.getByTestId(field) as HTMLInputElement;
    fireEvent.focus(input);
    expect(input.readOnly).toBe(false);
  });
});
