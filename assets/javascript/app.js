//VARIABLES
var correct =   0;       //displays number correct
var incorrect = 10;       //displays incorrect

//QUESTIONS AND ANSWERS

var questions = [
    {
    question: "Which of these is NOT a name of the Stark children's direwolves?",
    answer: [" Nymeria", " Ghost", " Lightning"],
    correct: 2,
}, {
    question: "Which of these is the name given to the bastards of Dorne?",
    answer: [" Sand", " Pyke", " Snow"],
    correct: 0,
}, {
    question: "Who is king of Westeros when the the series begins?",
    answer: [" Aegon Targaryan", " Robert Baratheon", " Tywin Lannister"],
    correct: 1,
}, {
    question: "What must an Unsullied kill to prove he has no mercy or weakness?",
    answer: [" A White-Walker", " A dragon", " A newborn slave child"],
    correct: 2,
}, {
    question: "Which of the following types of wine does the wine merchant attempt to poison Daenerys with?",
    answer: [" Stormland Red", " Arbor Red", " Merlot"],
    correct: 1,
}, {
    question: " What is the name of Arya Stark's sword?",
    answer: [" Needle", " Pincer", " Valyrian"],
    correct: 0,
}, {
    question: "What house has a sigil of a lion?",
    answer:  [" House Lannister", " House Tully", "House Fray"],
    correct: 0,
}, {
    question: "By what name do the Seven Kingdoms refer to the Free Folk who live in north beyond the Wall?",
    answer: [" Andals", " Wildlings", " Crow"],
    correct: 1,
}, {
    question: "How many men did Theon Greyjoy use to capture Winterfell?",
    answer: [" 2000", " 200", " 20"],
    correct: 2,
}, {
    question: "Who is Jon Snow's mother?",
    answer: [" Lyanna Stark", " Lyanna Mormont", " Caitlyn Stark"],
    correct: 0,
}];

//CREATE A FUNCTION THAT LOOPS THROUGH EACH QUESTIONS

function displayQ(){
    for (var i = 0; i < questions.length; i++){
        //display questions
        $("#questions").append(questions[i].question + "<br>");  
        //display answers as individual objects with radio buttons from bootstrap
        // var answer0 = questions[i].answer[0];
        // $("#questions").append('<input type="radio" name="'+ i +'">' + answer0 + "<br>");    
        // var answer1 = questions[i].answer[1];
        // $("#questions").append('<input type="radio" name="'+ i +'">' + answer1 + "<br>");    
        // var answer2 = questions[i].answer[2];
        // $("#questions").append('<input type="radio" name="'+ i +'">' + answer2 + "<br>"); 
        //Below is a way to DRY code lines 56-63 by looping through the answer array with the question array
    for (var j = 0; j <questions[i].answer.length; j++){
        $("#questions").append('<input type="radio" name="'+ i +'">' + questions[i].answer[j] + "<br>");
}
        console.log(questions)
        // BOOTSTRAP EX:
        // var answer2 = questions[i].answer[2];
        // $("#questions").append('<div class="form-check"><input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked><label class="form-check-label" for="exampleRadios1">' + answer2 + '</label></div><p>');   
    }
}

//RESULTS
//convert the index value into a number
function scoreTracker(){
    if (questions.answer[i] == questions.correct[i]) {
        correct++;          //if answer is correct
        } else {
        incorrect--         //else answer is incorrect
    }
};

var resultsHolder = $("#results").html("<h3>Your score:<h3>Correct: " + correct +"<br>Incorrect: "+ incorrect);

$("#results").hide();
$("#submit").hide();

//TIME
var gameClock = {

    // set the time at 120 seconds, and count down by 1 second
    timeRemaining : 121,
  
    // start the timer, hide the start page, show the questions
    startTimer: function() {
        $("#time").text("You're in the great game now.")
      setInterval(gameClock.countdown, 1000);
    },
  
    // decrement the timer
    countdown: function() {
      gameClock.timeRemaining--;
      $("#time").text("Time remaining: " + gameClock.timeRemaining +" seconds");
      if (gameClock.timeRemaining === 0) {  //at zero seconds
        gameClock = false;                   //stop timer
        $("#time").hide();                  //hide timer
        $("#questions").hide();
        $("#submit").hide();                //hide submit button
        resultsHolder;                      //initiate results variable
        $("#results").show();               //show results
      }
    },
};


$(document).ready(function(){
    $("#start").on("click", gameClock.startTimer);
    $("#start").click(function(){
        $("#start").hide();
        $("#description").empty();
        $("#submit").show();
        displayQ();
    })
    
    $("#submit").click(function(){
        $("#submit").hide();
        $("#time").hide();
        $("#questions").hide();
        gameClock = false;
        resultsHolder;
        $("#results").show();
    });
});