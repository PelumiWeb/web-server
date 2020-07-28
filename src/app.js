const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
console.log(__dirname)
console.log(path.join(__dirname, '../public'))
app.use(express.static(path.join(__dirname, '../public')))
const geocode = require('./utilitis/geocode')
const forecast = require('./utilitis/forecast')

app.get('', (req, res) => {
  res.send('Hello express!')
})

app.get('/help', (req, res) => {
    res.send('Help page')
})
app.get('/products', (req, res) => {
  if (!req.query.search) {
   res.send({
       error: 'You must provide a search term'
       
   })   
  }
res.send({
    products: []
})
})

app.get('/about', (req, res) => {
    res.send('<h1>Good morning my neighbour</h1>')
})
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
          error: 'You must provide an address'  
        })
    }
    geocode(req.query.address, (error, {latitude, longitude, location} = { }) => {
        if (error) {
          return res.send({error})  
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({error})
            }
            res.send({
            forecast: forecastData,
            location,
            address: req.query.address
            })
        } )
    })
    // res.send({
    //     name: 'pelumi',
    //     age: 21,
    //     adress: req.query.address
    // })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
