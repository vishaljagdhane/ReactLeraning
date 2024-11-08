import React, { useContext } from 'react';
import { DataContext } from '../useContext/DataProviderComman';

export default function BasicProps() {
  const {username ,setUserName} =useContext(DataContext)
  return (
    <>
    <h1> this is use by ccommn context throw geeting  {username}</h1>
    <button onClick={()=>setUserName('Jagdhane')}>Change Values</button>
      <h1>What are Props?</h1>
      <p>
        Props (short for "properties") are a mechanism in React for passing data from one component to another. They are used to customize a component's behavior and render different content.
      </p>
      <h2>Why Use Props?</h2>
      <ul>
        <li>
          <strong>Data Flow:</strong> Props enable a unidirectional data flow in React, meaning data can only flow from parent to child components.
        </li>
        <li>
          <strong>Reusability:</strong> By using props, you can create reusable components that can accept different values and render accordingly.
        </li>
        <li>
          <strong>Customization:</strong> Props allow you to customize components dynamically. You can change the appearance or behavior based on the values passed.
        </li>
        <li>
          <strong>Separation of Concerns:</strong> Props help in separating component logic from presentation, making your components easier to manage and maintain.
        </li>
      </ul>
      <h2>Example of Using Props</h2>
      <p>
        Here's a simple example of a component that uses props:
      </p>
      <CodeSnippet />
    </>
  );
}

function CodeSnippet() {
  return (
    <pre>
      {`function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}

<Greeting name="Alice" /> // Output: Hello, Alice!`}
    </pre>
  );
}
