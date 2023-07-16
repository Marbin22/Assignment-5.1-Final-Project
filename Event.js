var intervalidUp = 0;//var of the interval that moves the img up
var intervalidDown = 0;//var of the interval that moves the img down
var intervalidLeft = 0;//var of the interval that moves the img left
var intervalidRight = 0;//var of the interval that moves the img right
var change = 300;//variable that changes the position of img

function StartMovingDown()//function that moves the img down
{
    document.getElementById("Up").disabled = true;//disables the up button once clicked
    document.getElementById("Down").disabled = true;//disables the down button once clicked
    document.getElementById("Right").disabled = true;//disables the right button once clicked
    document.getElementById("Left").disabled = true;//disables the left button once clicked
    document.getElementById("stopbutton").disabled = false;//enables the stop button 

    var image = document.getElementById("spider");//gets the spider img
    

    intervalidDown = setInterval(function() {//gives the intervalidDown  a function
 
        image.style.top = change + "px";//adds the change value to the top px number

        change += 5; //sets change to 5
        document.getElementById("msg").innerHTML = "X px = " + image.style.left + " y px = " + image.style.top;//displays the x and y value
    }, 500);

   
}
function StartMovingRight()//function that moves the img Right
{
    document.getElementById("Up").disabled = true;//disables the up button once clicked
    document.getElementById("Down").disabled = true;//disables the down button once clicked
    document.getElementById("Right").disabled = true;//disables the right button once clicked
    document.getElementById("Left").disabled = true;//disables the left button once clicked
    document.getElementById("stopbutton").disabled = false;//enables the stop button 

    var image = document.getElementById("spider");//gets the spider img
    
 
    intervalidRight = setInterval(function() {//gives the intervalidRight a function
  
        image.style.left = change + "px";//adds the change value to the Left px number

        change += 5;//sets change to 5
        document.getElementById("msg").innerHTML = "X px = " + image.style.left + " y px = " + image.style.top;//displays the x and y value
    }, 500);

   
}
function StartMovingLeft()//function that moves the img Left
{
    document.getElementById("Left").disabled = true;//disables the left button once clicked
    document.getElementById("Up").disabled = true;//disables the up button once clicked
    document.getElementById("Down").disabled = true;//disables the down button once clicked
    document.getElementById("Right").disabled = true;//disables the right button once clicked
    document.getElementById("stopbutton").disabled = false;//enables the stop button 

    var image = document.getElementById("spider");//gets the spider img
    
    intervalidLeft = setInterval(function() {//gives the intervalidLeft a function

        image.style.left = change + "px";//subtracts the change value to the left px number

        change -= 5; //sets change to 5
        document.getElementById("msg").innerHTML = "X px = " + image.style.left + " y px = " + image.style.top;//displays the x and y value
    }, 500);

   
}
function StartMovingUp()//function that moves the img up
{
    document.getElementById("Up").disabled = true;//disables the up button once clicked
    document.getElementById("Down").disabled = true;//disables the down button once clicked
    document.getElementById("Right").disabled = true;//disables the right button once clicked
    document.getElementById("Left").disabled = true;//disables the left button once clicked
    document.getElementById("stopbutton").disabled = false;//enables the stop button 

    var image = document.getElementById("spider");//gets the spider img
    
    intervalidUp = setInterval(function() {//gives the intervalidUp a function
    
        image.style.top = change + "px";//subtracts the change value to the top px number

        change -= 5; //sets change to 5
        document.getElementById("msg").innerHTML = "X px = " + image.style.left + " y px = " + image.style.top;//displays the x and y value
    }, 500);

   
}


function stop()
{
    document.getElementById("Up").disabled = false;//disables the up button once clicked
    document.getElementById("Down").disabled = false;//disables the down button once clicked
    document.getElementById("Left").disabled = false;//disables the left button once clicked
    document.getElementById("Right").disabled = false;//disables the right button once clicked
    document.getElementById("stopbutton").disabled = true;//enables the stop button 

    clearInterval(intervalidUp);
    clearInterval(intervalidDown);
    clearInterval(intervalidLeft);
    clearInterval(intervalidRight);
}