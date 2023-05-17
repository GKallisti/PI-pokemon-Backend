const { Router } = require('express');
const { getTypes } = require('../controllers/typesControllers');
const { getPokemons, createPokemon, getPokemonById, deletePokemonfromdb } = require('../controllers/pokemonControllers');

const router = Router();
router.use('/types', getTypes);
router.get('/pokemons', getPokemons);//query {name} ?name=pikachu
router.get('/pokemons:id', getPokemonById);//params
router.post(`/pokemons`, createPokemon);//query {name}
router.delete('/delete/:id', deletePokemonfromdb);

module.exports = router;
