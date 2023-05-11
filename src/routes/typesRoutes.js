const { Router } = require('express');
const { getTypes } = require('../controllers/typesControllers');

const router = Router();

router.get('/', getTypes);

module.exports = router;