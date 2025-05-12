 // What is Casting?
// Casting in TypeScript is a way to tell the compiler to treat a variable of one type as if it were another type. 
// It is often used when you have a variable with a less specific type (e.g., unknown or any) and you want to narrow 
// it down to a more specific type so you can access its properties or methods safely.

// Why Do We Need Casting?
// Casting is useful when:
// 1. Type Inference is Insufficient: The compiler cannot infer the type of a variable, and you need to provide additional information.
// 2. Interoperability: When working with APIs or libraries that return generic types like any or unknown, casting helps you specify the expected type.
// 3. Avoiding Errors: It allows you to access properties or methods of a specific type without TypeScript throwing an error.

// Real-World Example
// Imagine you're working with a JSON API that returns data as unknown. You need to cast it to a specific type to work with it.

const jsonResponse: unknown = '{"name": "Alice", "age": 25}';

// Cast the unknown type to a specific type
interface User {
  name: string;
  age: number;
}

const user = JSON.parse(jsonResponse as string) as User;

console.log(user.name); // Output: Alice
console.log(user.age);  // Output: 25

// Example of basic casting
let x: unknown = 'hello';
console.log((x as string).length);

// Casting with <>
let y: unknown = 'hello';
console.log((<string>y).length);