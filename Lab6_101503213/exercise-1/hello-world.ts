// function greeter(person: string) {
//     return "Hello, " + person;
// }

// let user = "Meriç";
// console.log(greeter(user));

let greeter = (firstName: string, lastName: string): string => {
    return `Hello, ${firstName} ${lastName}`;
};

let firstName: string = "Meriç";
let lastName: string = "Yassine";

console.log(greeter(firstName, lastName));