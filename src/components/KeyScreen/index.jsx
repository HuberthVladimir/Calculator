import { useContext } from 'react'
import { Key } from '../Key'
import ThemeContext from '../../providers/auth'

import './styles.scss'

export const KeyScreen = () => {
   const { theme } = useContext(ThemeContext)

   return (
      <section className={`${theme} backgroundKey`}>
         <Key>7</Key>
         <Key>8</Key>
         <Key>9</Key>
         <Key letterKey={'letterKey'}>DEL</Key>
         <Key>4</Key>
         <Key>5</Key>
         <Key>6</Key>
         <Key>+</Key>
         <Key>1</Key>
         <Key>2</Key>
         <Key>3</Key>
         <Key>-</Key>
         <Key>.</Key>
         <Key>0</Key>
         <Key>/</Key>
         <Key>x</Key>
         <Key
            letterKey={'letterKey'}
            largeKey={'largeKey'}
         >
            RESET
         </Key>
         <Key
            largeKey={'largeKey'}
            equalKey={'equalKey'}
         >
            =
         </Key>
      </section>
   )
}