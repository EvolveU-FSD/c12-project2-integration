import { useEffect, useState } from "react"
import { fetchAllSuperheroes } from "../api"

import "./AllSuperheroesPage.css"

function HeroRow({ hero }) {
    return (
        <div className='hero-row'>
            <h2>{hero.name}</h2>
            <div>{hero.superPower}</div>
        </div>
    )
}

function AllSuperheroesPage({ createNewHero }) {

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
                <HeroRow key={hero._id} hero={hero}/>
            ))}
        </div>
    )
}

export default AllSuperheroesPage