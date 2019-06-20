const secrets = (req, res) => {
  res.send('accessed \'/private/secrets\' endpoint')
}

module.exports = {
  secrets
}