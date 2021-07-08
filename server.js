const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

//Routes
app.use(require('./routes/api-Routes.js'));
app.use(require('./routes/html-Routes.js'));

app.listen(PORT, () => {
    console.log(`Workout Tracker app is now running on Port ${PORT}!`);
});