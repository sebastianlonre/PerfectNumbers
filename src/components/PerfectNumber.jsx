import React from 'react';

export const PerfectNumber = ({ minRange, maxRange }) => {

    const IsPerfectNumber =( number )=>{

        let sum = 1;

        for (let i = 2; i * i <= number; i++) {

            if (number % i === 0) {

                sum += i;

                if (i * i !== number) {
                    sum += number / i;
                }

            }
        }

        return sum === number && number !== 1;
    }

    const findPerfectNumbers = ( minRange, maxRange ) => {

        let arrayPerfectNumbers = [];
        
        for (let i=minRange; i<=maxRange; i++){
            if (IsPerfectNumber(i)){
                arrayPerfectNumbers.push(i);
            }
        }

        return arrayPerfectNumbers;

    }

    const perfectNumbers = findPerfectNumbers(minRange,maxRange);

  return (
    <>
        <ul>
            {perfectNumbers.map((num)=>(
                <li key={num}>{num}</li>
            ))}
        </ul>
    </>
  );
};
