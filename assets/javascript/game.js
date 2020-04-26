//set a variable that displayes a random number between 19-120 √
//give each of the gems a random number generator from 1-12
//display the random number when clicking the gems
    //variable where a random number is generated when clicking
//the player loses when they go over the random given number
    //add one to "losses"
//the player wins when their total score matches the random number

$(document).ready (function (){ 

    //get random number the user is trying to match
    let startNumber = Math.floor((Math.random() * 120) + 19)
    $("#randomnumber.textbox").html("<h1>" + startNumber + "</h1>");
    //

    //test
    console.log(startNumber)
    //

    //get random number behind the gems
    const gemNumber = Math.floor(Math.random() * 12) + 1
    
    //test
    console.log(gemNumber)
    //

    //apply to the click event on the gem 
    function applyGem(){
        $('#numberScore').append ('<div>' + gemNumber + '</div>')
    }

    $("#blue").click(applyGem)
    $("#diamond").click(applyGem)
    $("#green").click(applyGem)
    $("#red").click(applyGem)

    // $('#numberscore').html ("<div>" + value + "</div>") 

    //  $("#blue").click(function(){
    //      $("#numberScore").val(gemNumber)
    //  })
})
