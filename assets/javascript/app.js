
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
            question: 'This actor turned down starring roles in The Matrix, Jurassic Park, The Lord of The Rings, and Die Hard: With a Vengeance:',
            answers: ['Sean Connery', 'Harrison Ford', 'Tommy Lee Jones', 'Bryan Cranston'],
            correct: 0,
            correction: 'Sean Connery'
        },
        {
            question: 'Which of the following actors did not appear in the 1997 film Anaconda?',
            answers: ['Ice Cube', 'Jennifer Lopez', 'Danny Trejo', 'Ice-T'],
            correct: 3,
            correction: 'Ice-T'
        },
        {
            question: 'This former SNL funny man shows up as himself in the 2009 film Zombieland:',
            answers: ['Norm MacDonald', 'Bill Murray', 'Dan Aykroyd', 'Kevin Nealon'],
            correct: 1,
            correction: 'Bill Murray'
        },
        {
            question: 'Which of the following characters was not eaten by a shark in the 1999 film Deep Blue Sea?',
            answers: ['Preacher (LL Cool J)', 'Russell Franklin (Samuel L. Jackson)', 'Tom Scoggins (Michael Rappaport)', 'Dr. Susan McAlester (Saffron Burrows)'],
            correct: 0,
            correction: 'Preacher (LL Cool J)'
        },
        {
            question: 'In the 1994 film Pulp Fiction, something bad happens every time Vincent Vega (John Travolta) enters:',
            answers: ['a bar', 'a car', 'a bathroom', 'an office'],
            correct: 2,
            correction: 'a bathroom'
        },
        {
            question: 'Which actor did not have a drivers license (or even learners permit) before production began on the 2001 film The Fast and the Furious?',
            answers: ['Michelle Rodriguez', 'Vin Diesel', 'Paul Walker', 'Ja Rule'],
            correct: 0,
            correction: 'Michelle Rodriguez'

        },
        {
            question: 'In the 1951 film The African Queen, Humphrey Bogart accidentally avoided the sickness which plagued most of the cast and crew by:',
            answers: ['flying offset for every meal', 'refusing to leave his trailer for  months', 'only eating a steak for every meal', 'only consuming whiskey instead of water'],
            correct: 3,
            correction: 'only consuming whiskey instead of water'
        },
        {
            question: 'This comedy duo randomly appears in the 2000 slasher-horror Scream 3',
            answers: ['Cheech and Chong', 'Jay and Silent Bob', 'The Blues Brothers', 'Penn and Teller'],
            correct: 1,
            correction: 'Jay and Silent Bob'
        },
        {
            question: 'Which actor wore a wig for every one of his James Bond films?',
            answers: ['Sean Connery', 'Pierce Brosnan', 'Roger Moore', 'Daniel Craig'],
            correct: 0,
            correction: 'Sean Connery'
        },
        {
            question: 'Although all were considered, James Cameron eventually cast Arnold Schwarzenegger as the Terminator because this frontrunner was "too nice":',
            answers: ['Tom Selleck', 'Mel Gibson', 'OJ SImpson', 'Michael Douglas'],
            correct: 2,
            correction: "OJ Simpson"
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
    $(".well-actually").remove();
}

function nextQuestion() {
    var qCheck = currentQuestion;
    if (qCheck < 10) {
        timer = 20;
        currentQuestion++;
        $(".correct-score").append(`Correct Answers: ${ansCorrect}`);
        $(".incorrect-score").append(`Incorrect Answers: ${ansIncorrect}`);
        clearInterval(window.timeCount);
        clearDivs();
        renderScreen();
    } else {
        endScreen();
    }
}

function endScreen() {
    clearDivs();
    $("#reset-button").show();
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

// function showRight(){
//     for (i = )
// }

  
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
        var guess = progress.answers[selection];
        var correctScore = $(".score-area").html("<div class='md-col-5 correct-score'>");
        var incorrectScore = $(".score-area").append("<div class='md-col-5 incorrect-score'>");
        var rightChoice = progress.correct;
        var correction = progress.correction;
        if (selection !== rightChoice){//answer incorrect
            console.log("incorrect answer");
            ansIncorrect++;
            $("#timer").empty(); //not working
            $(this).toggleClass("wrong");
            $("body").append("<div class='well-actually'>");
            $(".well-actually").text(`You guessed ${guess}. The Correct answer was ${correction}`)

            // for (var i = 0; i < progress.answers.length; i++) {
            //         if (i === correction){
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
