import React from 'react';

interface IButton {
  btnClassName: string;
  btnText: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  spanClassName: string
}

const Button: React.FC<IButton> = ({
  btnClassName,
  btnText,
  type,
  spanClassName
}) => {
  return (
    <button type={type} className={btnClassName}>
      {btnText}
      <span className={spanClassName}>+</span>
    </button>
  );
};

export default Button;
