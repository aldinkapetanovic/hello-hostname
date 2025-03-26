import express from 'express'
import morgan from 'morgan'
import { hostname as _hostname } from "os"
import requestIp from 'request-ip';

const app = express()
const hostname = _hostname()
const port = process.env.PORT || 3000
// const short_sha = process.env.SHORT_SHA
const short_sha = process.env.SHORT_SHA.slice(0, 7)


// kind: Service
// metadata:
//   name: ingress-nginx-controller
//   namespace: ingress-nginx
// spec:
//   externalTrafficPolicy: Local

app.enable('trust proxy');

app.disable("x-powered-by")
app.use(morgan('combined'))

app.use((req, res, next) => {
    // console.log('Check if the X-Forwarded-For and X-Real-IP are passed ->', req.headers);
    next();
});

app.get('/', (req, res) => {

    const clientIp = requestIp.getClientIp(req);
    // console.log(`request-ip -> Your IP Address is ${clientIp}.`);

    const nodeVersion = process.version;

    res.send(`
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${hostname}</title>

        <style>
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                height: 100vh;
                background-color: #f8f9fa;
            }

            h1 {
                font-size: 5vw;
                color: #007bff;
                margin: 0;
            }

            p {
                font-size: 1.5em;
                margin-top: 10px;
                color: #6c757d;
            }
        
            .highlight {
                font-size: 0.8em;
                font-family: monospace;
                background-color: #f0f0f0;
                padding: 5px;
                border-radius: 4px;
            }
        </style>
    </head>

    <body>
        <div>
            <h1>${hostname} 🌐</h1>
            <p>Hello, I am your Docker container! 🐳</p>
            <p>Node.js Version: <span class="highlight">${nodeVersion}</span> 🚀</p>
            <p>Commit: <span class="highlight">${short_sha}</span> #️⃣</p>
        </div>
    </body>

    </html>
    `);
});


app.listen(port, (err) => {
    if (err) {
        console.log('Error::', err)
    }
    console.log(`App listening on port ${port}`)
});
