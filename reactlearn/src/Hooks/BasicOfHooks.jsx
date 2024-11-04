import React, { useState } from 'react';

export default function BasicOfHooks() {
  // Using useState to manage the state
  const [first, setFirst] = useState('');

  return (
    <>
      <h6>
        Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.
      </h6>
      <p>
        The useState hook is declared like this: <code>const [first, setFirst] = useState('')</code>
      </p>
      <h6>First is a variable that holds the current state value.</h6>
      <h6>setFirst is a function used to update the state value.</h6>
      
      <h6>More Information:</h6>
      <p>
        Hooks enable you to use state and lifecycle methods in functional components, which leads to cleaner and more reusable code.
      </p>
      <p>
        You can have multiple state variables in a single component by calling useState multiple times.
      </p>
      <p>
        The initial state can be set to any value, such as a number, string, array, or object.
      </p>

      <h6>Marathi Version:</h6>
      <h6>
        हुक्स फंक्शन कॉम्पोनंट्सना स्टेट आणि इतर React वैशिष्ट्यांपर्यंत प्रवेश देतात. यामुळे, क्लास कॉम्पोनंट्सची आवश्यकता सामान्यतः कमी होते.
      </h6>
      <p>
        useState हुकची घोषणा अशी केली जाते: <code>const [first, setFirst] = useState('')</code>
      </p>
      <h6>first हा एक व्हेरिएबल आहे जो वर्तमान स्टेट मूल्य धारण करतो.</h6>
      <h6>setFirst ही एक फंक्शन आहे जी स्टेट मूल्य अपडेट करण्यासाठी वापरली जाते.</h6>

      <h6>अधिक माहिती:</h6>
      <p>
        हुक्स तुम्हाला फंक्शनल कॉम्पोनंट्समध्ये स्टेट आणि लाइफसायकल मेथड्स वापरण्याची परवानगी देतात, ज्यामुळे कोड स्वच्छ आणि पुनः वापरण्यायोग्य बनतो.
      </p>
      <p>
        तुम्ही एकाच कॉम्पोनंटमध्ये अनेक स्टेट व्हेरिएबल्स असू शकतात, ज्यासाठी तुम्ही अनेक वेळा useState कॉल करू शकता.
      </p>
      <p>
        प्रारंभिक स्टेट कोणत्याही मूल्यावर सेट केला जाऊ शकतो, जसे की नंबर, स्ट्रिंग, अरे किंवा ऑब्जेक्ट.
      </p>
    </>
  );
}
