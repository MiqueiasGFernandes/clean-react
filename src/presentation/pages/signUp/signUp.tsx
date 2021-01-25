import Context from '@/presentation/context/form/form-context';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import FormStatus from '../../components/form-status/form-status';
import Input from '../../components/input/input';
import Header from '../../components/login-header/login-header';
import Styles from './signup-styles.scss';

const SignUp: React.FC = () => (
  <div className={Styles.signUp}>
    <Header />
    <Context.Provider value={{ state: {} }}>
      <form className={Styles.form}>
        <h2>Cirar Conta</h2>
        <Input type="text" name="name" placeholder="Digite seu nome" />
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
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
        >
          Entrar
        </button>
        <Link to="/login" className={Styles.link}>Voltar para Login</Link>
        <FormStatus />
      </form>
    </Context.Provider>
    <Footer />
  </div>
);

export default SignUp;
