const express = require('express');
const router = express.Router();
const { secrets } = require('../controllers/private-controller');
const users = require('../database')

// write basic auth middleware here using headers
// router.use()

router.get('/secrets', secrets);

module.exports = router;