
import './App.css'
import Navigation from './components/navigation/Navigation'
import Header from './components/header/Header'
import Formulaire from './components/formulaire/Formulaire'
function App() {
  

  return (
    <>
    {/* DIV POUR METTRE LES ELEMENT CENTRER ET NON COLLER A DROITE ET A GAUCHE  */}
      <div className='tous-element'>
        <Navigation />
        <Header />
        <Formulaire />
      </div>
      
    </>
  )
}

export default App
