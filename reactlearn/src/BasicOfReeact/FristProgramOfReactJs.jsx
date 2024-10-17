import React from 'react';

export default function FirstProgramOfReactJs() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>
        React is a popular JavaScript library for building user interfaces,
        particularly for single-page applications where you can create dynamic
        and interactive web applications.
      </p>
      <h2>Key Features of React:</h2>
      <ul>
        <li>
          <strong>Component-Based:</strong> React allows you to build encapsulated
          components that manage their own state, making your code more modular
          and reusable.
        </li>
        <li>
          <strong>Declarative:</strong> React makes it easy to create interactive UIs
          by allowing you to design simple views for each state of your application.
        </li>
        <li>
          <strong>Virtual DOM:</strong> React uses a virtual representation of the
          DOM, which optimizes rendering and improves application performance.
        </li>
        <li>
          <strong>Unidirectional Data Flow:</strong> Data flows in a single direction,
          making it easier to understand and debug your application.
        </li>
      </ul>
      <h2>Getting Started:</h2>
      <p>
        To start building applications with React, you can use tools like
        <code>Create React App</code>, which sets up everything you need to get started
        quickly.
      </p>
    </div>
  );
}
