{// the `: number` here specifies that this function returns a number. If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.
function getTime(): number {
    return new Date().getTime();
}
console.log(getTime())

{/*
    Void Return Type
    the type void can be used to indicate a function doesn't return any value.
*/}
function printHello(): void{
    console.log('Hello')
}
printHello()

// Parameters - Function parameters are typed with a similar suntex as variable declarations 
function multiply(a:number, b:number):number{
    return a*b;
}
console.log(multiply(2,4))

// Optional Parameters - By default TypeScript will assume all parameters are required, but they can be explicitly marked as option 
// note : optional parameters come after all required parameters
function add1(str:string, a:number, b:number, c?:number, ){
    return `${str} is : ${a+b+(c || 0)}`
}
console.log(add1("add",2,5))

// Named parameters
function add2({str, a, b, c=0}:{str:string, a:number, b:number, c?:number}): string{
    return `${str} is : ${a+b+c}`;
}
console.log(add2({str:'add',a:2,b:4,c:5}))

// Rest Parameters -> Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays
function add(a: number, b: number, ...rest:number[]){
    return a+b+rest.reduce((p,c) => p+c,0);   
}
console.log(add(4,6,7,5))

// Type Alias -> Function types can be specified seperately from function wiht type aliases. These types are written similarly to arrow functions.

// Example - 1
type MathOperation = (a:number, b:number) => number;
const add3: MathOperation = (a,b) => a+b;
const sub1: MathOperation = (a,b) => a-b;
console.log(add3(5,3))
console.log(sub1(5,3))

// Example - 2
type Greet = (name: string, greeting?:string) => string;
const sayHello: Greet = (name, greeting = "Hello")=> `${greeting}, ${name}!`;
console.log(sayHello('Alice'))
console.log(sayHello("Bob", "Hi"))

// 1. API Response Handler 
type ApiResponseHandler = (statusCode:number, message:string) => void;
const handleApiResponse: ApiResponseHandler = (statusCode, message) => {
    if(statusCode === 200){
        console.log(`Success: ${message}`);
    }else{
        console.error(`Error ${statusCode}: ${message}`)
    }
};
handleApiResponse(200, "Data fetched successfully")
handleApiResponse(404, "Resource not found");
}