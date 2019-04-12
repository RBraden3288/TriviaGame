//VARIABLES
var correct =   0;       //displays number correct
var incorrect = 0;       //displays incorrect
var quiz =      "";      //ques question
var guess =     "";      //will hold the user's guess
var answer =    "";      //will hold the CORRECT answer
var timer;

//DEFINE FUNCTIONS
var askQuestions = function(){      //ask variable which will input each question

}

//(WORKING)dynamically create a submit button to append after questions
var submitButtonAddOn = document.getElementById("questions");
    var submitButton = document.createElement("button");
    submitButton.textContent="Answers are coming.";                              //dynamically create a submit button                                    
    submitButtonAddOn.appendChild(submitButton); 
    //make it work so that it only appends to div after questions


function clockStart(){
   timer = setTimeout(20000);     //define timer variable
   timer--;
   $("#time").text(timer);        //display timer
                                  //if time runs out display new page
};

function clockStop(){             //stops timer
    clearTimeout(timer);
}

var score = function(){         //a score variable that will function to keep track of correct and incorrect scores
    if(guess == answer){        //if guess is the correct answer
        correct = correct++;    //or correct/incorrect+1 ?
    }else{
        incorrect = incorrect++;    
    }
};

var showResults = function (){

};

//INITIALIZE GAME
$(document).ready(function(){           //when page loads
    $("#start").click(function(){       //when start button is clicked
        $("button").hide();             //hide the button
        clockStart();                        //start the clock function
        askQuestions();                 //display questions

        });
                                        
$("submit").click(function(){   //when submit button is pressed                              
    clockStop();                      //if time is not up
                                      //else load result page anyway with unsubmitted answers having incorrect score
    $("#results").html("Correct: " + correct + "<br>Incorrect: " + incorrect)                                 //show results when time is up
});

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

//create a variable that turns each answers into clickable options
var answerHolder =  $("#answers").text(possibleAnswers[0]);       //appends available answers to answers div

var questions = [{
    question: "1. Which of these is NOT a name of the Stark children's direwolves?",
    answer: [" Nymeria", " Ghost", " Lightning"],
    correct: "2",
}, {
    question: "2. Which of these is the name given to the bastards of Dorne?",
    answer: ["Sand", " Pyke", " Snow"],
    correct: "0",
}, {
    question: "3. Who is king of Westeros when the the series begins?",
    answer: ["Aegon Targaryan", " Robert Baratheon", " Tywin Lannister"],
    correct: "1",
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




/////////////////////////////////////app.js//////////////////

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

    //create radio buttons for each possible questions.answer using possible answers
    
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


function setTime() {
    $("#time").text("Time remaining: " + timeRemaining +" seconds");
    setInterval(timeRemaining.countdown, 1000);
};

    //function to decrement time
function timeDecr() {
    gameTimer.timeRemaining--;
    $("#time").text("Time remaining: " + timeRemaining +" seconds");
};

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

