import React from 'react';

export const PerfectNumber = ({ minRange, maxRange }) => {

    const sum=minRange+maxRange

  return (
    <>
        <h1>Valor mínimo: {minRange}</h1>
        <h1>Valor máximo: {maxRange}</h1>
    </>
  );
};
