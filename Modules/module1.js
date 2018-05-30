function myFunction() {
    console.log('my function called');
}

var myString = 'String!';

//export module for use in other files
module.exports.myFunction = myFunction;
module.exports.myString = myString;