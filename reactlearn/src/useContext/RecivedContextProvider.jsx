import React, { useContext } from 'react'
import { themProvider } from '../App'

export default function RecivedContextProvider() {
    const {theme,setTheme} =useContext(themProvider)
  return (
    <div>
    <p>Current theme: {theme}</p>
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </button>
    </div>
  )
}
