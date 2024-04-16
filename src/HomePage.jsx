import React, { useState } from 'react'
import { PerfectNumber } from './components/PerfectNumber';

export const HomePage = () => {

  const [minRange, setMinRange] = useState(6);
  const [maxRange, setMaxRange] = useState(500);

  return (
    <>
      <div>

        <input
          type="number"
          value={minRange}
          onChange={(e) => setMinRange(parseInt(e.target.value))}
        />

        <input
          type="number"
          value={maxRange}
          onChange={(e) => setMaxRange(parseInt(e.target.value))}
        />

        <button>Encuentra numeros perfectos</button>

        <PerfectNumber minRange={minRange} maxRange={maxRange}/>

      </div>
    </>
  )
}
