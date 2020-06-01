const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();

console.log(__dirname);
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(require('./../router/routes.js'));
app.set('view engine', 'hbs');


hbs.registerPartials(path.resolve(__dirname, '../views/partials'), function (err) {});


app.listen(3000,  (err) => {
    
    console.log('En puerto 3000');
})