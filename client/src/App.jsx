import { useState } from 'react'
import './App.css'

import AllSuperheroesPage from './pages/AllSuperheroesPage'

function App() {
  
  const [selectedHero, setSelectedHero] = useState()

  function createNewHero() {
    console.log('Go to creation screen here!')
  }

  return (
    <>
      <AllSuperheroesPage setSelectedHero={setSelectedHero} createNewHero={createNewHero}/>
      <div>Selected hero: {JSON.stringify(selectedHero)}</div>
    </>
  )
}

export default App
