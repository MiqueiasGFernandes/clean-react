import React, { useState } from "react";
import Styles from "./login-styles.scss";
import FormStatus from "../../components/form-status/form-status";
import Header from "../../components/login-header/login-header";
import Footer from "../../components/footer/footer";
const Login: React.FC = () => {
  const [isLoading] = useState(false); 
  

  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form} action="">
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <input type="email" name="email" placeholder="Digite seu e-mail" />
          <span className={Styles.status}>🔴</span>
        </div>
        <div className={Styles.inputWrap}>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <span className={Styles.status}>🔴</span>
        </div>
        <button className={Styles.submit} type="submit">
          Entrar
        </button>
        <span className={Styles.link}>Criar conta</span>
        <FormStatus />
      </form>
      <Footer />
    </div>
  );
};

export default Login;
