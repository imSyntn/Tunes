const Redis = require('ioredis')
const dotEnv = require('dotenv')

dotEnv.config()


// console.log()

const client = new Redis({
    host: 'redis',
    port: 6379
})



module.exports = { client }