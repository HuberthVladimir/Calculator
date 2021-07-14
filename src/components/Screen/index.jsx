import { useContext } from 'react';
import ThemeContext from '../../providers/auth'

import './styles.scss';

export const Screen = () => {
   const { theme } = useContext(ThemeContext)

   return (
      <section className={`screen ${theme}`}>
         <h1>1111</h1>
      </section>
   )
}