import { disconnectDatabase, createSuperhero } from "./superheroes.js";

if (process.argv.length < 5) {
    console.log('Usage: createSuperhero "name" "costume" "superpowers"')
    process.exit(0)
}

const name = process.argv[2]
const costume = process.argv[3]
const superPowers = process.argv[4]

console.log(await createSuperhero({
    name, 
    costume, 
    superPowers
}))

await disconnectDatabase();
