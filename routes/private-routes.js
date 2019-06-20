const express = require('express');
const router = express.Router();
const { secrets } = require('../controllers/private-controller');
const users = require('../database')

// write basic auth middleware here using headers
// copy code from previous lecture
// router.use()

router.get('/secrets', secrets);

module.exports = router;