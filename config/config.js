const dotenv = require('dotenv');

/**
 * configuration for development
 */
dotenv.config();
const config = {
    port: process.env.PORT || 4000,
    jwtSecret: process.env.JWT_SECRET || '%$DGHFDIilnh#@#$D',
    mongoURI: process.env.MONGODB_URI ||
        process.env.MONGO_HOST ||
        'mongodb://' + (process.env.IP || 'localhost') + ':' +
        (process.env.PORT || '27017') +
        '/dac-project',
    secretOrKey: "secret"
};

module.exports = config;