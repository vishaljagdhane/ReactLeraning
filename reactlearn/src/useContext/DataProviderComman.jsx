import React, { createContext, useState } from 'react';

// Create context
export const DataContext = createContext();

export default function DataProviderComman({ children }) {  // Use 'children' prop
  // Define your state
  const [username, setUserName] = useState('vishal');
  const [mname, setMname] = useState('');
  const [lastname, setLastname] = useState('');

  // Create context value
  const contextValue = {
    username,
    setUserName,
    mname,
    setMname,
    lastname,
    setLastname,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children} {/* Render the children */}
    </DataContext.Provider>
  );
}
