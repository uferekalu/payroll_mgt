import React from 'react';
import classes from './ElementSetupContent.module.scss';

const elementSetupData = ['Elements', 'Balances'];

interface IElementSetup {}

const ElementSetupContent: React.FC<IElementSetup> = () => {
  return (
    <div className={classes.element__setup}>
      {elementSetupData.map((ele, idx) => (
        <span
          key={idx}
          className={
            ele === 'Elements'
              ? `${classes.element__setup__title} ${classes.element__setup__title__extra}`
              : `${classes.element__setup__title}`
          }
        >
          {ele}
        </span>
      ))}
    </div>
  );
};

export default ElementSetupContent;
