const request = require('superagent');
const superagent = require ('superagent');

export const fetchCharacters = async()=>{
   return await request.get('https://hey-arnold-api.herokuapp.com/api/v1/characters')
}

