const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getTypes } = require('../controllers/typesControllers');
const { getPokemons, createPokemon, getPokemonById } = require('../controllers/pokemonControllers');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/pokemons', getPokemons);//query {name} ?name=pikachu
router.get('/pokemons:id', getPokemonById);//params
router.post(`/pokemons`, createPokemon);//query {name}
router.use('/types', getTypes);

module.exports = router;
