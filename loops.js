// Use a do...while loop to console.log the numbers from 1 to 1000.
let i = 0;
do {console.log(i); i++} while (i < 1001);

// Create an object (an array with keys and values) called person with the following data:

//firstName: "Jane"
//lastName: "Doe"
//birthDate: "Jan 5, 1925"
//gender: "female"

var person = {
    
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}

// Use a for...in loop and if statement to console.log the value associated with the key 
// birthDate if the birth year is an odd number.
for (var traits in person) {
    if (traits == "birthDate") {}
    // slice off the last four digits and make them a number instead of a string
    let birthYear = parseInt(person["birthDate"].slice(-4));
    // check to see if they're even
    if (birthYear % 2 != 0){
        // print!
        console.log(birthYear);
    }
}

// Create an arrayOfPersons that contains multiple objects. 
// You can simply copy/paste the person object you made above multiple times. 
// Feel free to change the values to reflect multiple people you might have in your database.
var arrayOfPersons = [{
    
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
},{
    
    firstName: "Crash",
    lastName: "Daddy",
    birthDate: "Feb 4, 1948",
    gender: "male"
},{
    
    firstName: "Leeroy",
    lastName: "Jenkins",
    birthDate: "Jan 99, 1980",
    gender: "male"
},{
    
    firstName: "Fred",
    lastName: "Garvin",
    birthDate: "Oct 12, 1999",
    gender: "male"
}];


// Use .map() to map over the arrayOfPersons and console.log() their information.
const peopleMap = arrayOfPersons.map(person => console.log(person["firstName"]));

// Use .filter() to filter the persons array and console.log only males in the array.
const dudes = arrayOfPersons.filter(dude => dude["gender"] === "male");

console.log(dudes);

// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
const bdFilter = arrayOfPersons.filter(bday => bday["birthDate"].slice(-4) < "1990");
console.log(bdFilter);

