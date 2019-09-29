// Write a function call in the commented area with an old anonym function and an arrow function. 
// Both anonym functions functions should take a number parameter and return it's square value.
function multiPurposeFunction(action){
    if (action){
        console.log(action(3));        
    }
}

function exampleNonAnonymFunction(param){
    return param*param;
}

function frameFunction(){
    // this function call shows an example,
    // but it is not using anonym functions
    multiPurposeFunction(exampleNonAnonymFunction());
    // write your code here

    function action1(p) {
        return p*p
    }
    multiPurposeFunction(action1)
}

frameFunction();