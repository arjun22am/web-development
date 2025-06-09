//access the first variable from the array

let teaFlavors = ["green tea", "black tea", "oolong tea"];

let firstTea = teaFlavors[0];

console.log(firstTea);

//change the second element of array to jasmine tea

teaFlavors = ["green tea", "black tea", "oolong tea"];

teaFlavors[1] = "jasmine tea";

console.log(teaFlavors);

// add an item to an array

let cities = ["mumbai", "delhi", "gujrat"];

cities.push("bangalore");
console.log(cities);

// remove the last item from the array

let states = ["mumbai", "delhi", "gujsrat"];

let names = states.pop(1);
console.log(names);

//create a copy of a array

let populayTeas = ["green tea", "oolong tea", "chai"];
let softcopyteas = [...populayTeas];
populayTeas.pop();
console.log(softcopyteas);

//merge two arrays into one

let european_cities = ["paris", "rome"];
let asian_cities = ["tokyo", "bangkok"];

let worldcities = european_cities.concat(asian_cities);
console.log(worldcities);

let teamenu = ["blacktea", "whitetea"];

let menulength = teamenu.length;
console.log(menulength);

// check if london is in the array and store the result in a varaible named 'islondonInlist'

let citybucketlist = ["kyoto", "london", "capetown", "vancouver"];

let islondonInlist = citybucketlist.includes("london");
console.log(islondonInlist);
