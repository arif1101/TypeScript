{
    // any = do whatever we want, TS won't check
    let bool: any = true
    console.log(bool)
    bool = 'arif'
    console.log(bool)
    bool = 55
    console.log(55);

    // unknown dont't know what this is. we must check before use it
    let value: unknown = 'hello'
    console.log(typeof(value))
    value = 55
    console.log(typeof(value))
    value = 'condition'
    if(typeof value === 'string'){
        console.log(value.toUpperCase())
    }
}