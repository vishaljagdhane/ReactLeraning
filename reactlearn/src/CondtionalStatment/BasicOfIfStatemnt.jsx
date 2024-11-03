import React, { useState } from 'react';
import Ternary_OpreatorUsing from './Ternary_OpreatorUsing';

export default function BasicOfIfStatemnt() {
  const [checkfun, setCheckfun] = useState('');

  const BasicCheck = () => {
    return <div>This Call Check 1</div>; // Return JSX
  };

  const BasicCheck1 = () => {
    return <div>This Call Check 2</div>; // Return JSX
  };

  return (
    <>
      <h1>Basic Of If Statement</h1> 
      {checkfun ? BasicCheck() : BasicCheck1()}
      {/* Button to toggle the checkfun state for demonstration */}
      <button onClick={() => setCheckfun(prev => prev ? '' : 'true')}>Toggle Check</button>
      <Ternary_OpreatorUsing/>
    </>
  );
}
