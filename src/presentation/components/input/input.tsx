import React, { useContext } from 'react';
import Context from '@/presentation/context/form/form-context';
import Styles from './input-styles.scss';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input: React.FC<Props> = (props: Props) => {
  const { name, type, placeholder } = props;
  const { state, setState } = useContext(Context);
  const error = state[`${name}Error`];

  const getStatus = (): string => (error ? '🔴' : '🟢');

  const getTitle = (): string => error || 'Tudo certo!';

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={Styles.inputWrap}>
      <input
        readOnly
        data-testid={name}
        onChange={handleChange}
        type={type}
        name={name}
        placeholder={placeholder}
      />
      <span
        data-testid={`${name}-status`}
        title={getTitle()}
        className={Styles.status}
      >
        {getStatus()}
      </span>
    </div>
  );
};

export default Input;
