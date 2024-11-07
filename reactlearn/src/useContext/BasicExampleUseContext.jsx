import React from 'react'

export default function BasicExampleUseContext() {
  return (
    <>
      <h5>React Context and useContext Hook</h5>
      <p>
      React's Context is a way to share values across your application without having to pass props down manually at every level. This is useful when you have global data, like a user's authentication status, theme settings, or language preference, and you want to access it from different components at various levels of the component tree.
      </p>
      <p>
      1. Setting Up Context:
Before using useContext, you need to create a context using React.createContext(). This context will hold the data you want to share across the application.

2. Providing Context:
Once you create the context, you need to "provide" the context value higher in the component tree using the Context.Provider component. All the components inside this provider will be able to access the context.

3. Consuming Context with useContext:
In the components where you need access to the context data, you use the useContext hook to consume the context value.
      </p>
    </>
  )
}
