

function floor(diameter){

    var radius = (diameter / 2)
    var floorArea = Math.PI * (radius * radius)
    return floorArea
} // End of Function





function walls(diameter, height){
    var radius = (diameter / 2)
    var circum = (2 * Math.PI) * radius                // The formula for circumference is C = 2(pi) * radius
    var wallArea = circum * height
    return wallArea
} // End of Function





function materialsNeeded(){
    var d = document.getElementById("across").value   // data gathered from user input on HTML page
    var h = document.getElementById("height").value   // data gathered from user input on HTML page

    var carpetNeeded = Math.ceil(floor(d))                                 // Rounded up to ensure we have enough material
    var paintNeeded = Math.ceil(walls(d, h))                                // Rounded up to ensure we have enough material

    console.log('Carpet needed is ' + carpetNeeded + ' sqft')
    console.log('Paint needed is ' + paintNeeded + ' sqft')


} // End of Function









