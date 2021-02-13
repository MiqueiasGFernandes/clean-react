/* eslint-disable no-param-reassign */
import React, { useContext } from 'react';
import Context from '@/presentation/context/form/form-context';
import Styles from './input-styles.scss';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type Event = React.FocusEvent<HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { name, type, placeholder } = props;
  const { state, setState } = useContext(Context);
  const error = state[`${name}Error`];

  const getStatus = (): string => (error ? '🔴' : '🟢');

  const getTitle = (): string => error || 'Tudo certo!';

  const title = getTitle();
  const status = getStatus();

  const handleChange = (event: Event): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleFocus = (event: Event): void => {
    event.target.readOnly = false;
  };

  return (
    <div className={Styles.inputWrap}>
      <input
        readOnly
        onFocus={handleFocus}
        data-testid={name}
        onChange={handleChange}
        type={type}
        name={name}
        placeholder={placeholder}
      />
      <span
        data-testid={`${name}-status`}
        title={title}
        className={Styles.status}
      >
        {status}
      </span>
    </div>
  );
};

export default Input;
