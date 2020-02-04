
let i = 0;
do {console.log(i); i++} while (i < 1001);

var person = {
    
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}

for (var traits in person) {
    if (traits == "birthDate") {}
    let birthYear = parseInt(person["birthDate"].slice(-4));
    if (birthYear % 2 != 0){
        console.log(birthYear);
    }
}


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

const peopleMap = arrayOfPersons.map(person => console.log(person["firstName"]));


const dudes = arrayOfPersons.filter(dude => dude["gender"] === "male");

console.log(dudes);

const bdFilter = arrayOfPersons.filter(bday => bday["birthDate"].slice(-4) < "1990");

console.log(bdFilter);

