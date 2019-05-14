// JavaScript Document
$(document).ready(function(){
  "use strict";
  
/* You can add as many questions as you want just add the following syntax next to the current question.
{
  question: "Your Question Here",
  choices: ['choice1', 'choice2', 'choice3', 'choice4'],
//Correct choice number (Remember that choices are 0=1st choice, 1=2nd choice, 2=3rd choice, 3=4th choice).
  correctAnswer: 0
}

*/
  var questions = [{
    question: "Your Question Here",
    choices: ['choice1', 'choice2', 'choice3', 'choice4'],
  //Correct choice number (Remember that choices are 0=1st choice, 1=2nd choice, 2=3rd choice, 3=4th choice).
    correctAnswer: 0
  }, {
    question: "A professional who buys and sells shares and other securities at the stock exchange on behalf of investors is known as",
    choices: ["Custodian", "Stock broker", "Stock exchange", "Fund manager"],
    correctAnswer: 0
  }
  //Add more questions above.
  ];
  




  
  var questionCounter = 0;  //Tracks question number
  var selections = [];      //Array containing user choices
  var quiz = $('.content'); //Quiz div object
  var perQuestionTime = 60;
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter]) ) {
      $('#warning').text('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    $('#warning').text('');
    }
  });
  
// Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
// Creates and returns the div that contains the questions and 
// the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
  // this is new
  var warningText = $('<p id="warning">');
  qElement.append(warningText);
  
  return qElement;

  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    var rand = Math.floor(Math.random() * 1000);
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" class="answer" name="answer'+rand+'" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input.answer:checked').val();
  }
  
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        setTimer();
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
       }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }
  
//Count Down Timer For The Quiz (Experimental Do not uncomment)
//   var timer2 = "00:01";
//   var interval = setInterval(function tim() {

//   var timer = timer2.split(':');
// //by parsing integer, I avoid all extra string processing
//   var minutes = parseInt(timer[0], 10);
//   var seconds = parseInt(timer[1], 10);
//   --seconds;
//   minutes = (seconds < 0) ? --minutes : minutes;
//   if (minutes < 0)clearInterval(interval);
//     seconds = (seconds < 0) ? 59 : seconds;
//     seconds = (seconds < 10) ? '0' + seconds : seconds;
//     //minutes = (minutes < 10) ?  minutes : minutes;
//    $('.countdown').html(minutes + ':' + seconds);
//    timer2 = minutes + ':' + seconds;
// }, 1000);


 var interval ;
 function setTimer(){
   clearInterval(interval);
   var endTime = perQuestionTime;
    interval = setInterval(function(){
    var minutes = parseInt(endTime / 60);
    var seconds =  endTime % 60;
    if (endTime <= 0) {
      clearInterval(interval);
      questionCounter++;
      displayNext();
    }
    if(minutes < 10) minutes = '0'+minutes;
    if(seconds < 10) seconds = '0'+seconds;
    $('.countdown').html(minutes + ':' + seconds);
    endTime--;
  }, 1000);
 }
//  setTimer(perQuestionTime);

// Computes score and returns a paragraph element to be displayed
  function displayScore(isFinal) {
    var score = $('<h3>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < questions.length; i++) {
      
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
        localStorage.removeItem('quiz1');
        localStorage.setItem('quiz1', JSON.stringify(numCorrect));
      }

    }
// Calculate score and display relevant message
  var percentage = numCorrect / questions.length;
  if (percentage >= 0.9){
      score.append('Incredible! You got ' + numCorrect + ' out of ' +
                 questions.length + ' questions right!');
  }
  
  else if (percentage >= 0.7){
      score.append('Good job! You got ' + numCorrect + ' out of ' +
                 questions.length + ' questions right!');
  }
  
  else if (percentage >= 0.5){
      score.append('You got ' + numCorrect + ' out of ' +
                 questions.length + ' questions right.');
  }
  
  else {
      score.append('You only got ' + numCorrect + ' out of ' +
                 questions.length + ' right. Want to try again?');
  }
  //Storing the score to localStorage.

///////////////////////////////////////////////////////////////Experimental Code (Do Not Uncomment)///////////////////////////////////////////////////////
  // var userScores = JSON.parse(localStorage.getItem('userScores') || '[]');
  // userScores.push({
  //   username: 'abc',
  //   numCorrect,
  //   questions: questions.length
  // });
  // localStorage.setItem('userScores', JSON.stringify( userScores));

  quiz.html(' ');
  setTimeout(function(){
    for (var i = 0; i < questions.length; i++) {
      var nextQuestion = createQuestionElement(i);
      $(nextQuestion).attr('id', 'question-'+ i+1);
      quiz.append(nextQuestion).fadeIn();
      if(!isFinal){
        $(nextQuestion).find('ul li').eq(selections[i]).find('input').prop('checked', true);
        (function(i){
          $(nextQuestion).find('ul li input:radio').change(function() {
            selections[i] = +this.value;
          });
        })(i);
      }else{
        $(nextQuestion).find('ul li input[type="radio"], ul li input[type="checkbox"]').hide();
      }
      // $(nextQuestion).find('ul li').eq(selections[i]).find('input').prop('checked', true);
      if(isFinal){
        if (selections[i] === questions[i].correctAnswer) {
          $(nextQuestion).find('ul li').eq(selections[i]).css('color', 'green');
        } else {
          $(nextQuestion).find('ul li').eq(selections[i]).css('color', 'red');
        }
      }
    }
    if(!isFinal){
      var saveBtn = $('<button class="btn btn-primary">Confirm</button>');
      var nextQuizBtn = $('<button onclick="location.href =\'../quiz4/quiz4.html\'">Next Module</button>');
      saveBtn.on('click', function(){
        displayScore(true);
        quiz.prepend(nextQuizBtn);
      })
      quiz.prepend(saveBtn);

    }
    
  }, 100);
  [

  ]

    return score;
  }
});
