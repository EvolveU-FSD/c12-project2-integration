
const testHeros = [
    { 
        _id: '987654321',
        name: 'Spiderman',
        costume: 'Red and blue body suit with cool spider symbol',
        superPower: 'web shooting, spidey sense, spidey strength, spider climb, mediocre photography',
    }
]

export async function fetchAllSuperheroes() {
    return testHeros
}

export async function fetchSuperheroById(_id) {
    return testHeros[0]
}
