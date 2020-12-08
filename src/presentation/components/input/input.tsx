import React, { useContext } from 'react';
import Context from '@/presentation/context/form/form-context';
import Styles from './input-styles.scss';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input: React.FC<Props> = (props: Props) => {
  const { name, type, placeholder } = props;
  const { errorState } = useContext(Context);
  const error = errorState[name];

  const getStatus = (): string => '🔴';

  const getTitle = (): string => error;

  return (
    <div className={Styles.inputWrap}>
      <input type={type} name={name} placeholder={placeholder} />
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
