import mongoose, { Schema } from "mongoose"

await mongoose.connect('mongodb://localhost:27017/c12Integration')

const SuperheroSchema = new Schema({ name: String, costume: String, superPowers: String})

const Superheroes = mongoose.model("superhero", SuperheroSchema, "superheroes")

export async function getAllHeroes(){
    return await Superheroes.find()
}

export async function getHeroById(id){
    return tempHeroes[0]
}

export async function disconnectDatabase() {
    await mongoose.disconnect();
}