const index = (req, res) => {
  res.send('accessed \'/public/\' endpoint')
}

const show = (req, res) => {
  const { id } = req.params
  res.send(`accessed \'/public/${id}\' endpoint`)
}

module.exports = {
  index,
  show
}