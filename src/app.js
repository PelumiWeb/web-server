const path = require('path')
const express = require('express')
const app = express()


const port = process.env.PORT || 3000
const source = path.join(__dirname, '../public')
console.log(source)
app.use(express.static(path.join(__dirname, '../public')))
// app.set('view engine', 'hbs')
// app.get('', (res, req) => {
//     res.render('index')
//  })
const geocode = require('./utilitis/geocode')
const forecast = require('./utilitis/forecast')
console.log('this is working')
const num = 23
console.log(num)
// app.get('', (req, res) => {
//   res.send('Hello express!')
// })

// app.get('/help', (req, res) => {
//     res.send('Help page')
// })
// app.get('/products', (req, res) => {
//   if (!req.query.search) {
//    res.send({
//        error: 'You must provide a search term'
       
//    })   
//   }
// res.send({
//     products: []
// })
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>Good morning my neighbour</h1>')
// })
// app.get('/weather', (req, res) => {
//     if (!req.query.address) {
//         return res.send({
//           error: 'You must provide an address'  
//         })
//     }
//     geocode(req.query.address, (error, {latitude, longitude, location} = { }) => {
//         if (error) {
//           return res.send({error})  
//         }
//         forecast(latitude, longitude, (error, forecastData) => {
//             if (error) {
//                 return res.send({error})
//             }
//             res.send({
//             forecast: forecastData,
//             location,
//             address: req.query.address
//             })
//         } )
//     })
//     // res.send({
//     //     name: 'pelumi',
//     //     age: 21,
//     //     adress: req.query.address
//     // })
// })
// app.get('/help.html/*', (req, res) => {
//     res.send('Help article not found') 
//  })
// app.get('*', (req, res) => {
//     res.send('My 404 page')
// })

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
console.log('it is working')