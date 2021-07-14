import ThemeContext from './providers/auth'

import { HeaderCalc } from './components/HeaderCalc'
import { Screen } from './components/Screen'
import { useContext } from 'react';
import { KeyScreen } from './components/KeyScreen';

import './app.scss'

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`background ${theme}`}>
      <HeaderCalc />
      <Screen />
      <KeyScreen />
    </div>
  );
}

export default App;