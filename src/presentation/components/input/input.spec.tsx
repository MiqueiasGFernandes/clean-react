import Context from '@/presentation/context/form/form-context';
import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import Input from './input';

const makeSut = (): RenderResult => render(
  <Context.Provider value={{ state: {} }}>
    <Input name="field" />
  </Context.Provider>,
);

describe('Input Component', () => {
  test('Should begin with readOnly', () => {
    const sut = makeSut();
    const input = sut.getByTestId('field') as HTMLInputElement;
    expect(input.readOnly).toBe(true);
  });
});
