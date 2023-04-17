import express from 'express'
import morgan from 'morgan'
import { hostname as _hostname } from "os"

const app = express()
const hostname = _hostname()
const port = process.env.PORT || 3000

app.use(morgan('combined'))

app.get('/', (req, res) => res.send(`Hello, I am ${hostname}!`))

app.listen(port, (err) => {
  if (err) {
    console.log('Error::', err)
  }
  console.log(`App listening on port ${port}`)
});
