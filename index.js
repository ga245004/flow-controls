/*jshint esversion : 6*/
console.log("starting..");
const express = require("express");
const path = require('path');

const PORT = process.env.PORT || 5000;

express()
    .use(express.static(path.join(__dirname, 'app')))
    .get('/', (req, res) => res.sendFile(path.join(__dirname, "app", "index.html")))
    .listen(PORT, () => console.log(`Listening on ${PORT}`));