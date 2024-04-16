import React, { useState } from 'react'
import { PerfectNumber } from './components/PerfectNumber';

export const HomePage = () => {

  //se utiliza local storage para almacenar los datos que ingreso el usuario por ultima vez
  const [minRange, setMinRange] = useState(() => {

    const savedMinRange = localStorage.getItem('minRange');
    //Si no encuentra un valor de rango maximo por defecto coloca 6
    return savedMinRange ? parseInt(savedMinRange, 10) : 6;

  });

  const [maxRange, setMaxRange] = useState(() => {

    const savedMaxRange = localStorage.getItem('maxRange');
    //Si no encuentra un valor de rango maximo por defecto coloca 500
    return savedMaxRange ? parseInt(savedMaxRange, 10) : 500;
  });

  //Actualización de los estados de los input
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
      <div className='div_center'>

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

        <PerfectNumber minRange={minRange} maxRange={maxRange}/>

      </div>
    </>
  )
}
