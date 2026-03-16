// function greeter(person: string) {
//     return "Hello, " + person;
// }
// let user = "Meriç";
// console.log(greeter(user));
var greeter = function (firstName, lastName) {
    return "Hello, ".concat(firstName, " ").concat(lastName);
};
var firstName = "Meriç";
var lastName = "Yassine";
console.log(greeter(firstName, lastName));
