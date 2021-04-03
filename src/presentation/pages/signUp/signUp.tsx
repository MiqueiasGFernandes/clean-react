import { AddAccount } from '@/domain/usecases';
import Context from '@/presentation/context/form/form-context';
import Validation from '@/presentation/protocols/validation';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer/footer';
import FormStatus from '../../components/form-status/form-status';
import Input from '../../components/input/input';
import Header from '../../components/login-header/login-header';
import Styles from './signup-styles.scss';

type Props = {
  validation: Validation
  addAccount: AddAccount
}

const SignUp: React.FC<Props> = ({ validation, addAccount }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    nameError: 'Campo obrigatório',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    passwordConfirmationError: 'Campo obrigatório',
    mainError: '',
  });

  useEffect(() => {
    setState({
      ...state,
      nameError: validation.validate('name', state.name),
      passwordError: validation.validate('password', state.password),
      passwordConfirmationError: validation.validate('passwordConfirmation', state.passwordConfirmation),
      emailError: validation.validate('email', state.email),
    });
  }, [state.name, state.email]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      state.isLoading
      || state.nameError
      || state.emailError
      || state.passwordError
      || state.passwordConfirmationError
    ) {
      return;
    }
    setState({ ...state, isLoading: true });
    await addAccount.add({
      name: state.name,
      email: state.email,
      password: state.password,
      passwordConfirmation: state.passwordConfirmation,
    })
  }

  return (
    <div className={Styles.signUp}>
      <Header />
      <Context.Provider value={{ state, setState }}>
        <form
          data-testid="form"
          className={Styles.form}
          onSubmit={handleSubmit}
        >
          <h2>Cirar Conta</h2>
          <Input
            type="text"
            name="name"
            placeholder="Digite seu nome"
          />
          <Input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
          />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <Input
            type="password"
            name="passwordConfirmation"
            placeholder="Confirme sua senha"
          />
          <button
            className={Styles.submit}
            type="submit"
            data-testid="submit"
            disabled={
              !!state.nameError
              || !!state.emailError
              || !!state.passwordError
              || !!state.passwordError
            }
          >
            Entrar
          </button>
          <span className={Styles.link}>Voltar para Login</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
};

export default SignUp;
