console.log("Notes got printed.");

var age = 22;
function addNumber(a,b){
    return a+b;
}
module.exports = { //the elements indide the module.export only them we can acces in other file 
    age,
    addNumber
}