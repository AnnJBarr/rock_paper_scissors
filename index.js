console.log("Welcome to Rock, Paper, Scissors!");

// Obtain a response from the user

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function handleUserResponse(response){
    const options = ['rock', 'paper', 'scissors'];
    console.log(response.toLowerCase());
    //Ignore capitalisation of words
    if (!(response.toLowerCase() ==='rock' || response.toLowerCase() ==='paper' ||  response.toLowerCase() === 'scissor') )
            {var notvalid = true;
            console.log("Your response is not valid");
             //readline.question("Please choose again!\n", response); Want to get them to answer again - this doesn't work
            } else { var notvalid = false
                console.log("I like your response");}
            console.log(notvalid);
    
    //Validate user choice and tell them if they made a mistake

    

    //Make a random selection for the computer
    var randomint = Math.floor(Math.random() * (3));
    console.log(randomint);
    var compplay = options[randomint];
    console.log("Computer chose: ", compplay);
    console.log("Player chose: ", response);
    
    //Compare the two choices
    //Rock wins over scissors
    //Scissors win over paper
    //Paper wins over rock
    //Report on who won
    if (notvalid == false){
        if (response.toLowerCase() === compplay) {
            console.log("It's a draw!")
        } else {
            if (response.toLowerCase() === 'rock' && compplay === 'scissors'
                || response.toLowerCase() === 'scissors' && compplay === 'paper'
                || response.toLowerCase() === 'paper' && compplay === 'rock') {
                    console.log("Player wins!")
                } else console.log("Computer wins!");
        }
    } else {
        console.log("You must choose one of rock, paper or scissors - please play again");
    }    
    

    
    readline.close();
    }


readline.question("Please choose either rock, paper or scissors!\n", handleUserResponse);

