//set a variable that displayes a random number between 19-120 √
//give the gems a random number generator from 1-12
//display the random number when clicking the gems
    //variable where a random number is generated when clicking
//the player loses when they go over the random given number
    //add one to "losses"
//the player wins when their total score matches the random number
$(document).ready (function (){ 

    // random number the user is trying to match
    let startNumber = Math.floor((Math.random() * 120) + 19)
    $("#randomnumber.textbox").html("<h1>" + startNumber + "</h1>");
    //
    
    //random number behind the gems
    let gemNumber = Math.floor((Math.random() * 12) + 1)
    $("blue").click(function)



})
