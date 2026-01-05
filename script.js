// let name = "mohib"
// let age = "23"
// let into = `ich bin ${name}, ich bin ${age} jahre alt`

// console.log(into);
// console.log(into.length); 
// console.log(into.charAt(28)); 
// console.log(typeof into);

// let num = 123.456;
// console.log(num.toFixed(2)); // "123.46" (দশমিকের পরে 2 digit)
// console.log(parseInt("50")); // 50 (string থেকে integer)
// console.log(parseFloat("3.14")); // 3.14 (string থেকে float)

let name; // Declared but not initialized
console.log(name); // undefined

let person = {
    firstName: "Karim",
    // lastName is not defined
};
console.log(person.lastName); // undefined

function test() {
    // No return statement
}
console.log(test()); // undefined (function কিছু return করেনি)