//Immediately Invoked Function Expressions(IIFE)
//For immediate function execution and protection from global pollution


//named iife
(function honey(){
    console.log('DB Connected')
})();

//()()

( (name) =>{
    console.log('DB connected two ${name}');
})('tarang')

