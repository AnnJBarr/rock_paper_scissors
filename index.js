console.log("Welcome to Rock, Paper, Scissors!");

// Obtain a response from the user

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function handleUserResponse(response){
    const options = ['rock', 'paper', 'scissors'];
    //Ignore capitalisation of words
    if (response.toLowerCase() !='rock' && response.toLowerCase() !='paper' && response.toLowerCase() != 'scissor') 
            {
             console.log("Please choose one only of rock, paper or scissors!");
             //readline.question("Please choose again!\n", response); Want to get them to answer again - this doesn't work
            }

    
    //Validate user choice and tell them if they made a mistake

    

    //Make a random selection for the computer

    //Compare the two choices
    //Rock wins over scissors
    //Scissors win over paper
    //Paper wins over rock

    //Report on who won

    console.log("Player chose: ", response);
    readline.close();
    }


readline.question("Please choose either rock, paper or scissors!\n", handleUserResponse);

