import React, { useState, memo } from 'react';

// A simple functional component that displays a message
const Message = memo(({ text }) => {
  console.log('Rendering Message component');
  return <div>{text}</div>;
});

const BasicMemo = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Hello, World!');

  return (
    <div>
      <Message text={message} />
      <button onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>
      <button onClick={() => setMessage('New Message!')}>
        Change Message
      </button>
    </div>
  );
};

export default BasicMemo;
