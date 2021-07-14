import { useContext } from 'react'
import ThemeContext from '../../providers/auth'

import './styles.scss'

export const Key = (props) => {
   const { theme } = useContext(ThemeContext)

   return (
      <button
         className={`key ${props.largeKey} ${props.letterKey} ${props.equalKey} ${theme}`}
      >
         {props.children}
      </button>
   )
}