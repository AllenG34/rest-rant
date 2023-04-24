const router = require('express').Router()

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'https://images.unsplash.com/photo-1533959938354-70634c231c21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGhhaSUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'https://images.unsplash.com/photo-1567880905822-56f8e06fe630?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60'
      }]
      res.render('places/index', { places })
    })
    router.post('/', (req, res) => {
      console.log(req.body)
      res.send('POST /places')
    })    
    router.get('/new', (req, res) => {
        res.render('places/new')
      })
      

module.exports = router
