import { disconnectDatabase, createSuperhero } from "./superheroes.js";

console.log(await createSuperhero({
    name: 'Superman',
    costume: 'Blue body suit with red cape.',
    superPowers: 'invincible, super strength, super speed, flight, laser beams'
}))

await disconnectDatabase();
