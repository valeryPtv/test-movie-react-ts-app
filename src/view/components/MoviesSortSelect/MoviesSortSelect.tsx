// Core
import React, { FC, useCallback } from 'react';

// Styles
import classes from './moviesSortSelectStyles.module.sass';

type MoviesSortSelectPropsType = {
  className?: string,
  setSortIsDescending: (isDescending: boolean) => void
};

export const MoviesSortSelect: FC<MoviesSortSelectPropsType> = ({ className, setSortIsDescending }) => {
  const handleSelectChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const isDescending = event.target.value === 'descending';
    setSortIsDescending(isDescending);
  }, [ setSortIsDescending ]);

  return (
    <div className = { className }>
      <label
        className = 'mb-3'
        htmlFor = 'moviesSortOrderSelect'>
        <p>Sort order by rating</p>
      </label>
      <div className = { classes[ 'select-container' ] }>
        <select
          className = { classes.select }
          id = 'moviesSortOrderSelect'
          onChange = { handleSelectChange }>
          <option value = 'descending'>Descending</option>
          <option value = 'ascending'>Ascending</option>
        </select>
      </div>
    </div>
  );
};

