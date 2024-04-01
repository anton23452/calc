import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState('');

  const calculateResult = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult('Invalid input');
      return;
    }

    let calculatedResult;

    switch (operation) {
      case '+':
        calculatedResult = number1 + number2;
        break;
      case '-':
        calculatedResult = number1 - number2;
        break;
      case '*':
        calculatedResult = number1 * number2;
        break;
      case '/':
        calculatedResult = number1 / number2;
        break;
      default:
        calculatedResult = 'Invalid operation';
    }

    setResult(calculatedResult);
  };

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={calculateResult}>=</button>
      <div>Result: {result}</div>
    </div>
  );
}

export default Calculator;
