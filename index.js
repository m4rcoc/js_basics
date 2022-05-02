
// Key notes of JavaScript course:


var header = function(title){
    console.log(
'\n************************************************\n'
+title+
'\n************************************************');
}


/*
Comparison variables:
*/
header('Comparison Variables')
var a = 10;
var b = '10';
console.log( '10 == \'10\':' , a == b);  // true
console.log( '10 === \'10\':' , a === b); // false


/*
Get type of variable:
*/
header('Typeof variable (debug dynamic feature)');
var x = 10
console.log( 'typeof 10:' , typeof x);
x='10'; // the type is dynamic
console.log( 'typeof \'10\':' , typeof x);


header('Null and Undefined examples');
// Null and Undefined:
var varNull = null;
//var varUndefined; // same that ->  var varUndefined = undefined;
var varUndefined = undefined;

console.log( 'Null and Undefined (==): ' , varNull == varUndefined);
console.log( 'Null and Undefined (===): ' , varNull === varUndefined);

console.log( 'typeof Null:' , typeof varNull);
console.log( 'typeof Undefined:' , typeof varUndefined);



/*
Useful variables declaration syntax:
*/
header('Struct/Object example');
// "structs"/objeto
var struct = {
    name: 'Marco',
    lastName: 'Condori',
    age: 24
}
console.log(struct , struct.name);

