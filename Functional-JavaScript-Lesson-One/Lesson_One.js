

/*


--> This is what traditional OOP looks like:

class ShoppingList {
    constructor(items){
        this.items
    }
    addItem(item){
        this.items.push(item)
    }
}

class ShoppingItem{
    constructor(name,price){
        this.name = namethis.price = price
    }
}


*/


// this same code can be in the functional method like this:

// in functional programming the shoppingList should be an array

// we can define the "add item" function by returning a copy of the list with a new item concatenated

function addItem(list , item) {
    return list.concat(item)
}


// functional programming seperates functions & data
// functional programming makes copies using arrays & maps
// functional programming gives immediate polymorphism


const greet = function(){
    console.log("Hello")
}


const squareRoot = function(x){
    return x * x
}

squareRoot(3)




// Declaring w/ a parentheses
var threeSquared = square(3)                // you can add parameters inside the declaration -- which immediatley transforms it into it's return value
                                            // threeSquared = 9



// Declaring without parentheses
var anotherSquare = square                  // declaring without parentheses is just a representation of the function
anotherSquare(3)









// What are the differences between:

// A.
function doSomething(){
// insert code here
}
doSomething()



// B.
var doSomething = function(){
// insert code here
}
doSomething()



// A. is hoisted to the top of the file ..

// B. -- however is assigned to variables and can only be used after they have been declared





