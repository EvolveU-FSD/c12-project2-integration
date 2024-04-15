import express from 'express'
import heroesController from './superheroes/superheroesController.js'

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json());
app.use('/api/superheroes', heroesController)

app.listen(PORT, () => {
    console.log('Server running on localhost ' + PORT)
})
