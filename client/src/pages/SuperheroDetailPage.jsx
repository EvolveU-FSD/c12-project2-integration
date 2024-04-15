import "./SuperheroDetailPage.css"

function SuperheroDetailPage({ hero }) {
    return (
        <div>
            <h1>{hero.name}</h1>
            <label>Costume</label>
            <div className='detail'>{hero.costume}</div>
            <label>Powers and Abilities</label>
            <div className='detail'>{hero.superPowers}</div>
        </div>
    )
}

export default SuperheroDetailPage