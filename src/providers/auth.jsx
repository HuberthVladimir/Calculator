import { useState, createContext } from 'react'

const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
   const [theme, setTheme] = useState('firstTheme')

   return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
         {props.children}
      </ThemeContext.Provider>
   )
}

export default ThemeContext
