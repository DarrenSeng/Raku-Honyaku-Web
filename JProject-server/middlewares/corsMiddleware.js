const cors = require('cors');

const allowedOrigins = [
    'http://localhost:3000',  
    'https://rakuhonyaku.com',
    'https://raku-honyaku-web.vercel.app',
    'https://raku-honyaku.vercel.app'  
];

module.exports = cors({
    origin: allowedOrigins,
    credentials: true
});
