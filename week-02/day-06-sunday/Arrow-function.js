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
    //anonym function
    const action1 = function(p) { return p*p }
    //arrow function
    const action2 = (p)=> {return p*p}
    
    multiPurposeFunction(action1)
    multiPurposeFunction(action2)
}

frameFunction();

// In the next exercise write two anonym functions again. This time the returned value is conditional.

// If the first parameter is an empty string, it should return the second parameter. If not, it should return the two parameters joined by a single space.

function multiPurposeFunction(action){
    if (action){
        console.log(action('John', 'Smith'));
        console.log(action('', 'Bond'));        
    }
}

function frameFunction(){
   // Write your code here
   //anonym function
   const action3 =  function(p1,p2)  {
       if (p1 === '') {return p2}
       else {return p1 + ' ' + p2}
   }
   //arrow function
   const action4 = (p1,p2) => {
        if (p1 === '') {return p2}
        else {return p1 + ' ' + p2}
   }
   multiPurposeFunction(action3)
   multiPurposeFunction(action4)

}

frameFunction();