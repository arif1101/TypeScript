const car: {type:string, model:string, year:number} ={
    type: 'toyota',
    model: 'corolla',
    year: 2009
}

car.type = 'ford'
console.log(car.type)

// Index signature 
// we can make an object with keys and values of a certain type, even if you don't know the key names yet.
type ScoreMap = {
    [key: string]: number;
};
const scores: ScoreMap = {
    Arif: 95,
    Rahman: 88,
    Zakiya: 96
};

type ErrorBag = {
    [field: string]: string;
}
const errorMessages: ErrorBag = {
    email: "Invalid email format",
    username: "must start with a letter",
    password: "Too short"
}

type NumberMap = {
    [id: number]: string;
};

const users: NumberMap = {
    1: "Arif",
    2: "Rahman"
}