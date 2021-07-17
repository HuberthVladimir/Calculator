import React, { useContext } from 'react'
import { Key } from '../Key'
import ThemeContext from '../../providers/auth'

import './styles.scss'

export const KeyScreen = () => {
   const { theme, valueScreen, setValueScreen, equation, setEquation, secondValueScreen, setSecondValueScreen, setResult, resultState, setResultState } = useContext(ThemeContext)

   const resetAction = () => {
      setEquation(null)
      setValueScreen([0])
      setSecondValueScreen([null])
      setResult(null)
   }

   const attScreen = (value) => {

      setResultState(false)

      if (equation === null) {
         (valueScreen.length === 1 && valueScreen[0] === 0 && value !== '.') ?
            setValueScreen([value])
            : (
               !(valueScreen.indexOf('.') >= 1 && value === '.') && setValueScreen([...valueScreen, value])
            )
      } else {
         ((secondValueScreen?.length === 1 && secondValueScreen[0] === '.') || secondValueScreen[0] === null) ?
            setSecondValueScreen([value])
            : (
               !(secondValueScreen?.indexOf('.') >= 1 && value === '.') && setSecondValueScreen([...secondValueScreen, value])
            )
      }
   }

   const resultData = () => {
      setResultState(true)
      const valueScreenNumber = Number(valueScreen.toString().replaceAll(',', ''))
      const secondValueScreenNumber = Number(secondValueScreen.toString().replaceAll(',', ''))
      let resultNum = ''

      equation === '+' && (resultNum = valueScreenNumber + secondValueScreenNumber)
      equation === '*' && (resultNum = valueScreenNumber * secondValueScreenNumber)
      equation === '/' && (resultNum = valueScreenNumber / secondValueScreenNumber)
      equation === '-' && (resultNum = valueScreenNumber - secondValueScreenNumber)

      setResult(resultNum)
      setEquation(null)
      setValueScreen([0])
      setSecondValueScreen([null])
   }

   const removeLastIndex = (state, setState) => {
      const newArr = [...state]
      newArr.pop();
      return setState(newArr);
   }
   const deleteData = () => {

      if (resultState) {
         setResult(null)
         setResultState(false)
      }

      if (equation !== null && secondValueScreen !== null && !resultState) {
         if (secondValueScreen[0] !== null) {
            secondValueScreen.length !== 1 ? removeLastIndex(secondValueScreen, setSecondValueScreen) : setSecondValueScreen([null])
         } else {
            setEquation(null)
         }

      }

      if (equation === null && secondValueScreen[0] === null && !resultState) {
         if (valueScreen.length === 1 && valueScreen[0] !== 0) {
            setValueScreen([0])
         } else if (valueScreen.length === 1 && valueScreen[0] === 0) {
            return
         }
         else {
            removeLastIndex(valueScreen, setValueScreen)
         }
      }

   }

   return (
      <section className={`${theme} backgroundKey`}>
         <Key handleClick={() => attScreen(7)}>7</Key>
         <Key handleClick={() => attScreen(8)}>8</Key>
         <Key handleClick={() => attScreen(9)}>9</Key>
         <Key letterKey={'letterKey'} handleClick={() => deleteData()}>DEL</Key>
         <Key handleClick={() => attScreen(4)}>4</Key>
         <Key handleClick={() => attScreen(5)}>5</Key>
         <Key handleClick={() => attScreen(6)}>6</Key>
         <Key handleClick={() => setEquation('+')}>+</Key>
         <Key handleClick={() => attScreen(1)}>1</Key>
         <Key handleClick={() => attScreen(2)}>2</Key>
         <Key handleClick={() => attScreen(3)}>3</Key>
         <Key handleClick={() => setEquation('-')}>-</Key>
         <Key handleClick={() => attScreen('.')}>.</Key>
         <Key handleClick={() => attScreen(0)}>0</Key>
         <Key handleClick={() => setEquation('/')}>/</Key>
         <Key handleClick={() => setEquation('*')}>x</Key>
         <Key
            letterKey={'letterKey'}
            largeKey={'largeKey'}
            handleClick={() => {
               setResultState(false)
               resetAction()
            }
            }
         >
            RESET
         </Key>
         <Key
            largeKey={'largeKey'}
            equalKey={'equalKey'}
            handleClick={() => resultData()}

         >
            =
         </Key>
      </section>
   )
}
