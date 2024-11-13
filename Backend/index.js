const express = require('express');
const cors = require('cors');
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const { proxyRoute } = require('./Routes/ProxyRoutes')
const { userRoute } = require('./Routes/userRoute');
const { userDataRoute } = require('./Routes/userDataRoute');
const { RestrictToUser } = require('./Middleware/RestrictToUser');
const { errorMiddleware } = require('./Middleware/ErrorMiddleware');
// const cluster = require('cluster')
// const os = require('node:os');
// const { rateLimiter } = require('./Utils/RateLimit');

const app = express();
dotEnv.config()

mongoose.connect('mongodb://mongodb:27017/user')
    .then(() => console.log('MongoDB connected.'))
    .catch(e => console.log(e))



// if (!cluster.isMaster) {
//     const cpus = os.cpus().length
//     console.log(cpus)
//     for (let i = 0; i < cpus; i++) {
//         console.log(process.pid)
//         cluster.fork()
//     }
//     cluster.on('exit', (worker, code, signal) => {
//         console.log(`Worker ${worker.process.pid} died`);
//         cluster.fork();
//     });
// } else {


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// const req_origin = process.env.CURRNET_MODE === 'dev' ? 'http://localhost:5173' : process.env.ORIGIN

app.use(cors({
    origin: true,
    credentials: true
}));

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('HI.')
})

app.use('/api', proxyRoute)
app.use('/api/user', userRoute)

app.use('/api/user/data', RestrictToUser, userDataRoute)

app.use(errorMiddleware)


app.listen(8000, () => {
    console.log('Server started on port 8000');
});

// }