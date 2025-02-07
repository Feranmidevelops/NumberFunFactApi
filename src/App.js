
import React, { useState } from 'react';
import { getNumberProperties } from './NumberService';
import { isPrime, isPerfect, isArmstrong, isOdd, digitSum } from './NumberUtils';

function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!number || isNaN(number)) {
      setError(true);
      return;
    }
    const num = parseInt(number, 10);
    const properties = [];
    if (isArmstrong(num)) properties.push('armstrong');
    if (isOdd(num)) properties.push('odd'); else properties.push('even');
    const funFactData = await getNumberProperties(num);
    setResult({
      number: num,
      is_prime: isPrime(num),
      is_perfect: isPerfect(num),
      properties,
      digit_sum: digitSum(num),
      fun_fact: funFactData.text,
    });
    setError(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a number"
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p>Please enter a valid number.</p>}
      {result && (
        <div>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;