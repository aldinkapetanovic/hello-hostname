import express from 'express'
import morgan from 'morgan'
import { hostname as _hostname } from "os"

const app = express()
const hostname = _hostname()
const port = process.env.PORT || 3000

app.use(morgan('combined'))

app.get('/', (req, res) => res.send(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${hostname}</title>
</head>

<body>
    <div>Hello, I am <h1>${hostname}!</h1>
    </div>
</body>

</html>`))

app.listen(port, (err) => {
  if (err) {
    console.log('Error::', err)
  }
  console.log(`App listening on port ${port}`)
});
