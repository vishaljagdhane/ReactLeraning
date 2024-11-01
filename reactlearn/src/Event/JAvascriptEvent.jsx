import React from 'react';

export default function JavascriptEvent() {
  // Function to handle button click
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <>
      <h1>JavaScript Events</h1>
      <p>
        JavaScript events are actions or occurrences that happen in the browser 
        that the JavaScript code can respond to. Common examples include 
        clicks, mouse movements, key presses, and form submissions.
      </p>
      <h2>Types of Events</h2>
      <ul>
        <li><strong>Mouse Events:</strong> click, dblclick, mouseover, mouseout, etc.</li>
        <li><strong>Keyboard Events:</strong> keydown, keyup, keypress</li>
        <li><strong>Form Events:</strong> submit, change, focus, blur</li>
        <li><strong>Window Events:</strong> load, resize, scroll, unload</li>
      </ul>
      <h2>Basic Example</h2>
      <p>
        Below is an example of a button that triggers a function when clicked:
      </p>
      <button onClick={handleClick}>Click Me!</button>
    </>
  );
}
