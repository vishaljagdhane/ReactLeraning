import React from 'react';
import BasicExampleUseRef from './BasicExampleUseRef';

export default function BasicInformationOfuseRef() {
  return (
    <>
      <h1>Basic Information about useRef</h1>

      <p>
        <strong>What is <code>useRef</code>?</strong>
      </p>
      <p>
        <strong>English:</strong> 
        <br />
        <code>useRef</code> is a hook in React that allows you to persist values between renders. It can be used to:
        <ul>
          <li>Access DOM elements directly, similar to how you would use <code>document.getElementById</code> in plain JavaScript.</li>
          <li>Store mutable values that do not cause re-renders when changed. It’s useful for keeping track of values across renders without affecting the UI.</li>
        </ul>
      </p>
      
      <p>
        <strong>Marathi:</strong>
        <br />
        <code>useRef</code> हा React चा एक hook आहे जो रेंडर्स दरम्यान values कायम ठेवण्यास मदत करतो. त्याचा उपयोग आपण करु शकतो:
        <ul>
          <li>DOM elements ला थेट access करण्यासाठी, जस की आपण plain JavaScript मध्ये <code>document.getElementById</code> वापरता.</li>
          <li>Mutable values (ज्यामुळे re-renders होत नाहीत) साठवण्यासाठी. याचा उपयोग UI ला प्रभावित न करता values राखण्यासाठी केला जातो.</li>
        </ul>
      </p>

      <p>
        <strong>Why do we use <code>useRef</code>?</strong>
      </p>
      <p>
        <strong>English:</strong>
        <br />
        We use <code>useRef</code> when we want to:
        <ul>
          <li>Access and manipulate DOM elements directly in a React-friendly way.</li>
          <li>Keep values between renders without causing unnecessary re-renders (for example, timers, intervals, or previous state values).</li>
          <li>Store references to elements and manage focus, scroll position, or other DOM-related operations.</li>
        </ul>
      </p>

      <p>
        <strong>Marathi:</strong>
        <br />
        <code>useRef</code> चा वापर आपण जेव्हा करतो:
        <ul>
          <li>React-friendly पद्धतीने DOM elements ला थेट access आणि manipulate करण्यासाठी.</li>
          <li>Renders दरम्यान values राखण्यासाठी जे re-renders आणत नाहीत (उदाहरणार्थ, timers, intervals किंवा पूर्वीच्या state values).</li>
          <li>Elements ची references साठवण्यासाठी आणि focus, scroll position किंवा इतर DOM संबंधित कामे व्यवस्थापित करण्यासाठी.</li>
        </ul>
      </p>

      <p>
        <strong>Benefits of <code>useRef</code> in React:</strong>
      </p>
      <p>
        <strong>English:</strong>
        <br />
        Some key benefits of using <code>useRef</code> include:
        <ul>
          <li>It doesn’t cause re-renders when the value changes, making it efficient for tracking non-UI data.</li>
          <li>It provides a stable reference to DOM elements, making it easy to manipulate them directly without triggering re-renders.</li>
          <li>It can hold mutable values that persist across re-renders, making it useful for scenarios like managing focus or storing the previous value.</li>
        </ul>
      </p>

      <p>
        <strong>Marathi:</strong>
        <br />
        <code>useRef</code> वापरण्याचे काही महत्त्वाचे फायदे:
        <ul>
          <li>जेव्हा value बदलते, तेव्हा ते re-renders उत्पन्न करत नाही, जे non-UI डेटा ट्रॅक करण्यासाठी प्रभावी आहे.</li>
          <li>DOM elements च्या स्थिर references प्रदान करतो, ज्यामुळे त्यांना थेट manipulate करणे सहज होते, आणि त्यासाठी re-render ची आवश्यकता नसते.</li>
          <li>Mutable values ठेवण्यासाठी जे re-renders दरम्यान टिकतात, जे focus व्यवस्थापित करण्यासाठी किंवा मागील value साठवण्यासाठी उपयोगी आहे.</li>
        </ul>
      </p>

      <p>
        <strong>Example:</strong>
      </p>
      <p>
        <strong>English:</strong>
        <br />
        Here's a simple example of using <code>useRef</code> to focus an input field:
      </p>
      <pre>
{`
import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);  // Create a ref

  const focusInput = () => {
    inputRef.current.focus();  // Focus the input element using ref
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click button to focus me" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
`}
      </pre>

      <p>
        <strong>Marathi:</strong>
        <br />
        येथे एक साधारण उदाहरण आहे ज्यामध्ये आपण <code>useRef</code> वापरून input field ला focus करत आहोत:
      </p>
      <pre>
{`
import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);  // Ref तयार करा

  const focusInput = () => {
    inputRef.current.focus();  // Ref वापरून input element ला focus करा
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click button to focus me" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
`}
      </pre>
<BasicExampleUseRef/>
    </>
  );
}
