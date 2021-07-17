import { useContext } from 'react';
import ThemeContext from '../../providers/auth'

import './styles.scss';

export const Screen = () => {
   const { theme, valueScreen, equation, secondValueScreen, resultState, result } = useContext(ThemeContext)

   return (
      <section className={`screen ${theme}`}>
         {!resultState && (
            <h1>{valueScreen} {equation} {secondValueScreen}</h1>
         )}

         {resultState && (
            <h1>{result}</h1>
         )}
      </section>
   )
}