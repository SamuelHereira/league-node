const request = require('request-promise');

let getChampions = ( ) => {

    let url = 'http://ddragon.leagueoflegends.com/cdn/10.11.1/data/en_US/champion.json';
    let api_key = 'RGAPI-7aeb99cb-f040-4b86-9ce6-60b1eb46c363';

    request({
        uri: `${url}?api_key=${api_key}`,
        json: true
    }).then((result) => {
        return result;   
    }).catch((err) => {
        console.log(err);
    });
}   

let getChampionByName = ( name ) => {

}

module.exports = {
    getChampions,
}