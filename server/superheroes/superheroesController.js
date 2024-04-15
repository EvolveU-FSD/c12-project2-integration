import express from 'express'
import * as Superheroes from './superheroes.js'

const router = express.Router()

// get all of the superheroes
router.get('/', async (req, res)=>{
    const heroes = await Superheroes.getAllHeroes();
    res.send(heroes);
})

// get a superhero by id
// in my example I could run
// curl http://localhost:3000/api/superheroes/661d4c62d77b573103f5dd8d
// and get Mr. Incredible
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const record = await Superheroes.getHeroById(id);
    res.send(record);
})

// 
// tested with curl -X POST -H 'Content-Type: application/json' -d '{"name":"Ironman","costume":"red alloy suit, arc reactor","superPowers":"suit strength, suit bulletproofness, suit flight, onboard jarvis"}' http://localhost:3000/api/superheroes
//
router.post('/', async (req, res) => {
    const newHero = req.body
    const record = await Superheroes.createSuperhero(newHero)
    res.send(record)
})

export default router
