import React, { useRef } from 'react';

export default function BasicExampleUseRef() {
  // useRef hook वापरून एक ref तयार करा. हे ref DOM element चा reference ठेवते.
  // या ref च्या मदतीने आपण input field ला थेट access करू शकतो.
  const inputRef = useRef(null);

  // या function मध्ये, input field ला focus करण्याची क्रिया केली जाते.
  const focusInput = () => {
    // inputRef.current वापरून input element ला थेट focus करा.
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Basic Example of useRef</h2>

      {/* 
        input field आहे, ज्यामध्ये ref म्हणून inputRef दिला आहे.
        यामुळे, या input element ला आपण थेट access करू शकतो.
      */}
      <input 
        ref={inputRef} 
        type="text" 
        placeholder="Click the button to focus me"
        style={{ padding: '10px', fontSize: '16px' }}
      />
      
      {/* 
        या बटणावर क्लिक केल्यावर focusInput function call होईल,
        जेव्हा हे function कॉल होईल, तेव्हा input field ला focus केला जाईल.
      */}
      <button 
        onClick={focusInput} 
        style={{ marginTop: '20px', padding: '10px', fontSize: '16px' }}
      >
        Focus the Input
      </button>
    </div>
  );
}
