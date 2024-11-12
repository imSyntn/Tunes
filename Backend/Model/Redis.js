const Redis = require('ioredis')
const dotEnv = require('dotenv')

dotEnv.config()


const host = process.env.REDIS_HOSTNAME;
const port = process.env.REDIS_PORT;
const username = process.env.REDIS_USERNAME;
const password = process.env.REDIS_PASSWORD;

// console.log()

const client = new Redis({
    host,
    port,
    username,
    password
})



module.exports = { client }