var prompt = require('prompt-sync')();

const ages=prompt("Please enter the age: ");
// const result = ages.filter(checkAge);

// function checkAge(age){
//     return age>=18
// }
if(ages>18)
{
    console.log("You are alligible for the discount.");
}
else{
    console.log("You are not alligible for the discount.");   
}

// console.log(result);