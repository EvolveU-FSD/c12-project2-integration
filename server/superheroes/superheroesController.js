import express from 'express'
import * as Superheroes from './superheroes.js'

const router = express.Router()

// get all of the superheroes
router.get('/', async (req, res)=>{
    const heroes = await Superheroes.getAllHeroes();
    res.send(heroes);
})

// get a superhero by id
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const record = await Superheroes.getHeroById(id);
    res.send(record);
})

export default router
