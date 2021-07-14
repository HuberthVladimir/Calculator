import React from 'react'
import ThemeContext from '../../providers/auth'
import './styles.scss'

export function Switch() {
   const { theme, setTheme } = React.useContext(ThemeContext)

   return (
      <div className="wrapper" >
         <div className={`${theme} toggle_radio`}>
            <input
               type="radio"
               defaultChecked
               className="toggle_option"
               id="first_toggle"
               name="toggle_option"
               onChange={() => setTheme('firstTheme')}
            />
            <input
               type="radio"
               className="toggle_option"
               id="second_toggle"
               name="toggle_option"
               onChange={() => setTheme('secondTheme')}
            />
            <input
               type="radio"
               className="toggle_option"
               id="third_toggle"
               name="toggle_option"
               onChange={() => setTheme('thirdTheme')}
            />
            <label htmlFor="first_toggle"><p></p></label>
            <label htmlFor="second_toggle"><p></p></label>
            <label htmlFor="third_toggle"><p></p></label>
            <div className={`toggle_option_slider ${theme}`} />
         </div>
      </div>
   )
}