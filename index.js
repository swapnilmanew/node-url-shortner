const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const port = 3000;
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://quotesapi:vayyTUJEKJhEsuWz@cluster0.mwy0g.mongodb.net/url_shortner?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('MongoDB connected.'));

// routes
const urlRoutes = require("./api/routes/url_routes.js");
app.use(urlRoutes);
app.get("/", (req, res) => res.json({ "msg": "An API for shortening the urls developed by Swapnil Mane" }));
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})
