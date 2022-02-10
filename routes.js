const { Router } = require('express')
const router = Router()
const Productos = require('./model/Productos.js')

const sample = [
  {
    title: 'Computadora',
    price: 45999,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-and-school-8/48/Computer-256.png'
  },
  {
    title: 'Cámara',
    price: 8544,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-and-school-8/48/Camera-256.png'
  }
]
const productos = new Productos(sample)

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/productos', (req, res) => {
  const { title, price, thumbnail } = req.body
  productos.add(title, price, thumbnail)
  res.redirect('/')
})

router.get('/productos', (req, res) => {
  const items = productos.all()
  res.render('items', { items })
})

module.exports = router