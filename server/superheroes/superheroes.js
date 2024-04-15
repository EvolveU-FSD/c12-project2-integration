import mongoose from "mongoose"

await mongoose.connect('mongodb://localhost:27017/c12Integration')

// if only there was a model here!

// temporary hero for testing
const tempHeroes = [
    { 
        _id: '123456abcdef',
        name: 'Superman',
        costume: 'Blue body suit with red cape.',
        superPower: 'invincible, super strength, super speed, flight, laser beams',
    }
]

export async function getAllHeroes(){
    return tempHeroes
}

export async function getHeroById(id){
    return tempHeroes[0]
}

export async function disconnectDatabase() {
    await mongoose.disconnect();
}