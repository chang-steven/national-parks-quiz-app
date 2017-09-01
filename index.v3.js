//Sets the global object 'currentState' which will be available to the function set.  'currentState' will be populated by the function 'setCurrentState'
//'currentSet' to the current iteration of the question and answer set from 'quizSet'
let currentState = {
  questionNumber: 0,
  userCorrect: 0,
  userWrong: 0,
  totalQuestions: null
  } ;

//On page load 'quizApp' will run.  This function will perform the following:
//1. call the function 'startQuizPrompt'
//2. will set the 'totalQuestions' key to the number of items in 'quizSet'
//3. call 'setCurrentState' and pass the 'questionNumber' index positino from 'quizSet'
//4. call 'listenForClick'
//5. call 'renderQuestionPage'

//This function sets the state of 'currentState' which is the current question and answer data from 'quizSet'
function setCurrentState (quizInput) {
  for (var key in quizInput) {
    currentState[key] = quizInput[key]
  };
}

//This function will update the question page with data from 'currentState' and populate the HTML containers with the corresponding quiz text
function renderQuestionPage() {
  console.log('`renderQuestionPage` ran');
  clearForm();

  $('#js-question-text').text(currentState.question);
  $('#js-ans1').text(currentState.choices[0]);
  $('#js-ans2').text(currentState.choices[1]);
  $('#js-ans3').text(currentState.choices[2]);
  $('#js-ans4').text(currentState.choices[3]);
  $('.js-current-question').text('Question ' + (currentState.questionNumber + 1) + ' out of ' + currentState.totalQuestions);
  $('.js-current-score').text('Score: ' + currentState.userCorrect + ' Correct & ' + currentState.userWrong + ' Incorrect');
}

//This function will initiate all event listeners for clicks and submit.
//'submit' on submit will grab the value of the form and compare with the correct answer from 'currentState'.  If correct, will pass 'true' to 'showFeedbackPage' and increment the value for 'userCorrect' and if Incorrect will pass 'false' to 'showFeedbackPage' and increment the value for 'userWrong'.
//'startover' will pass currentState to callback function 'startOver'
//'next' in development
//'previous' in development

function listenForClick() {
  console.log('`listenForClick` ran');

    $('#quiz-form').submit( function (event) {
      console.log('Submit clicked');
      event.preventDefault();
      let submittedAnswer = $('input[name=radGroup]:checked', '#quiz-form').val();
      clearForm();

      if (submittedAnswer == currentState.answer) {
        currentState.userCorrect++;
        showFeedbackPage(true, currentState);
      }
      else {
        showFeedbackPage(false, currentState);
        currentState.userWrong++;
      }
  });

    $('.js-next').click(currentState, clickNext);
    $('.js-previous').click(currentState, clickPrevious);
    $('.js-startover').click(currentState, startOver);
}

//This is the callback function which will call 'showResultspage' if end of the quiz or increment the key 'questionNumber' and pass currentState to 'showResultspage'.  Otherwise will increment 'questionNumber' and will re-run 'setCurrentState' and 'renderQuestionPage'
  function clickNext() {
    console.log('`clickNext` ran');
    if (currentState.questionNumber+1 == currentState.totalQuestions) {
      showResultspage(currentState)
    }

    else {
      (currentState.questionNumber)++;
      setCurrentState(quizSet[currentState.questionNumber]);
      console.log(quizSet[currentState.questionNumber]);
      renderQuestionPage()
    }
  };

//This function will evaluate if this is the first page in the quiz and therefore prevent going to a previous page.  Otherise will decrement 'questionNumber' and re-run 'setCurrentState' and 'renderQuestionPage'

  function clickPrevious() {
    console.log('`clickPrevious` ran');
    if ((currentState.questionNumber--) < 1) {
      alert("Error!");
    }

    else {
      (currentState.questionNumber-1);
      setCurrentState(quizSet[currentState.questionNumber]);
      renderQuestionPage();
    }
  };

//This function will be called after the form is submitted and will receive a boolean.  This function shows the feedback modal windown indicating the correct response for true or incorrect response for false.
  function showFeedbackPage(boolean) {
    console.log('`showFeedbackPage` ran');
    let modal = document.getElementById('feedback-page');
    let exit = document.getElementsByClassName("close")[1];

      modal.style.display = "block";

      exit.onclick = function() {
        modal.style.display = "none";
      };

      $('.js-next').click( function() {
        modal.style.display = "none";
      });

      $('.js-startover').click( function() {
        modal.style.display = "none";
      });

      window.onclick = function(event) {
        if (event.target == modal) {
            modalstyle.display = "none";
        }
      };

//This code will populate the blurb and image data and post to the user
      $('.js-answer-blurb').text(currentState.blurb);
      $('#feedback-page').find('img').attr('src', currentState.image);

      if (boolean == true) {
        $('.js-feedback-header').text("You're Right!")
      }

      else {
          $('.js-feedback-header').text("Sorry, that doesn't seem to be right...")
      }
    };

//This function will be called at the end of the quiz.  This function will show the results modal window and indicate either passing or failing score based on the criteria of a score greater than 6.
  function showResultspage() {
    console.log('`showResultspage` ran');
    let modal = document.getElementById('results-page');
    let exit = document.getElementsByClassName("close")[1];
      modal.style.display = "block";
      exit.onclick = function() {
        modal.style.display = "none";
      };
      $('.js-next').click( function() {
        modal.style.display = "none";
      });
      $('.js-startover').click( function() {
        modal.style.display = "none";
      });
      window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
      };
    $('.js-final-score').text( 'Your final score: ' + currentState.userCorrect + ' out of 10' );
    if (currentState.userCorrect > 6) {
      $('.js-results-header').text("Congratulations, you're a Junior Park Ranger!");
      }
    else {
      $('.js-results-header').text("Sorry, looks like you need to visit more national parks.");
      }
  }

//This function resets radio inputs
  function clearForm() {
    document.getElementById("quiz-form").reset();
    // $('input[name="radGroup"]').prop('checked', false);
    console.log('`clearForm` ran');
  }

//On page load function start quiz will load the start page prompt
function startQuizPrompt() {
  let modal = document.getElementById('start-page');
  let exit = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    console.log('`startQuizPrompt` ran');
  $('.js-take-quiz-button').click( function() {
    modal.style.display = "none";
    });
  exit.onclick = function() {
    modal.style.display = "none";
    };
  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  };
}

function startOver () {
  if (confirm('Are you sure you want to start over?')) {
    console.log('`startOver` ran');
    currentState.userCorrect = 0;
    currentState.userWrong = 0;
    currentState.questionNumber = 0;
    setCurrentState(quizSet[currentState.questionNumber]);
    renderQuestionPage();
  };
}

function quizApp() {
  console.log('`quizApp` ran');
  startQuizPrompt();
  currentState.totalQuestions = quizSet.length;
  setCurrentState(quizSet[currentState.questionNumber]);
  listenForClick();
  renderQuestionPage();
}

$(quizApp);
