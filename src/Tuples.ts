{
// What is tuples 
// A tuple is a fixed-length array where each position has a specific type

let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'Coding star was here'];
console.log(ourTuple)

type Result = [boolean, string];
let loginResult: Result = [true, "Login successful"]
console.log(loginResult)

type User = [string, number];
function getUser(): User {
    return ["John Doe", 30];
}
console.log(getUser())

type OptionalTuple = [string, number?];
let optionalTuple1: OptionalTuple = ['item1'];
let optionalTuple2: OptionalTuple = ['item2',100];
console.log(`Optional Tuple 1: ${optionalTuple1}`)
console.log(`Optional Tuple 2: ${optionalTuple2}`)

// Destructuring Tuples 
let employee: [string, number, string] = ['Arif', 101, 'Developer'];
let [name, id, role] = employee;
console.log(name, id, role)

// Nested Tuples 
type NestedTuple = [string, [number, boolean]];
let nestedTuple: NestedTuple = ['Outer', [42, true]];
console.log(nestedTuple[0], nestedTuple[1], nestedTuple[1][0], nestedTuple[1][1])

}