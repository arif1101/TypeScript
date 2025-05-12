{
const names: string[] = [];
names.push('arif')
// names.push(3) here we get error for type
console.log(names)

// Type Inference
// if we create an array with some values, TypeScipt will automatically guess the type of the array based on the values inside
let number: number[] = [1,2,3,4];
console.log(typeof(number))
}