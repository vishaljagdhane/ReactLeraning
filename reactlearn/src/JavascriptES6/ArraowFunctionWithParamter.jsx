import React from 'react';

export default function ArrowFunctionWithParameter() {
    // Arrow function with parameters
    const greet = (name) => {
        return `Hello, ${name}!`;
    };

    const arrworTyr =(values ,data)=>{
        const sum =values *data
  return sum;

    }
    const check =arrworTyr(10,20)
    const check1 =arrworTyr(5,20)
    // Example usage of the arrow function
    const greetingMessage = greet('Vishal Jagdhane');

    return (
        <div>
            <h1>Arrow Function with Parameter Example</h1>
            <p>{greetingMessage}</p>
            <p>{check}</p>
            <p>{check1}</p>
        </div>
    );
}
