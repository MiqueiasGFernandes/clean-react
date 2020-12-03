import React, { memo } from 'react';
import { Images } from '../../constants/images-base64';
import Styles from './login-header-styles.scss';

const Header: React.FC = () => {
  return (
    <header className={Styles.header}>
    <img src={Images.LOGO} alt="" />
    <h1>4Dev - Enquetes para Programadores</h1>
  </header>
  );
};

export default memo(Header);