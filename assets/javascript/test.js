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