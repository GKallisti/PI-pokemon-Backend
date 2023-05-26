const { Router } = require('express');
const { getTypes } = require('../controllers/typesControllers');
const { getPokemons, createPokemon, getPokemonById, deletePokemonfromdb } = require('../controllers/pokemonControllers');

const router = Router();
router.use('/types', getTypes);
router.get('/pokemons', getPokemons);
router.get('/pokemons:id', getPokemonById);
router.post(`/pokemons`, createPokemon);
router.delete('/delete/:id', deletePokemonfromdb);

module.exports = router;
