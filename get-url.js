// Your code here.
// Note that you do NOT need the data for this function!
const getUrl = function(arr){
  if(arr){
    return arr[1];
  }
  return null;
}



// OUR code here.

if (typeof getUrl === 'undefined') {
  getUrl = undefined;
}


module.exports = getUrl; 
