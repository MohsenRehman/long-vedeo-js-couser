// Truthy and falsey
// let age = 21;
// if (age){
//     console.log('You have a valid age');
// }else {
//     console.log('Ap jin hai');
// }

 
// let age = 0;
// console.log(age);
// if (age){
//     console.log('You have a valid age');
// }else {
//     console.log('Ap jin hai');
// }
//  in this print the ap jin ahi because age is undefined



// let age = 30;
// console.log(age);
// if (age){
//     console.log('You have a valid age');
// }else {
//     console.log('Ap jin hai');
// }
// Falsy Values inlcuded = 0 , nul , undefined , false , NaN , empty , string.



// let age = null;
// console.log(age);
// if (age){
//     console.log('You have a valid age');
// }else {
//     console.log('Ap jin hai');
// }
// in this condition the second value are printed because the age is null


let age = 41/'horse';
console.log(age);
if (age){
    console.log('You have a valid age');
}else {
    console.log('Ap jin hai');
}
// in this codition the second value are printed because the 41/horse are Not a number



// Al values not in listed of falsy 
// Non Boolean number are auto converted in logical operations
// be explicit in comparisons to avoid unexpected behaviour