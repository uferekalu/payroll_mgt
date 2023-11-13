import React from 'react';

interface IInput {
  type: string;
  placeholder?: string;
  classname: string;
  onFocus?: () => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<IInput> = ({
  type,
  placeholder,
  classname,
  onFocus,
  onBlur,
  checked,
  value,
  onChange
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classname}
      onFocus={onFocus}
      onBlur={onBlur}
      checked={checked}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
