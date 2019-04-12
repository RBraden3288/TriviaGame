//VARIABLES
var correct =   0;       //displays number correct
var incorrect = 0;       //displays incorrect
var questions;           //questions array

//RESULTS
var resultsHolder = $("#results").html("<h3>Your score:<h3>Correct: " + correct +"<br>Incorrect: "+ incorrect);

$("#results").hide();
$("#submit").hide();

//TIME
var gameClock = {

    // set the time at 120 seconds, and count down by 1 second
    timeRemaining : 3,
  
    // start the timer, hide the start page, show the questions
    startTimer: function() {
      $("#time").text("Time remaining: " + gameClock.timeRemaining +" seconds");
      setInterval(gameClock.countdown, 1000);
    },
  
    // decrement the timer
    countdown: function() {
      gameClock.timeRemaining--;
      $("#time").text("Time remaining: " + gameClock.timeRemaining);
      if (gameClock.timeRemaining === 0) {  //at zero seconds
        clearInterval();                    //stop timer
        $("#time").hide();                  //hide timer
        $("#submit").hide();                //hide submit button
        resultsHolder;                      //initiate results variable
        $("#results").show();               //show results
      }
    },
};


$(document).ready(function(){
    $("#start").on("click", gameClock.startTimer);
    $("#start").click(function(){
        $("#submit").show();
    })
    
    $("#submit").click(function(){
        $("#submit").hide();
        clearInterval(gameClock);
    });
});