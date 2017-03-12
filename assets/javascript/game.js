$(document).ready(function() {


    // create needed variables
    //-----------------------------------------------------------------------------------------------
    var wins = 0;
    var losses = 0;
    var result = 0;
    var emoji1, emoji2, emoji3, emoji4, randomNumber;

    //create needed functions
    //-----------------------------------------------------------------------------------------------
    
    function startGame() {
    //create and display random Number
    	randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
   		$("#randomNumber").html(randomNumber);

    // random number associated with each of the four emojis
	    emoji1 = Math.floor(Math.random() * 12 + 1);
	    emoji2 = Math.floor(Math.random() * 12 + 1);
	    emoji3 = Math.floor(Math.random() * 12 + 1);
	    emoji4 = Math.floor(Math.random() * 12 + 1);

    }	


	//function that adds up emojis after each click to user's score

    function updateGame() {

    while (randomNumber < result) {
    
    if (randomNumber > result) {
        losses++;
        $("#losses").html(losses);
        startGame();
    } else if (randomNumber === result) {
        wins++;
        $("#wins").html(wins);
        startGame();
    }else {

        $("#emoji-1").on("click", function() {
            $("#result").html(result = parseInt(emoji1) + parseInt(result));
        });

        $("#emoji-2").on("click", function() {
            $("#result").html(result = parseInt(emoji2) + parseInt(result));

        });

        $("#emoji-3").on("click", function() {
            $("#result").html(result = parseInt(emoji3) + parseInt(result));
        });

        $("#emoji-4").on("click", function() {
            $("#result").html(result = parseInt(emoji4) + parseInt(result));
        });
    }}

    //call on functions to play the game
    //---------------------------------------------------------------------------------------------
    startGame();

    updateGame(randomNumber, result);

    gameWon();

});
