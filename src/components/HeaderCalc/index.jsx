import { Switch } from '../switch'
import './styles.scss'

export function HeaderCalc() {

   return (
      <header className="header">
         <h1>Calc</h1>

         <section className="themeSelector">
            <p className="theme">THEME</p>
            <div className="switch">
               <div className="themeNumbers">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
               </div>
               <Switch />
            </div>
         </section>
      </header>
   )
}