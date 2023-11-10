import React from 'react';
import classes from './Main.module.scss';

interface IMain {}

const Main: React.FC<IMain> = () => {
  return <div className={classes.main}>Main</div>;
};

export default Main;
