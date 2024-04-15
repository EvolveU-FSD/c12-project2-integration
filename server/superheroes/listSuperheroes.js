import { disconnectDatabase, getAllHeroes } from "./superheroes.js";

console.log(await getAllHeroes())

await disconnectDatabase();
