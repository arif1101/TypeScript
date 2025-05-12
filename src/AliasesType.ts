{
    // Type Aliases allow defining types with a custom name (an Alias)
    // Type Aliases can be used for primitives like string or more complex types such as objects and arrays

    type CarYear = number;
    type CarType = string;
    type CarModel = string;
    type Car = {
        year: CarYear,
        type: CarType,
        model: CarModel
    }
    const carYear: CarYear = 2001;
    const carType: CarType = "Toyota";
    const carModel: CarModel = "Corolla";

    const car: Car = {
        year: carYear,
        type: carType,
        model: carModel
    }
    console.log(car)


    {/*
    // Interfaces
    // Interfaces are similar to type aliases, except they only apply to object types.

    A). Type Alias can describe anything:
    1.primitives, 2.objects, 3.Arrays, 4.functions, 5.union types etc

    B). Interfa is used only for object types
    
    */}
    
    console.log('------- Interfaces ------')
    interface Rectangle {
        height: number,
        width: number
    }

    const rectangle: Rectangle = {
        height: 20,
        width: 10
    };
    console.log(rectangle)

    {/*
        Extending Interfaces
        Interfaces can extend each other's definition
        Extending an interface means we are creating a new interface with the same properties as the original, plus something new.
    */}
    console.log('------ Extend Interfaces -----')
    interface ColoredRectangle extends Rectangle {
        color: string
    }
    const coloredRectangle: ColoredRectangle = {
        height:20,
        width:10,
        color: 'red'
    }
    console.log(coloredRectangle)

    
}