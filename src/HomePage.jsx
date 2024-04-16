import React, { useState } from 'react'
import { PerfectNumber } from './components/PerfectNumber';

export const HomePage = () => {

  const [minRange, setMinRange] = useState(() => {

    const savedMinRange = localStorage.getItem('minRange');
    return savedMinRange ? parseInt(savedMinRange, 10) : 6;

  });

  const [maxRange, setMaxRange] = useState(() => {

    const savedMaxRange = localStorage.getItem('maxRange');
    return savedMaxRange ? parseInt(savedMaxRange, 10) : 500;

  });

  const handleMinRangeChange = (e) => {
    const newValue = parseInt(e.target.value);
    setMinRange(newValue);
    localStorage.setItem('minRange', newValue);
  };

  const handleMaxRangeChange = (e) => {
    const newValue = parseInt(e.target.value);
    setMaxRange(newValue);
    localStorage.setItem('maxRange', newValue);
  };

  return (
    <>
      <div>

        <input
          type="number"
          value={minRange}
          onChange={handleMinRangeChange}
        />

        <input
          type="number"
          value={maxRange}
          onChange={handleMaxRangeChange}
        />

        <button>Encuentra numeros perfectos</button>

        <PerfectNumber minRange={minRange} maxRange={maxRange}/>

      </div>
    </>
  )
}
