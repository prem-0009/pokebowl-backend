// Your code here.
// (With the following added to get you started.)
// The 2D array we'll need to reference to return the right data.
// Check it out to see its content and shape!
const pokemon = require('./pokemon.js');




// OUR code here.
const getRow = function(userPokemon){
  for ( const char of pokemon){
    if ( char[0] === userPokemon){
      return char
    } 
  }
  return null;
}

if (typeof getRow === 'undefined') {
  getRow = undefined;
}

module.exports = getRow;
