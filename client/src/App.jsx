import { useState } from 'react'
import './App.css'

import AllSuperheroesPage from './pages/AllSuperheroesPage'
import SuperheroDetailPage from './pages/SuperheroDetailPage'

function App() {
  
  const [selectedHero, setSelectedHero] = useState()

  function createNewHero() {
    console.log('Go to creation screen here!')
  }

  return (
    <>
      { !selectedHero && <AllSuperheroesPage setSelectedHero={setSelectedHero} createNewHero={createNewHero}/> }
      { selectedHero && <SuperheroDetailPage hero = {selectedHero} /> }
    </>
  )
}

export default App
