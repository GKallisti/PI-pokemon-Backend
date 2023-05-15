const { Router } = require('express');
const { getPokemons, createPokemon, getPokemonById, deletePokemonfromdb } = require('../controllers/pokemonControllers');

const router = Router();

router.get('/', getPokemons);//query {name} ?name=pikachu
router.get('/:id', getPokemonById);//params
router.post(`/`, createPokemon);//query {name}
router.delete ('/:id', deletePokemonfromdb);
module.exports = router;

