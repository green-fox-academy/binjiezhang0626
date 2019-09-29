// ES6 made creating objects also easier. If you look at the code below you can see how attributes were assigned in newly created objects. 
// With ES6 you can use dynamic properties in creation, not just after it, and if the property name is the same as the variable name, then you can shorthand those variables.

function carWrapper(model, color, year, doors, specPropName, specPropValue){
    // the function should create and return an object with assigning the model, color year and doors to properties with the same name as the variable and it should assign to the specPropName named property the specPropValue
    //ES5

    var result = {
        model: model,
        color: color,
        year: year,
        doors: doors,
    }
    result[specPropName]=specPropValue
    return result
    
    //ES6
    var result = {
        model,
        color,
        year,
        doors,
        [specPropName] : specPropValue
    }
    return result
}

console.log(JSON.stringify(carWrapper('Benz','black',1886,0,'historical',true)));
// // expected output: { model: 'Benz', color: 'black', year: 1886, doors: 0, historical: true}