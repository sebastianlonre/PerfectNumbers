import React, { useState, useEffect } from 'react';

export const PerfectNumber = ({ minRange, maxRange }) => {

    const [perfectNumbers, setPerfectNumbers] = useState([]);

    //Algortimo para determinar si un numero es perfecto
    const IsPerfectNumber =( number )=>{
    
        let sum = 1;
        //En el ciclo se itera hasta la raíz cuadrada del número
        //Porque en un numero perfecto su raiz siempre sera inferior
        for (let i = 2; i <= Math.sqrt(number); i++) {
            //Se verifica que el valor de la i sea divisor de number
            if (number % i === 0) {

                sum += i;

                // Si i no es la raíz cuadrada de number, agrega
                // el divisor correspondiente de i a la suma.

                if (i !== Math.sqrt(number)) {
                    sum += number / i;
                }
            }
    }

        return sum === number;
    }

    useEffect(() => {
      // Función para encontrar números perfectos dentro del rango dado.
      const findPerfectNumbers = (minRange, maxRange) => {
          // Ajusta el valor mínimo del rango si es menor que 2.
          if (minRange < 2) minRange = 2;
          // Ajusta el valor mínimo del rango si está entre 6 y 28.
          if (minRange > 6 && minRange < 28) minRange = 28;
          // Asegura que el valor mínimo del rango sea par.
          if (minRange % 2 !== 0) minRange++;

          let arrayPerfectNumbers = [];
          //Itera a través del rango de numero solo en valores pares
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
