'use strict'
function repeat(fn, n) {
    for(let i=0; i<n; i++) {
        fn();
    }
}

function hello() {
    console.log('Hello World!!');
}

function goodbye() {
    console.log('Goodbye world!!');
}

repeat (hello, 5);
repeat (goodbye, 5);

function filter(arr, fn) {
    let newArray = [];
    for (let i=0; i<arr.length; i++) {
        if(fn(arr[i]) === true) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;

    return function(location) {
        warningCounter ++;
            console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!!`);
        if(warningCounter === 1) {
            console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!!`);
        }
        else {
            console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!!`);
        }
    }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const fireWarning = hazardWarningCreator('Fire on the Road');
const snowWarning = hazardWarningCreator('Snows on the Road');

rocksWarning("Downtown");
rocksWarning("Main st");
rocksWarning("NYC");

fireWarning("Downtown");
fireWarning("Main st");
fireWarning("NYC");

snowWarning("Downtown");
snowWarning("Main st");
snowWarning("NYC");

rocksWarning('Main St and Pacific Ave');
// => DANGER There is a Rocks on the Road hazard at Main St and Pacific Ave
// => The Rocks on the Road hazard has triggered 1 time(s) today!

rocksWarning('Centinela Ave and Olympic Blvd');
// => DANGER There is a Rocks on the Road hazard at Centinela Ave and Olympic Blvd
// => The Rocks on the Road hazard has triggered 2 time(s) today!

// Invoke the other hazard creators you instantiated, too

const movements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
function noNegatives(arr) {
    return (arr[0] >= 0 && arr[1] >= 0);
}

function noBackOrRight(arr) {
    return arr.filter(noNegatives);
}
let movement2 = (noBackOrRight(movements));

function addNums(arr) {
    return arr[0] + arr[1]
;}

function totalSteps(arr) {
    return arr.map(addNums);
}

let movement3 = (totalSteps(movement2));

function msg(item, index) {
    console.log(`Movement #${index + 1}: ${item} steps`)
}

movement3.forEach(msg);

const index = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
let array = index.split(" ");
let decode = array.reduce(function(total, current)) {
    if(current.length === 3) {
        return (total +=  " ");
    } else {
        return (total += current[current.length-1].toUpperCase());
    }
}

console.log(decode);