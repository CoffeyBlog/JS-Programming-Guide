


// Anonymous Functions
// Makes code shorter - easier to reason about and more consise


function doIf (condition, func){
    if(condition){
        func
    }
}


const x = 1




doIf (x === 1, function(){
    console.log("x is equal to 1")
})


doIf (x === "Bananas", function(){
    console.log("x is equal to Bananas")
    })


doIf (x < 10 && x > 0, function(){
    console.log("x is between 0 and 10")
})



