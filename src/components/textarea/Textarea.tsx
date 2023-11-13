import React from 'react';

interface ITextarea {
  classname: string;
  rows: number;
  placeholder: string;
}

const Textarea: React.FC<ITextarea> = ({ classname, rows, placeholder }) => {
  return (
    <textarea
      className={classname}
      rows={rows}
      placeholder={placeholder}
    ></textarea>
  );
};

export default Textarea;
