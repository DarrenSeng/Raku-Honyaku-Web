require("dotenv").config()

const mongoose = require('mongoose');

const uri = process.env.MONGO_URI; 

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB!');
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});
