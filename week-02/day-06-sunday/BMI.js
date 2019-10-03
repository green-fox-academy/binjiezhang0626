//Write a function that takes an object with mass and height fields. 
//Return a new object with the original fields and a new bmi field with the calculated bmi value.

function generateBMI(body) {
    let {mass, height} = body
    return {
        mass,
        height,
        bmi: mass / (height * height)
    }
}

let man = {mass: 80, height: 1.8}
let manBMI = generateBMI(man)
console.log(manBMI)