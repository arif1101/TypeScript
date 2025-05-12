{/*

    Union types are use when a value can be more than a sigle type. Such as when a property would be string or number
    
*/}

const printStatusCode = (code: string | number): (string | number) => {
    if(typeof(code) === 'string'){
        return `string is : ${code}`
    }else{
        return `number is : ${code}`
    }
}

console.log(printStatusCode(10))