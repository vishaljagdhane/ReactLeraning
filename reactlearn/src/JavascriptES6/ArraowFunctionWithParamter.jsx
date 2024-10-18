import React from 'react';

export default function ArrowFunctionWithParameter() {
    // Arrow function with parameters
    const greet = (name) => {
        return `Hello, ${name}!`;
    };

    // Example usage of the arrow function
    const greetingMessage = greet('Vishal Jagdhane');

    return (
        <div>
            <h1>Arrow Function with Parameter Example</h1>
            <p>{greetingMessage}</p>
        </div>
    );
}
