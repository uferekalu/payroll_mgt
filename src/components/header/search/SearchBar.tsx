import React from 'react';
import classes from '../Header.module.scss';
import searchIcon from '../../../images/searchicon.png';

interface ISearch {}

const SearchBar: React.FC<ISearch> = () => {
  return (
    <div className={classes.header__searchbar}>
      <input
        type="text"
        placeholder="Search for anything..."
        className={classes.header__searchbar__input}
      />
      <div className={classes.header__searchbar__iconholder}>
        <img
          src={searchIcon}
          className={classes.header__searchbar__img}
          alt="search"
        />
      </div>
    </div>
  );
};

export default SearchBar;
