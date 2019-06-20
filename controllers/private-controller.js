const secrets = (req, res) => {
  res.send('accessed \'/private/secrets\' endpoint')
}

// write a secrets endpoint that sends this message
// 'accessed private/secrets endpoint'

module.exports = {
  secrets
}