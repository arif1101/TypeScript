{
    let firstName = "Dylan";
    console.log(firstName)

    // we can declare with type 
    const lastName : string = 'arif';
    console.log(typeof(lastName))

    const json1 = JSON.parse('66') //in TS type is any
    const json2: string = JSON.parse('"55"') // explitely declare type
    console.log(typeof(json1),typeof(json2))//number, string

    // in JavaScript we usually use JSON.parse for objects lik : 
    // for object 

    const user1 = JSON.parse('{"name": "Arif"}');

    type User = {name: string};
    const user2: User = JSON.parse('{"name": "Arif"}')

    console.log(typeof(user1),typeof(user2))
    
}