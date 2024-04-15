import './App.css'

import AllSuperheroesPage from './pages/AllSuperheroesPage'

function App() {
  
  function createNewHero() {
    console.log('Go to creation screen here!')
  }

  return (
    <AllSuperheroesPage createNewHero={createNewHero}/>
  )
}

export default App
