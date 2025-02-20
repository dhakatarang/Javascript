const user={
    username:"Tarang",
    price:99,

    welcomeMessage: function(){
        console.log('${this.username}, Welcome to website');
        console.log(this);
    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

console.log(this);
//this is used within an object only we can't use it in a function
function honey(){
    let username="tarang"
    console.log(this);
}
honey()


const honey=function(){
    let username="tarang"
    console.log(this.username);
}
honey()

//remove function and add arrow after ()
const honey= () =>{
    let username="tarang"
    console.log(this.username);
}
honey()





// () => {}
//explicit return
const addTwo=(num1, num2) =>{
    return num1 + num2
}
console.log(addTwo(3,4))


// implicit function if curly braces present then use return else without return it works
const addtwo=(num1, num2) =>(num1 + num2)
console.log(addtwo(3,4))

//to return an object we need to include it within the curly braces
const person = () => ({username:"tarang"})
console.log(person)

//const myArray =[2,5,6,7,8]
//myArray.forEach(()=>())