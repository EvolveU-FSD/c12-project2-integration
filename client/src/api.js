

export async function fetchAllSuperheroes() {
    const response = await fetch('/api/superheroes')
    return await response.json()
}

export async function fetchSuperheroById(_id) {
    return testHeros[0]
}
