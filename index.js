import express from 'express'
import morgan from 'morgan'
import { hostname as _hostname } from "os"
import fs from 'fs'
import path from 'path'

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs/access.log'), { flags: 'a' });


// const accessLogStream = createWriteStream('access.log');
const errorLogStream = fs.createWriteStream('logs/error.log');

// Example: Writing logs to the streams
accessLogStream.write('This is an access log entry\n');

// Example: Simulating an error and writing to the error log
try {
  // Code that may throw an error
  throw new Error('Simulated error');
} catch (error) {
  errorLogStream.write(`Error: ${error.message}\n`);
}


const app = express()
const hostname = _hostname()
const port = process.env.PORT || 3000

app.use(morgan('combined', { stream: accessLogStream }))

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
