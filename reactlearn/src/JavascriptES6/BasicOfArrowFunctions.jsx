import React from 'react';

export default function BasicOfArrowFunctions() {
    // Arrow function syntax
    const arrowFunctionExample = () => {
        return "I'm an example of an arrow function in ES6!";
    }

    return (
        <>
            <h1>This is an Introduction to Arrow Functions in JavaScript ES6</h1>
            <p>{arrowFunctionExample()}</p>
            <h2>Key Features of Arrow Functions:</h2>
            <ul>
                <li>Shorter syntax compared to traditional functions.</li>
                <li>Does not bind its own `this`, which is useful for avoiding common pitfalls with `this` in methods.</li>
                <li>Cannot be used as constructors (i.e., cannot use the `new` keyword).</li>
                <li>Do not have their own `arguments` object.</li>
            </ul>
        </>
    );
}
