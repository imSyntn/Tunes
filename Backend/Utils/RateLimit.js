// rateLimiter.js
const { rateLimit } = require('express-rate-limit');
const { RedisStore } = require('rate-limit-redis');
const { client } = require('../Model/Redis');

// Define the rate limiter using RedisStore
const rateLimiter = rateLimit({
    store: new RedisStore({
        sendCommand: (...args) => client.call(...args),
    }),
    windowMs: 60 * 60 * 1000, // 1 minute
    max: 3, // limit each IP to 100 requests per windowMs
    handler: (req, res) => {
        res.status(429).json({
            error: 'Limit exceed. Try after 24 hours.',
        });
    }
});

// Export the rate limiter middleware
module.exports = { rateLimiter };
