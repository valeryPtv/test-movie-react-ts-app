// Core
import React, { FC } from 'react';

type StartIconPropsType = {
  isFilled?: boolean,
  handleClick: () => void
}

export const StarIcon: FC<StartIconPropsType> = ({ isFilled = false, handleClick }) => (
  <svg
    className = 'cursor-pointer'
    fill = { isFilled ? '#333' : 'none' }
    height = '24'
    stroke = '#333'
    viewBox = '0 0 24 24'
    width = '24'
    xmlns = 'http://www.w3.org/2000/svg'
    onClick = { handleClick }>
    <path d = 'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z'/>
  </svg>
);
