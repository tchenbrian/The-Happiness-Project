function submitAnswers() {
  var total = 10;
  var score = 0;
  
  //Get user input
    
  var q1 = document.forms['quizForm']['q1'].value;
  var q2 = document.forms['quizForm']['q2'].value;
  var q3 = document.forms['quizForm']['q3'].value;
  var q3 = document.forms['quizForm']['q3'].value;
  var q4 = document.forms['quizForm']['q4'].value;
  var q5 = document.forms['quizForm']['q5'].value;
  var q6 = document.forms['quizForm']['q6'].value;
  var q7 = document.forms['quizForm']['q7'].value;
  var q8 = document.forms['quizForm']['q8'].value;
  var q9 = document.forms['quizForm']['q9'].value;
  var q10 = document.forms['quizForm']['q10'].value;
  
    
  // Validation  
 /* for(var i = 1; i <= total; i++) {
    if(eval('q' + i) === null || eval('q' + i) == '' ) {
      alert('Please complete question ' + i);
      return false;
    }
  } */
  
  // Set correct answers
  var answers = ["Object","Function","Variables","True or False","7","Hello James","32","2","bob.age","Parameters"];
  
  for(var i = 1; i <= total; i++) {
    // Check answers
    if (eval('q' + i) == answers[i - 1]) {
      score++;
    }
  } 

  // Display results
  var results = document.getElementById('results');
  results.innerHTML = '<h3>You scored <span>' + score + '</span> out of <span>' + total + '.' + '</span></h3>';
  
    if (score >= 5) {
        results.innerHTML += '<h3>Great job!</h3>';
    } else {
        results.innerHTML += '<h3>You can do it!</h3>';
    }
        
  
  return false;
    
}

function displayResult() {
    
  var q1A = document.forms['quizForm']['q1'].value;
  var q2A = document.forms['quizForm']['q2'].value;
  var q3A = document.forms['quizForm']['q3'].value;
  var q3A = document.forms['quizForm']['q3'].value;
  var q4A = document.forms['quizForm']['q4'].value;
  var q5A = document.forms['quizForm']['q5'].value;
  var q6A = document.forms['quizForm']['q6'].value;
  var q7A = document.forms['quizForm']['q7'].value;
  var q8A = document.forms['quizForm']['q8'].value;
  var q9A = document.forms['quizForm']['q9'].value;
  var q10A = document.forms['quizForm']['q10'].value;
    
    
 var resultsContainer = document.getElementById('quizResults');
 resultsContainer.style.display = "block";
    
    var answerNames = ["Object","Function","Variables","True","7","Hello James","32","2","bob.age","Parameters"];
    var userAnswers = [q1A,q2A,q3A,q3A,q4A,q5A,q6A,q7A,q8A,q9A,q10A];
    
    
    var correctAnswerStatus = document.getElementsByClassName("correctAnswer");

        for (i = 0; i < correctAnswerStatus.length; i++) {
        
            correctAnswerStatus[i].innerHTML += answerNames[i];
        
        }
    
    var userAnswerStatus = document.getElementsByClassName("userAnswer");

        for (i = 0; i < userAnswerStatus.length; i++) {
        
            userAnswerStatus[i].innerHTML += userAnswers[i];
        
        }   
    
    document.getElementById("quizform").style.display="none";
}

function quizDisplay() {
    
    document.getElementById("quizIntro").style.display = "none";
    document.getElementById("quizStarterText").style.display = "none";
    document.getElementById("quiz").style.display = "block";
}