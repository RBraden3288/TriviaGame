//VARIABLES
var correct =   0;       //displays number correct
var incorrect = 0;       //displays incorrect
var guess =     "";      //will hold the user's guess
var questions;           //questions array
var possibleAnswers;     //will hold the array of answer options
var correctAnswers;      //correct Answer with letter designation
var timeRemaining;               //time left

//QUESTIONS AND ANSWERS DEFINED
questions = [
    "1. Which of these is NOT a name of the Stark children's direwolves?",
    "2. Which of these is the name given to the bastards of Dorne?",
    "3. Who is king of Westeros when the the series begins?",
    "4 .what must an Unsullied kill to prove he has no mercy or weakness?",
    "5. Which of the following types of wine does the wine merchant attempt to poison Daenerys with?",
    "6. What is the name of Arya Stark's sword?",
    "7. What house has a sigil of a lion?",
    "8. By what name do the Seven Kingdoms refer to the Free Folk who live in north beyond the Wall?",
    "9. How many men did Theon Greyjoy use to capture Winterfell?",
    "10. Who is Jon Snow's mother?",
];
// console.log(questions[0]);

possibleAnswers = [
    [" Nymeria", " Ghost", " Lightning"],
    ["Sand", " Pyke", " Snow"],
    ["Aegon Targaryan", " Robert Baratheon", " Tywin Lannister"],
    ["A White-Walker", " A dragon", " A newborn slave child"],
    ["Stormland Red", " Arbor Red", " Merlot"],
    ["Needle", " Pincer", " Valyrian"],
    ["House Lannister", " House Tully", "House Fray"],
    ["Andals", " Wildlings", " Crow"],
    ["2000", " 200", " 20"],
    ["Lyanna Stark", " Lyanna Mormont", " Caitlyn Stark"]
];
// console.log(answers[0][1]);

//dynamically create a radio button before each possibleAnswer

correctAnswers  = [
    "C. Lightning",
    "A. Sand",
    "B. Robert Baratheon",
    "C. A newborn slave child",
    "B. Arbor Red",
    "A. Needle",
    "A. House Lannister",
    "B. Wildlings",
    "C. 20",
    "A. Lyanna Stark"
]
// console.log(correctAnswers.length);

//create a variable that adds each question to the div id="questions"
var questionHolder = $("#questions").text(questions);
// console.log(questionHolder);

//create a variable that turns each answers into clickable options
var answerHolder =  $("#answers").text(possibleAnswers);       //appends available answers to answers div

var resultsHolder = $("#results").html("<h3>Your score:</h3>Correct: " + correct +"<br>Incorrect: "+ incorrect);

//create radio buttons for possibleAnswers

// var gameTimer ={

//     timeRemaining = 120,    //seconds remaining in timer

//     //function to set time
//     function() {
//         $("#time").text("Time remaining: " + gameTimer.timeRemaining);
//         setInterval(gameTimer.countdown, 1000);
//         $("#time").hide();      //hide until clicked
//     },

//     //function to decrement time
//     function() {
//         gameTimer.timeRemaining--;
//     }
// }

//hide divs until click event
$(function(){
    $("#questions").hide();
})
$(function(){
    $("#submit").hide();
})
$(function(){
    $("#answers").hide();
})
$(function(){
    $("#results").hide();
})
//create radio btns that are places before each index in "answers"

//create an if/else statement to check answer
if (possibleAnswers[0] == correctAnswers[0]) {
    correct++;          //if answer is correct
    } else {
    incorrect++         //else answer is incorrect
}

//create a variable that adds the corresponding set of answers to the div id="answers"

// FUNCTIONS

//GAME START
$(document).ready(function(){           //when page loads
    $("#start").click(function(){       //when start button is clicked
        $("#start").hide();             //hide the "Start" button
        $("#time").show();
        $("#questions").show();         //display the questions
        $("#answers").show();
        $("#submit").show();            //display dynamically created submit button
    })

    $("#submit").click(function(){      //when submit is clicked
        $("#questions").hide();
        $("#submit").hide();
        $("#answers").hide();
        $("#results").show();           //display results
    })
});


