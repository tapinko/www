const express = require("express");
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/home', 'index.html'));
});

app.get('/nas', (req, res) => {
    res.redirect(301, "https://spse.quickconnect.to/");
});

app.get('/misc/calculator', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/misc/calculator', 'index.html'));
});

app.get('/misc/ip-calc', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/misc/ip-calc', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
