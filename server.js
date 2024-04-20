// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user.username);

// fs.appendFile('greeting.txt', 'hi' + user.username + '!', () => { console.log('file created'); });






const notes=require('./notes.js');
console.log("server page");

var age=notes.age;
console.log("age: "+age);

var result =notes.addNumber(age,22)
console.log(result);






// // lodash package
// var _=require('lodash');

// var data=['person','person',1,2,1,2,'name','age','2'];
// var filter= _.uniq(data);
// console.log(filter);