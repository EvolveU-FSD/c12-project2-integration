import { useEffect, useState } from "react"
import { fetchAllSuperheroes } from "../api"

import "./AllSuperheroesPage.css"

function HeroRow({ hero, setSelectedHero }) {
    return (
        <div className='hero-row' onClick={() => setSelectedHero(hero)}>
            <h2>{hero.name}</h2>
            <div>{hero.superPowers}</div>
        </div>
    )
}

function AllSuperheroesPage({ createNewHero, setSelectedHero }) {

    const [heroes, setHeroes] = useState([ ])

    async function loadSuperheroes() {
        const allHeroes = await fetchAllSuperheroes()
        setHeroes(allHeroes)
    }

    useEffect(() => {
        loadSuperheroes()
    }, [])

    return (
        <div>
            <div className='header'>
                <div className='title'>Superheroes</div>
                <button onClick={ createNewHero }>Create New</button>
            </div>
            { heroes.map((hero) => (
                <HeroRow key={hero._id} hero={hero} setSelectedHero={setSelectedHero}/>
            ))}
        </div>
    )
}

export default AllSuperheroesPage