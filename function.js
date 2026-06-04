function show(){
    console.log("display");
}
show();

// variable assigning 
var bottle;
bottle="water";
console.log(bottle);

//variable reassigning
var pen="black";
console.log(pen);

//variable hoisting
console.log(num);
var num=10;

//let assigning
let name;
name="virat";
console.log(name);

//let reassigning
name="kohli";
console.log(name);

//let hoisting but temporal dead zone
//console.log(age);
//let age=22;

//const assigning
const phoneNumber=525514325;
console.log(phoneNumber);

//const hoisting but this will give error becuase const is in temporal dead zone
//console.log(pincode);
//const pincode=572137;
