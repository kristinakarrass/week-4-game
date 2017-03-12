$(document).ready(function() {


    // create needed variables
    //-----------------------------------------------------------------------------------------------
    var wins = 0;
    var losses = 0;
    var result = 0;
    var emoji1, emoji2, emoji3, emoji4, randomNumber;

    //create needed functions
    //-----------------------------------------------------------------------------------------------
    $("#rules").click(function(){
        $("#description").toggle();
    })

    function startGame() {
    //create and display random Number
    	randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
   		$("#randomNumber").html(randomNumber);

    // random number associated with each of the four emojis
	    emoji1 = Math.floor(Math.random() * 12 + 1);
	    emoji2 = Math.floor(Math.random() * 12 + 1);
	    emoji3 = Math.floor(Math.random() * 12 + 1);
	    emoji4 = Math.floor(Math.random() * 12 + 1);

        result = 0;
        $("#result").html(result);
    }	


	//function that adds up emojis after each click to user's score

    function compare() {
    if (randomNumber === result) {
        wins++;
        $("#wins").html("Wins: " + wins);
        startGame();
    } else if (randomNumber < result) {
        losses++;
        $("#losses").html("Losses: " + losses);
        startGame();
    } }

    //main game process - clicking emojis, adding up user score and compare it to randomNumber

        $("#emoji-1").on("click", function() {
            $("#result").html(result = parseInt(emoji1) + parseInt(result));
            compare();
        });

        $("#emoji-2").on("click", function() {
            $("#result").html(result = parseInt(emoji2) + parseInt(result));
            compare();
        });

        $("#emoji-3").on("click", function() {
            $("#result").html(result = parseInt(emoji3) + parseInt(result));
            compare();
        });

        $("#emoji-4").on("click", function() {
            $("#result").html(result = parseInt(emoji4) + parseInt(result));
            compare();
        });
    


    //call on functions to play the game
    //---------------------------------------------------------------------------------------------
    startGame();


})
