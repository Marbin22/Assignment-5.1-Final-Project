function check()
{
var firstname = document.getElementById("Name1").value;
var lastname = document.getElementById("Name2").value;// gets the first and last name and males a variable

var fullname = (firstname + " " + lastname); // combines first and last name with a space in the middle
//alert(fullname)
var count = fullname.length; // counts the number of characters in full name including the space
//alert(count)


if (count < 21)// if the number of character is less than 21 because the max allowed is 20 
{
    document.getElementById("validation").innerHTML = "valid name"
    document.getElementById("Zip-Code").style.display="block"   //display second part of form if requirements are met
    document.getElementById("firstcheck").style.display="none" // if true display success message and get rid of first check box


} else  {
    document.getElementById("validation").innerHTML = "Warning: invalid name character count cant be greater than 20"//display warning 
    document.getElementById("Zip-Code").style.display="none"// do not display zip code part
    document.getElementById("firstcheck").style.display="block"// if characters are more than 20 keep the check button
}
}
function check2(){
var zipcode = document.getElementById("zipcode").value;// get zipcode and turn it into variable

var zipcount = zipcode.length; //count the character length of zipcode

if (zipcount < 6) {//if there are more than 5 characters 
    document.getElementById("validation1").innerHTML = "valid zip"//success message
    document.getElementById("submit").style.display="block"//display submit button/refresh
    document.getElementById("secondcheck").style.display="none"// get rid of second check button
    document.getElementById("secretmessage").style.display="block"// display secret message
} else {
    document.getElementById("validation1").innerHTML = "Warning: invalid zip"// if theirs more than 5 characters display warning
    document.getElementById("submit").style.display="none"//do not display submit button or get rid of it 
    document.getElementById("secondcheck").style.display="block"// keep second check

}
}

function refresh()//refresh page function
{
    window.location.reload();//refresh page
}