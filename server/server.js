import app from './server/app.js';

const port = 3002
// Testing API
app.get('/', (req, res) => {
  res.send('API Test: API Functioning')
})

// Running the server on given port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})  