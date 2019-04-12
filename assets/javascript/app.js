//VARIABLES
var correct =   0;       //displays number correct
var incorrect = 0;       //displays incorrect
var questions;           //questions array
var timeRemaining = 120;               //time left

//QUESTIONS AND ANSWERS DEFINED
var questions = [
    {
    question: "1. Which of these is NOT a name of the Stark children's direwolves?",
    answer: [" Nymeria", " Ghost", " Lightning"],
    correct: 2,
}, {
    question: "2. Which of these is the name given to the bastards of Dorne?",
    answer: ["Sand", " Pyke", " Snow"],
    correct: 0,
}, {
    question: "3. Who is king of Westeros when the the series begins?",
    answer: ["Aegon Targaryan", " Robert Baratheon", " Tywin Lannister"],
    correct: 1,
}, {
    question: "4 .what must an Unsullied kill to prove he has no mercy or weakness?",
    answer: ["A White-Walker", " A dragon", " A newborn slave child"],
    correct: "2",
}, {
    question: "5. Which of the following types of wine does the wine merchant attempt to poison Daenerys with?",
    answer: ["Stormland Red", " Arbor Red", " Merlot"],
    correct: "1",
}, {
    question: "6. What is the name of Arya Stark's sword?",
    answer: ["Needle", " Pincer", " Valyrian"],
    correct: "0",
}, {
    question: "7. What house has a sigil of a lion?",
    answer:  ["House Lannister", " House Tully", "House Fray"],
    correct: "0",
}, {
    question: "8. By what name do the Seven Kingdoms refer to the Free Folk who live in north beyond the Wall?",
    answer: ["Andals", " Wildlings", " Crow"],
    correct: "1",
}, {
    question: "9. How many men did Theon Greyjoy use to capture Winterfell?",
    answer: ["2000", " 200", " 20"],
    correct: "2",
}, {
    question: "10. Who is Jon Snow's mother?",
    answer: ["Lyanna Stark", " Lyanna Mormont", " Caitlyn Stark"],
    correct: "0",
}];


function displayQA(){
    
    var questionHolder = $("#questions").text(questions);       //display questions in div #questions
    var answerHolder =  $("#answers").text(questions.answer);
    for (var i = 0; i < questions.length; i++) {                  //looops through each question
        questionHolder.html(questions.question[i]); //append eash question to a new div

    //create varibales to hold possible answers
        var answer1 = questions[i].answer[0];
        var answer2 = questions[i].answer[1];
        var answer3 = questions[i].answer[2];

    //reate radio buttons for each possible questions.answer using possible answers
        answerHolder.append(answer1);
        answerHolder.append(answer2);
        answerHolder.append(answer3);
    }
};


// //create a variable that adds each question to the div id="questions"
// var questionHolder = $("#questions").text(questions);
// // console.log(questionHolder);

// //create a variable that turns each answers into clickable options
// var answerHolder =  $("#answers").text(possibleAnswers);       //appends available answers to answers div

// var resultsHolder = $("#results").html("<h3>Your score:</h3>Correct: " + correct +"<br>Incorrect: "+ incorrect);

// //create radio buttons for possibleAnswers


// function setTime() {
//     $("#time").text("Time remaining: " + timeRemaining +" seconds");
//     setInterval(timeRemaining.countdown, 1000);
// };

//     //function to decrement time
// function timeDecr() {
//     gameTimer.timeRemaining--;
//     $("#time").text("Time remaining: " + timeRemaining +" seconds");
// };

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
// //create radio btns that are places before each index in "answers"

//create an if/else statement to check answer
if (questions[i].answer[i] == questions[i].correct[i]) {
    correct++;          //if answer is correct
    } else {
    incorrect++         //else answer is incorrect
}

// //create a variable that adds the corresponding set of answers to the div id="answers"

// // FUNCTIONS

// GAME START
$(document).ready(function(){           //when page loads
    $("#start").click(function(){       //when start button is clicked
        $("#start").hide();             //hide the "Start" button
        displayQA();
//         $("#time").show();
//         $("#questions").show();         //display the questions
//         $("#answers").show();
//         $("#submit").show();            //display dynamically created submit button
//         displayQA();
//         setTime();
//         timeDecr();
    })

//     $("#submit").click(function(){      //when submit is clicked
//         $("#questions").hide();
//         $("#submit").hide();
//         $("#answers").hide();
//         $("#results").show();           //display results
//     })
})

