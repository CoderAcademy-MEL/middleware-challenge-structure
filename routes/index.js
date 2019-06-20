const express = require('express');
const router = express.Router();

// middleware
router.use(express.json())

// routing
router.use('/private', require('./private-routes'))
router.use('/public', require('./public-routes'))

module.exports = router;