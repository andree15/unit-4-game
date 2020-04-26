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
    let array= ['1','2', '3', '4', '5', '6', '7', '8', '9','10','11','12']
    const gemNumber = Math.floor(Math.random() * array.length)
    
    //test
    console.log(gemNumber)
    //

    //apply to the gem 
    function applyGem(){
        $('#numberScore').html ('<div>' + gemNumber + '</div>')
    }

    //call the function
    $("#blue").click(applyGem)
    $("#diamond").click(applyGem)
    $("#green").click(applyGem)
    $("#red").click(applyGem)

//if they get to the right number make their wins increase by 1
if("#numberScore" === "#randomnumber"){
    wins++
}

//if they get the number wrong, decrease by 1
else { ("#numberScore" > "#randomnumber")
    losses++
}


$('#wins' + 1).html


})


/*this was challenging to convert javascript into jquery. I think if this was in 
javascript I think I could have gotten further and done a bit better.
*/