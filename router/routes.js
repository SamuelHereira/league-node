const express = require('express');
const request = require('request-promise');
const app = express();

app.get('/', (req, res) => {
    res.render('index', {name: 'samuel'});
})

app.get('/champions', (req, res) => {

    let uri = 'http://ddragon.leagueoflegends.com/cdn/10.11.1/data/en_US/champion.json';
    let api_key = 'RGAPI-7aeb99cb-f040-4b86-9ce6-60b1eb46c363';

    request({
        uri: `${uri}?api_key=${api_key}`,
        json: true
    }).then((result) => {
        res.render('champs', {champs: result.data})
    }).catch((err) => {
        
    });

})

app.get('/champions/:champ_name', (req, res) => {
    let url = 'http://ddragon.leagueoflegends.com/cdn/10.11.1/data/en_US/champion';
    let api_key = 'RGAPI-7aeb99cb-f040-4b86-9ce6-60b1eb46c363';
    let  champName = req.params.champ_name;
    champName = champName.charAt(0).toUpperCase() + champName.slice(1)

    request({
        url: `${url}/${champName}.json?api_key=${api_key}`,
        json: true
    }).then((champ) => {
        
        res.render('champ', {champ: champ.data[champName]} );
    }).catch((err) => {
        
    });
})



module.exports = app;