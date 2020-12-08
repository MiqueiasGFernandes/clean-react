import React from "react";
import Styles from './input-styles.scss';

type Props = {
  type: string,
  name: string,
  placeholder: string,
}

const Input: React.FC<Props> = (props: Props) => {
  return (
    <div className={Styles.inputWrap}>
      <input type={props.type} name={props.name} placeholder={props.placeholder} />
      <span className={Styles.status}>🔴</span>
    </div>
  );
};

export default Input;
