import React, { useState } from 'react';
import Context from '@/presentation/context/form/form-context';
import Styles from './login-styles.scss';
import FormStatus from '../../components/form-status/form-status';
import Header from '../../components/login-header/login-header';
import Footer from '../../components/footer/footer';
import Input from '../../components/input/input';

type StateProps = {
  isLoading: boolean,
  errorMessage: string,
};

const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: '',
  });

  return (
    <div className={Styles.login}>
      <Header />
      <Context.Provider value={state}>
        <form className={Styles.form} action="">
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <button disabled data-testid="submit" className={Styles.submit} type="submit">
            Entrar
          </button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  );
};

export default Login;
