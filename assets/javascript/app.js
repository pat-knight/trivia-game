//global var
// var questions = [];
var game;
currentQuestion = 0;
timer = 30;
gameOver = false;

function init() {
    
    game = resetGame();
}
//question and answers init/declare

var questions = [
        {
            question: 'q',
            answers: ['c', 'x', 'y', 'z'],
            correct: 0

        },
        {
            question: 'q',
            answers: ['z', 'x', 'y', 'c'],
            correct: 3
        },
        {
            question: 'q',
            answers: ['x', 'c', 'y', 'z'],
            correct: 1
        },
        {
            question: 'q',
            answers: ['c', 'x', 'y', 'z'],
            correct: 0
        },
        {
            question: 'q',
            answers: ['y', 'x', 'c', 'z'],
            correct: 2
        }
       
    ]//close return
 // close start

function resetGame () {
    return {
        qAsked: null, //quesitons asked
        score: 0,
        timer: 30,
        currentQuestion: 0
    }
}



//render question 
function renderScreen() {
    var progress = questions[currentQuestion];
    var questionDiv = $("<div class='question col-md-12'>");
    questionDiv.text(progress.question);
    $(".question-area").append(questionDiv);
    timeStart();
    for (var i = 0; i < progress.answers.length; i++){
         var answerDiv =  $("<div class='answer col-md-12'>");
         var answerButton = $("<button class='choice' button btn-info'>");
         answerButton.text(progress.answers[i]);
         answerDiv.append(answerButton);
         $(".answer-area").append(answerDiv);
    }
    window.timeCount = setInterval(timeStart, 1000);
}
    //randomly render answers

//checking correct
$(document).ready(function(){
//onclicks
    //start
    $(".start").on('click', function() {
        $(this).hide();
        renderScreen();
        //load question
        //start timer
    })


    //timer
var timeStart = function() {
    timer--;
    $("#timer").html("Time remaining: " + "00:" + timer + " secs");
    
    if (timer <= 0) {
        nextQuestion();
    }
}

function nextQuestion() {
    timer = 30;
    currentQuestion++;
    clearInterval(window.timeCount);

}

function clearDivs() {
    $(".question-area").empty();
    $(".answer-area").empty();
    $("#timer").empty();
}
    //incorrect
    //correct
    //reset
    $('#reset-button').on('click.reset',function(){
        clearData();
        $(this).hide();
        init()}) //initialize game after reset
 init()})
