// JsonSting to jsonObject
// const jsonString='{"name": "John","age":35,"city":"New York"}';
// const jsonObject=JSON.parse(jsonString);
// console.log(jsonObject.name);
// console.log(jsonObject);

// jsonObject to JsonSting
const jsonToConvert={name: "Alise",age:25};
const jsonStringified=JSON.stringify(jsonToConvert);
console.log(jsonStringified);

console.log(typeof jsonStringified);