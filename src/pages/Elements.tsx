import React from 'react';
import classes from './Elements.module.scss'
import Sidebar from '../components/sidebar/Sidebar';

interface IElements {}

const Elements: React.FC<IElements> = () => {
  return (
    <div className={classes.elements}>
      <div className={classes.elements__sidebar}>
        <Sidebar />
      </div>
      <div>Main</div>
    </div>
  );
};

export default Elements;
