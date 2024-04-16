import React, { useState, useEffect } from 'react';

export const PerfectNumber = ({ minRange, maxRange }) => {

    const [perfectNumbers, setPerfectNumbers] = useState([]);

    const IsPerfectNumber =( number )=>{
    
        let sum = 1;

        for (let i = 2; i <= Math.sqrt(number); i++) {

            if (number % i === 0) {
                sum += i;
                if (i !== Math.sqrt(number)) {
                    sum += number / i;
                }
            }
    }

        return sum === number;
    }

    useEffect(() => {

      const findPerfectNumbers = (minRange, maxRange) => {
          if (minRange < 2) minRange = 2;
          if (minRange > 6 && minRange < 28) minRange = 28;
          if (minRange % 2 !== 0) minRange++;

          let arrayPerfectNumbers = [];

          for (let i = minRange; i <= maxRange; i += 2) {
              if (IsPerfectNumber(i)) {
                  arrayPerfectNumbers.push(i);
              }
          }
          setPerfectNumbers(arrayPerfectNumbers);
      };

      findPerfectNumbers(minRange, maxRange);
  }, [minRange, maxRange]);

  return (
    <>
         {perfectNumbers.length > 0 && (
        <div>
          <h3>Numeros perfectos encontrados</h3>
          <ul>
            {perfectNumbers.map((number) => (
              <li key={number}>{number}</li>
            ))}
          </ul>
        </div>
      )}
       {perfectNumbers.length === 0 && (
        <div>
          <h3>En el rango no hay numeros perfectos</h3>
        </div>
      )}
    </>
  );
};
