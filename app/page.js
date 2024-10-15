"use client";
import { useState } from "react";

export default function Home() {
  const [n, setN] = useState(0);
  const [steps, setSteps] = useState([]);
  const [result, setResult] = useState(null);

  const fibonacci = (num) => {
    if (num <= 1) {
      return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
  };

  const handleProcess = () => {
    const stepsArray = [];
    const fib = (num) => {
      if (num <= 1) {
        stepsArray.push(`fibonacci(${num}) = ${num}`);
        return num;
      } else {
        const result = fib(num - 1) + fib(num - 2);
        stepsArray.push(
          `fibonacci(${num}) = fibonacci(${num - 1}) + fibonacci(${num - 2}) = ${result}`
        );
        return result;
      }
    };

    // Clear previous steps and result
    setSteps([]);
    setResult(null);

    // Run the fibonacci function and set the steps
    const finalResult = fib(n);
    setSteps(stepsArray);
    setResult(finalResult);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
      <main className="flex flex-col gap-4 items-center">
        <h1 className="text-2xl font-bold">Fibonacci Calculator</h1>

        <div className="flex flex-col gap-2">
          <label htmlFor="n" className="text-lg">
            Enter a value for N:
          </label>
          <input
            type="number"
            id="n"
            value={n}
            onChange={(e) => setN(Number(e.target.value))}
            className="border rounded px-4 py-2 text-center bg-black text-white"
            placeholder="Enter a number"
          />
        </div>

        {/* Process Button */}
        <button
          onClick={handleProcess}
          className="mt-4 rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-500 text-white hover:bg-blue-600 text-lg h-10 px-6"
        >
          Process
        </button>

        {/* Display the steps */}
        <div className="mt-8 w-full">
          <h2 className="text-xl font-semibold">Steps:</h2>
          <ol className="list-inside list-decimal text-sm text-left mt-4">
            {steps.map((step, index) => (
              <li key={index} className="mb-2">
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* Display the result */}
        {result !== null && (
          <div className="mt-8">
            <h2 className="text-xl font-bold">Result:</h2>
            <p className="text-lg">
              The Fibonacci number at position {n} is: <strong>{result}</strong>
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
