
var game;
currentQuestion = 0;
timer = 20;
gameOver = false;
var ansCorrect = 0;
var ansIncorrect = 0;

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
            question: '',
            answers: ['z', 'x', 'y', 'c'],
            correct: 3
        },
        {
            question: 'This former SNL funny man shows up as himself in the 2009 film Zombieland:',
            answers: ['Norm MacDonald', 'Bill Murray', 'Dan Aykroyd', 'Kevin Nealon'],
            correct: 1
        },
        {
            question: 'Which of the following characters was not eaten by a shark in the 1999 film Deep Blue Sea',
            answers: ['Preacher (LL Cool J)', 'Russell Franklin (Samuel L. Jackson)', 'Tom Scoggins (Michael Rappaport)', 'Dr. Susan McAlester (Saffron Burrows)'],
            correct: 0
        },
        {
            question: 'q',
            answers: ['y', 'x', 'c', 'z'],
            correct: 2
        },
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
            question: 'This comedy duo randomly appears in the 2000 slasher-horror Scream 3',
            answers: ['Cheech and Chong', 'Jay and Silent Bob', 'The Blues Brothers', 'Penn and Teller'],
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
        timer: 20,
        currentQuestion: 0
    }
}

function clearDivs() {
    $(".question-area").empty();
    $(".answer-area").empty();
    $("#timer").empty();
}

function nextQuestion() {
    var qCheck = currentQuestion;
    if (qCheck < 10) {
        timer = 20;
        currentQuestion++;
        $(".correct-score").append(`Correct Answers: ${ansCorrect}`);
        $(".incorrect-score").append(`Inorrect Answers: ${ansIncorrect}`);
        clearInterval(window.timeCount);
        clearDivs();
        renderScreen();
    } else {
        endScreen();
    }
}

function endScreen() {
    clearDivs();

}

var timeStart = function() {
    timer--;
    $("#timer").html("Time remaining: " + "00:" + timer + " secs");
    if (timer <= 0) {
        $(".correct-score").empty();
        $(".incorrect-score").empty();
        ansIncorrect++;
        nextQuestion();
    } 
}

//render question 
function renderScreen() {
    var progress = questions[currentQuestion];
    var questionDiv = $("<div class='question col-md-12'>");
    questionDiv.text(progress.question);
    $(".question-area").append(questionDiv);
    for (var i = 0; i < progress.answers.length; i++){
         var answerDiv =  $("<div class='answer col-md-12'>");
         var answerButton = $("<button class='choice'>");
         $(".choice").attr("id", i);
         answerButton.text(progress.answers[i]);
         answerButton.attr('data-id', [i]);
         answerDiv.append(answerButton);
         $(".answer-area").append(answerDiv);
        //  if (i === progress.correct){
        //      answerButton.data("id", "right");
        //  }
        }
    
    window.timeCount = setInterval(timeStart, 1000);
    timeStart();
    // checkAnswer();
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

    $(document).on("click", ".choice", function(){ //try changin choice to document here
        var selection = $(this).data("id");
        var progress = questions[currentQuestion];
        var correctScore = $(".score-area").html("<div class='md-col-5 correct-score'>");
        var incorrectScore = $(".score-area").append("<div class='md-col-5 incorrect-score'>");
        var rightChoice = questions[currentQuestion].correct;
        if (selection !== rightChoice){//answer incorrect
            console.log("incorrect answer");
            ansIncorrect++;
            $("#timer").empty(); //not working
            $(this).toggleClass("wrong");
            // showRight();

            // for (var i = 0; i < progress.answers.length; i++) {
            //         if (i === rightChoice){
            //             $(i).toggleClass("right");
            //         }
            // }
            window.setTimeout(nextQuestion, 3500);
        } else {//answer correct
            console.log("correct answer");
            ansCorrect++
            $("#timer").empty();  //not working   
            $(this).toggleClass("right");//change background color to green
            //graphic?
            window.setTimeout(nextQuestion, 1500);
            
        }
    })
    //reset
    $('#reset-button').on('click.reset',function(){
        clearData();
        $(this).hide();
        init()}) //initialize game after reset
 init()})
