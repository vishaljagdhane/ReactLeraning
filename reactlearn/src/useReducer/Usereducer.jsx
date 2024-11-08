import React, { useReducer } from 'react';
import UseReducerComplex from './UseReducerComplex';

export default function Usereducer() {
  // सुरुवात स्थिती (initial state) तयार करा. इथे count ला 0 दिलं आहे.
  const initialState = { count: 0 };

  // Reducer फंक्शन: या फंक्शनमध्ये आपल्याला state च्या बदलाची लॉजिक सांगितली जाते.
  // जर action type 'increment' असेल, तर count 1 ने वाढवला जातो.
  // जर action type 'decrement' असेल, तर count 1 ने कमी केला जातो.
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment': // जर action type 'increment' असेल तर count वाढवणे
        return { count: state.count + 1 };
      case 'decrement': // जर action type 'decrement' असेल तर count कमी करणे
        return { count: state.count - 1 };
      default:
        return state; // दुसरं काही न केल्यास, आधीचा state परत करा
    }
  };

  // useReducer hook वापरून reducer आणि initial state वापरून state मॅनेज करा.
  // useReducer ने दोन गोष्टी परत केल्या - state आणि dispatch.
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>useReducer in React</h1>
      <p>
        <strong>What is useReducer?</strong> <br />
        useReducer हा React मध्ये एक hook आहे जो complex state logic ला मॅनेज करण्यासाठी वापरला जातो. 
        साधारणपणे, जेव्हा आपल्याला एकाच state मध्ये विविध updates (actions) करायच्या असतात, किंवा 
        state च्या बदलावर आधारित निर्णय घ्यायचे असतात, तेव्हा useReducer वापरले जाते.
      </p>
      <p>
        <strong>Why use useReducer?</strong> <br />
        useReducer मुख्यतः जेव्हा आपली state logic complex होईल, किंवा आपल्याला अनेक sub-values वर 
        action ची आवश्यकता असेल, तेव्हा वापरला जातो. हे आपल्याला state ची अपडेट करणारी logic 
        centralized करण्यास मदत करते.
      </p>
      <p>
        <strong>What is the real-time work of useReducer?</strong> <br />
        वास्तविक अनुप्रयोगांमध्ये useReducer वापरला जातो जिथे आपल्याला अनेक प्रकारच्या actions वापरून 
        state मॅनेज करायची असते. उदाहरणार्थ, form डेटा मॅनेज करणे, dynamic UI elements बदलणे (जसे की 
        modals किंवा dropdowns), आणि count किंवा लांब सूची व्यवस्थापित करणे.
      </p>

      {/* Count दाखवा */}
      <div>
        <h2>Counter Example Using useReducer</h2>
        <p>वर्तमान गणना: {state.count}</p>
        
        {/* 
          "Increment" बटणावर क्लिक केल्यावर, dispatch करून action 'increment' पाठवला जातो. 
          यामुळे count वाढेल.
        */}
        <button onClick={() => dispatch({ type: 'increment' })}>वाढवा</button>

        {/* 
          "Decrement" बटणावर क्लिक केल्यावर, dispatch करून action 'decrement' पाठवला जातो. 
          यामुळे count कमी होईल.
        */}
        <button onClick={() => dispatch({ type: 'decrement' })}>कमी करा</button>

        <UseReducerComplex/>
      </div>
    </>
  );
}
