const express = require('express');
const router = express.Router();
const { secrets } = require('../controllers/private-controller');
const users = require('../database')

router.use((req, res, next) => {
  const { username, password } = req.headers
  const foundUser = users.find((user) => {
    return user.name === username
  })
  if (!foundUser) {
    return res.status(403).send('you aren\'t authorized (username)')
  }
  if (password !== foundUser.password) {
    return res.status(403).send('you aren\'t authorized (password)')
  }
  req.user = foundUser
  next()
})

router.get('/secrets', secrets);

module.exports = router;