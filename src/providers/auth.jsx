import { useState, createContext } from 'react'

const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
   const [theme, setTheme] = useState('firstTheme')
   const [valueScreen, setValueScreen] = useState([0])
   const [equation, setEquation] = useState(null)
   const [secondValueScreen, setSecondValueScreen] = useState([null])
   const [resultState, setResultState] = useState(false)
   const [result, setResult] = useState(null)

   return (
      <ThemeContext.Provider value={{ theme, setTheme, valueScreen, setValueScreen, equation, setEquation, secondValueScreen, setSecondValueScreen, resultState, setResultState, result, setResult }}>
         {props.children}
      </ThemeContext.Provider>
   )
}

export default ThemeContext
